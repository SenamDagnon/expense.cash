import _ from 'underscore';
import Ion from '../Ion';
import {request} from '../Network';
import IONKEYS from '../../IONKEYS';
import CONFIG from '../../CONFIG';
import redirectToSignIn from './ActionsSignInRedirect';

/**
 * Sign in with the API
 *
 * @param {string} login
 * @param {string} password
 * @param {string} twoFactorAuthCode
 * @param {boolean} useExpensifyLogin
 * @param {string} exitTo
 * @returns {Promise}
 */
function signIn(login, password, twoFactorAuthCode = '', useExpensifyLogin = false, exitTo) {
    console.debug('[SIGNIN] Authenticating with expensify login?', useExpensifyLogin ? 'yes' : 'no');

    return request('Authenticate', {
        useExpensifyLogin,
        partnerName: CONFIG.EXPENSIFY.PARTNER_NAME,
        partnerPassword: CONFIG.EXPENSIFY.PARTNER_PASSWORD,
        partnerUserID: login,
        partnerUserSecret: password,
        twoFactorAuthCode,
        exitTo
    })
        // Handle any of our jsonCodes
        .then((responseData) => {
            if (responseData) {
                // AuthToken expired, go to the sign in page
                if (responseData.jsonCode === 407) {
                    redirectToSignIn();
                    throw new Error('[API] Auth token expired');
                }

                if (responseData.jsonCode !== 200) {
                    throw new Error(responseData.message);
                }
            }

            return new Promise(resolve => resolve());
        })
        .catch((err) => {
            console.error(err);
            console.debug('[SIGNIN] Request error');
            return Ion.merge(IONKEYS.SESSION, {error: err.message});
        });
}

/**
 * Delete login
 * @param {string} authToken
 * @param {string} login
 * @returns {Promise}
 */
function deleteLogin(authToken, login) {
    return request('DeleteLogin', {
        authToken,
        partnerName: CONFIG.EXPENSIFY.PARTNER_NAME,
        partnerPassword: CONFIG.EXPENSIFY.PARTNER_PASSWORD,
        partnerUserID: login,
    }).catch(err => Ion.merge(IONKEYS.SESSION, {error: err.message}));
}

/**
 * Sign out of our application
 *
 * @returns {Promise}
 */
function signOut() {
    return redirectToSignIn()
        .then(() => Ion.multiGet([IONKEYS.SESSION, IONKEYS.CREDENTIALS]))
        .then(data => deleteLogin(data.session.authToken, data.credentials.login))
        .then(Ion.clear)
        .catch(err => Ion.merge(IONKEYS.SESSION, {error: err.message}));
}

/**
 * Make sure the authToken we have is OK to use
 *
 * @returns {Promise}
 */
function verifyAuthToken() {
    return Ion.multiGet([IONKEYS.LAST_AUTHENTICATED, IONKEYS.CREDENTIALS])
        .then(({last_authenticated, credentials}) => {
            const haveCredentials = !_.isNull(credentials);
            const haveExpiredAuthToken = last_authenticated < new Date().getTime() - CONFIG.AUTH_TOKEN_EXPIRATION_TIME;

            if (haveExpiredAuthToken && haveCredentials) {
                console.debug('Invalid auth token: Token has expired.');
                return signIn(credentials.login, credentials.password);
            }

            return request('Get', {returnValueList: 'account'}).then((data) => {
                if (data && data.jsonCode === 200) {
                    return Ion.merge(IONKEYS.SESSION, data);
                }

                // If the auth token is bad and we didn't have credentials saved, we want them to go to the sign in page
                return redirectToSignIn();
            });
        });
}

export {
    signIn,
    signOut,
    verifyAuthToken,
};
