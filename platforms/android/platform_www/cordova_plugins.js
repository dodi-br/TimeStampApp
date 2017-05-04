cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "id": "cordova-plugin-touch-id.TouchID",
        "file": "plugins/cordova-plugin-touch-id/www/TouchID.js",
        "pluginId": "cordova-plugin-touch-id",
        "clobbers": [
            "window.plugins.touchid"
        ]
    },
    {
        "id": "ionic-plugin-keyboard.keyboard",
        "file": "plugins/ionic-plugin-keyboard/www/android/keyboard.js",
        "pluginId": "ionic-plugin-keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ],
        "runs": true
    },
    {
        "id": "cordova-plugin-android-fingerprint-auth.FingerprintAuth",
        "file": "plugins/cordova-plugin-android-fingerprint-auth/www/FingerprintAuth.js",
        "pluginId": "cordova-plugin-android-fingerprint-auth",
        "clobbers": [
            "FingerprintAuth"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-console": "1.0.5",
    "cordova-plugin-device": "1.1.4",
    "cordova-plugin-splashscreen": "4.0.3",
    "cordova-plugin-statusbar": "2.2.1",
    "cordova-plugin-touch-id": "3.2.0",
    "cordova-plugin-whitelist": "1.3.1",
    "ionic-plugin-keyboard": "2.2.1",
    "cordova-plugin-android-fingerprint-auth": "1.2.7"
};
// BOTTOM OF METADATA
});