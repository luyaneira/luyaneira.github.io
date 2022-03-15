import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";

var currentPopup = undefined;
var isCoWebSiteOpened =  false;
var urlTutorial = "https://db-planet.deutschebahn.com/pages/telefonie/apps/content/workadventure-erste-schritte";

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

var zoneIntro = "intro";
var zoneVisibility = "visibility";
var zoneTutorial = "tutorial";
var zoneTutorial1 = "tutorial1";
var zoneTutorial2 = "tutorial2";
var zoneGuide = "guide";
var zoneGuide1 = "guide1";
var zoneGuide2 = "guide2";

var valVisibility = "visible";

var guideMsg = "Wegweiser\n\n" +
"Hauptbahnhof (Norden): Stiller Bereich\n" +
"Dicker Bulle (Nordwesten): Worms\n" +
"Green Pub (Nordosten): Pong\n" +
"Marktstand (Zentral): Treffpunkt\n" +
"Cocktailbar (Südwesten): Treffpunkt\n" +
"Dancehall (Südosten): Musik\n" +
"Silberturm (Süden): Minirätsel\n"

var tutorialMsg = "Möchtest du dir das Tutorial ansehen?"

WA.room.onEnterZone(zoneVisibility, () => {
    valVisibility = true;
})

WA.room.onLeaveZone(zoneVisibility, () => {
    valVisibility = false;
})

WA.room.onEnterZone(zoneTutorial, () => {
    currentPopup = WA.ui.openPopup("popUpTutorial", tutorialMsg, [
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
                WA.nav.openCoWebSite(urlTutorial);
                isCoWebSiteOpened = true;
                closePopUp();
            })
        }
    ]);
})

WA.room.onEnterZone(zoneTutorial1, () => {
    currentPopup = WA.ui.openPopup("popUpTutorial1", tutorialMsg, [
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
                WA.nav.openCoWebSite(urlTutorial);
                isCoWebSiteOpened = true;
                closePopUp();
            })
        }
    ]);
})

WA.room.onEnterZone(zoneTutorial2, () => {
    currentPopup = WA.ui.openPopup("popUpTutorial2", tutorialMsg, [
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
                WA.nav.openCoWebSite(urlTutorial);
                isCoWebSiteOpened = true;
                closePopUp();
            })
        }
    ]);
})
 
WA.room.onLeaveZone(zoneTutorial, () =>{
    closePopUp();
 
    if (isCoWebSiteOpened) {
        WA.nav.closeCoWebSite();
        isCoWebSiteOpened = false;
    }
})

WA.room.onLeaveZone(zoneTutorial1, () =>{
    closePopUp();
 
    if (isCoWebSiteOpened) {
        WA.nav.closeCoWebSite();
        isCoWebSiteOpened = false;
    }
})

WA.room.onLeaveZone(zoneTutorial2, () =>{
    closePopUp();
 
    if (isCoWebSiteOpened) {
        WA.nav.closeCoWebSite();
        isCoWebSiteOpened = false;
    }
})

WA.room.onEnterZone(zoneIntro, () => {
    currentPopup = WA.ui.openPopup("popUpIntro", "Willkommen beim DigitalSummit in WorkAdventure!\n" +
    "Zur Bewegung verwenden Sie die Pfeiltasten oder navigieren per Rechtsklick zu einem Punkt auf der Karte.\n" +
    "Wenn Sie ein ausführliches Tutorial anschauen möchten können Sie zur Tutorial-Tafel vor dem Bahnhofsgebäude laufen.\n" +
    "Wir wünschen Ihnen viel Spaß beim DigitalSummit in WorkAdventure!", [
        {
            label: "Alles Klar!",
            callback: (popup => {
                closePopUp();
            })
        }]);    
})

WA.room.onLeaveZone(zoneIntro, () => {
    closePopUp();
})

WA.room.onEnterZone(zoneGuide, () => {
    currentPopup = WA.ui.openPopup("popUpGuide", guideMsg, [
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
 })

WA.room.onEnterZone(zoneGuide1, () => {
    currentPopup = WA.ui.openPopup("popUpGuide1", guideMsg, [
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onEnterZone(zoneGuide2, () => {
    currentPopup = WA.ui.openPopup("popUpGuide2", guideMsg, [
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})
 
WA.room.onLeaveZone(zoneGuide, () =>{
    closePopUp();
})

WA.room.onLeaveZone(zoneGuide1, () =>{
    closePopUp();
})

WA.room.onLeaveZone(zoneGuide2, () =>{
    closePopUp();
})