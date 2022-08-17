import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";
import {openPopupWithWebsiteYesNo, closePopupWithWebsite, closePopUp, openPopUpOkOnly } from "./popUp_script.js";

var introMsg = "Herzlich Willkommen zur DB TechCon 2022!\n\n" +
"Um Dich zu bewegen, nutze die Pfeiltasten auf der Tastatur oder navigiere per Rechtsklick zu einem Punkt auf der Karte. Zoomen kannst Du mit dem Mausrad.\n" +
"Ein ausführliches Tutorial findest Du auf der Anschlagtafel links und rechts vom Eingang des Bahnhofs.\n\n" +
"Wir wünschen Euch viel Spaß!";
var introLabel = "Alles Klar";

var zoneIntro = "intro";
var popUpIntro = "popUpIntro";

WA.onInit().then(() => {
    openPopUpOkOnly(popUpIntro, introMsg, introLabel);
    WA.camera.set(1089, 845, 1150, 400, false, false);
});

WA.room.onLeaveZone(zoneIntro, () => {
    closePopUp();
})

var urlTutorial = "https://db-planet.deutschebahn.com/pages/telefonie/apps/content/workadventure-erste-schritte";
var tutorialMsg = "Möchtest Du Dir das Tutorial ansehen?";

const zone2PopUpMap = new Map ([
    ["tutorial1", "popUpTutorial1"],
    ["tutorial2", "popUpTutorial2"]
]);

for (const tutZone of zone2PopUpMap.keys()) {
    WA.room.onEnterZone(tutZone, () => {openPopupWithWebsiteYesNo(zone2PopUpMap.get(tutZone), tutorialMsg, urlTutorial)})
    WA.room.onLeaveZone(tutZone, () =>{closePopupWithWebsite()})
}

var zoneMictest = "mictest";
var zoneMeettest = "meettest";

var popUpMictest = "popUpMictest";
var popUpMeettest = "popUpMeettest";

var mictestMsg = "In WorkAdventure kannst du in bestimmten Bereichen mit anderen sprechen. Laufe dazu mit deinem Avatar an sie heran. Unten rechts im Bild kannst du Mikrofon und Kamera ein- & ausschalten.";
var meettestMsg = "Wenn du in einer Meeting- oder Networkzone bist, entmute dich um zu sprechen. Du kannst auch deine Kamera aktivieren oder deinen Bildschirm teilen.";

WA.room.onEnterZone(zoneMictest, () => {openPopUpOkOnly(popUpMictest, mictestMsg, introLabel),
    WA.onInit().then(async () => {
        var position = await WA.player.getPosition();
        console.log(position.x, position.y),
        WA.camera.set(position.x, position.y, 2240, 400, false, true);
    })
})

WA.room.onLeaveZone(zoneMictest, () =>{closePopUp(),
    WA.onInit().then(async () => {
        var position = await WA.player.getPosition();
        console.log(position.x, position.y);
        WA.camera.set(position.x, position.y, 1150, 400, false, true);
    })
})

WA.room.onEnterZone(zoneMeettest, () => {openPopUpOkOnly(popUpMeettest, meettestMsg, introLabel),
    WA.onInit().then(async () => {
        var position = await WA.player.getPosition();
        console.log(position.x, position.y),
        WA.camera.set(position.x, position.y, 2240, 400, false, true);
    })
})

WA.room.onLeaveZone(zoneMeettest, () =>{closePopUp(),
    WA.onInit().then(async () => {
        var position = await WA.player.getPosition();
        console.log(position.x, position.y);
        WA.camera.set(position.x, position.y, 1150, 400, false, true);
    })
})