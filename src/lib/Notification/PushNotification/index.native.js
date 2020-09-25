import {UrbanAirship, EventType} from 'urbanairship-react-native';
import Ion from '../../Ion';
import IONKEYS from '../../../IONKEYS';

/* ====== Private Functions ====== */

const notificationTypeActionMap = {};

/**
 * Setup listener for push notifications, and trigger any bound actions.
 */
function setupPushNotificationCallbacks() {
    UrbanAirship.addListener(EventType.PushReceived, (notification) => {
        console.debug(`[PUSH_NOTIFICATION] Push received - {
            title: ${notification.title},
            message: ${notification.message},
            payload: ${notification.payload}
        }`);

        if (!notification.payload.type) {
            console.debug('[PUSH_NOTIFICATION] Notification of unknown type received...ignoring.');
            return;
        }
        if (!notificationTypeActionMap[notification.payload.type]) {
            console.debug(`[PUSH_NOTIFICATION] No callback setup for notification type: ${notification.payload.type}`);
            return;
        }

        const action = notificationTypeActionMap[notification.payload.type].action;
        action(...notification.payload);
    });
}

/* ====== Public Functions ====== */

/**
 * Get permissions and register this device as a named user in AirshipAPI.
 */
function enablePushNotifications() {
    UrbanAirship.enableUserPushNotifications()
        .finally(() => {
            Ion.connect({
                key: IONKEYS.SESSION,
                callback: (sessionData) => {
                    // This will register this device with the named user associated with this accountID,
                    // or clear the the named user (deregister this device) if sessionData.accountID is undefined
                    UrbanAirship.setNamedUser(sessionData.accountID.toString() || undefined);
                }
            });
        })
        .then(() => {
            setupPushNotificationCallbacks();
        });
}

/**
 * Bind an action (from src/lib/actions) to a push notification of a given type.
 * See https://github.com/Expensify/Web-Expensify/blob/master/lib/MobilePushNotifications.php for the various
 * types of push notifications sent, along with the data that they provide.
 *
 * @param {string} notificationType
 * @param {Function} action
 */
function bindActionToPushNotification(notificationType, action) {
    notificationTypeActionMap[notificationType] = action;
}

export default {
    enablePushNotifications,
    bindActionToPushNotification,
};
