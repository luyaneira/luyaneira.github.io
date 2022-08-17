import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";

var currentPopup = undefined;
var isCoWebSiteOpened =  false;

WA.onInit().then(() => {
    console.log('Current player name: ', WA.player.name);
});

export function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

/**
 * @param {String} popUpName
 * @param {String} msg
 * @param {String} label
 */
export function openPopUpOkOnly(popUpName, msg, label) {
    currentPopup = WA.ui.openPopup(popUpName, msg, [
        {
            label: label,
            callback: (popup => {
                closePopUp();
            })
        }]);
}

/**
 * @param {String} popUpName
 * @param {String} msg
 * @param {String} label
 * @param {number} posX
 * @param {number} posY
 * @param {number} width
 * @param {number} height
 * @param {boolean} lockCam
 * @param {boolean} smoothZoom
 */
 export function openPopUpOkOnlyAndSetCamera(popUpName, msg, label, posX, posY, width, height, lockCam, smoothZoom) {
    currentPopup = WA.ui.openPopup(popUpName, msg, [
        {
            label: label,
            callback: (popup => {
                closePopupAndSetCamera(posX, posY, width, height, lockCam, smoothZoom);
            })
        }]);
        WA.camera.set(posX, posY, width, height, lockCam, smoothZoom);
}

/**
 * @param {String} popUpName
 * @param {String} msg
 * @param {String} websiteUrl
 */
export function openPopupWithWebsiteYesNo(popUpName, msg, websiteUrl) {
    currentPopup = WA.ui.openPopup(popUpName, msg, [
        {
            label: "Nein",
            callback: (popup => {
                isCoWebSiteOpened = false;
                closePopUp();
            })
        },
        {
            label: "Ja",
            callback: (popup => {
                WA.nav.openTab(websiteUrl);
                isCoWebSiteOpened = true;
                closePopUp();
            })
        }
    ]);
}

export function closePopupWithWebsite() {
    closePopUp();
    
    if (isCoWebSiteOpened) {
        closeCoWebSite();
        isCoWebSiteOpened = false;
    }
}

/**
 * @param {number} posX
 * @param {number} posY
 * @param {number} width
 * @param {number} height
 * @param {boolean} lockCam
 * @param {boolean} smoothZoom
 */
export function closePopupAndSetCamera(posX, posY, width, height, lockCam, smoothZoom) {
    closePopUp();
    WA.camera.set(posX, posY, width, height, lockCam, smoothZoom);
}