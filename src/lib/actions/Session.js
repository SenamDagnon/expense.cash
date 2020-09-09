import Ion from '../Ion';
import * as API from '../API';
import IONKEYS from '../../IONKEYS';
import redirectToSignIn from './SignInRedirect';

let credentials;
Ion.connect({
    key: IONKEYS.CREDENTIALS,
    callback: val => credentials = val,
});

/**
 * Sign in with the API
 *
 * @param {string} partnerUserID
 * @param {string} partnerUserSecret
 * @param {string} twoFactorAuthCode
 * @param {string} exitTo
 * @param {boolean} useExpensifyLogin
 *
 * @returns {Promise}
 */
function signIn(partnerUserID, partnerUserSecret, twoFactorAuthCode = '', exitTo) {
    return API.authenticate({
        partnerUserID,
        partnerUserSecret,
        twoFactorAuthCode,
        exitTo
    });
}

/**
 * Clears the Ion store and redirects user to the sign in page
 */
function signOut() {
    redirectToSignIn();
    API.deleteLogin({
        partnerUserID: credentials.login
    });
    Ion.clear();
}

export {
    signIn,
    signOut,
};
