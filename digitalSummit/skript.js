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
var zoneTutorial = "tutorial";
var zoneTutorial1 = "tutorial1";
var zoneTutorial2 = "tutorial2";
var zoneGuide = "guide";
var zoneGuide1 = "guide1";
var zoneGuide2 = "guide2";
var zonePong = "pong";

var introMsg = "Willkommen beim Digital Summit in WorkAdventure.\n\nWir freuen uns, dass Sie bei unserem virtuellen Get-together dabei sind." +
"Nutzen Sie hier die Möglichkeit sich mit anderen Kolleg:innen auszutauschen und zu vernetzen. Zudem haben wir unterhaltsame Angebote versteckt." +
"Gehen Sie eigenständig auf Entdeckungstour oder orientieren sich an den Wegweisern." +
"Um sich zu bewegen, nutzen Sie die Pfeiltasten auf Ihrer Tastatur oder navigieren per Rechtsklick zu einem Punkt auf der Karte." +
"Wenn Sie sich ein ausführliches Tutorial anschauen möchten, finden Sie dieses auf der Tafel vor dem Bahnhofsgebäude.\n\n" +
"Wir wünschen Ihnen viel Spaß!";

var guideMsg = "Wegweiser\n\n" +
"Hauptbahnhof (Norden): Stiller Bereich\n" +
"Dicker Bulle (Nordwesten): Worms\n" +
"Green Pub (Nordosten): Pong\n" +
"Marktstand (Zentral): Treffpunkt\n" +
"Cocktailbar (Südwesten): Treffpunkt & Cocktails\n" +
"Dancehall (Südosten): Musik\n" +
"Silberturm (Süden): Minirätsel\n";

var tutorialMsg = "Möchten Sie sich das Tutorial ansehen?";

var pongMsg = "Pong gegeneinander?\n\n1.Wählen Sie Online-Mehrspielermodus\n" +
"2.Wählen Sie 'Beiläufig'\n3.Geben Sie eine Zimmernummer ein und klicken Sie auf 'Zimmer ändern'\n" +
"4. Teilen Sie die Zimmernummer Ihrem Partner mit\n\n" +
"Die Steuerung funktioniert mit den Pfeiltasten."

WA.room.onEnterZone(zoneIntro, () => {
    currentPopup = WA.ui.openPopup("popUpIntro", introMsg, [
        {
            label: "Alles Klar!",
            callback: (popup => {
                closePopUp();
            })
        }]);
    WA.camera.set(1056,160,2240,400,false,false);
})

WA.room.onLeaveZone(zoneIntro, () => {
    closePopUp();
    WA.onInit().then(async () => {
        var position = await WA.player.getPosition();
        WA.camera.set(position.x, position.y, 400, 400, false, true);
    })
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
                WA.openTab(urlTutorial);
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
                WA.openTab(urlTutorial);
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
                WA.openTab(urlTutorial);
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

WA.room.onEnterZone(zonePong, () => {
    currentPopup = WA.ui.openPopup("popUpPong", pongMsg, [
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);    
})

WA.room.onLeaveZone(zonePong, () => {
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