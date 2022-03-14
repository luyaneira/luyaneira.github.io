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

WA.room.onEnterZone(zoneIntro, () => {
    currentPopup = WA.ui.openPopup("popUpIntro", "Willkommen beim DigitalSummit in WorkAdventure!\n" +
    "Zur Bewegung verwenden Sie die Pfeiltasten oder navigieren per Rechtsklick zu einem Punkt auf der Karte.\n" +
    "Wenn Sie ein ausführliches Tutorial anschauen möchten können Sie zur Tutorial-Tafel vor dem Bahnhofsgebäude laufen.\n" +
    "Wir wünschen Ihnen viel Spaß beim DigitalSummit im WorkAdventure!", [
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

WA.room.onEnterZone(zoneTutorial, () => {
   currentPopup = WA.ui.openPopup("popUpTutorial", "Möchtest du dir das Tutorial ansehen?.",[
        {
            label: "Tutorial",
            callback: (popup => {
                WA.nav.openCoWebSite(urlTutorial);
                isCoWebSiteOpened = true;
                closePopUp();
            })
        }]);
})

WA.room.onLeaveZone(zoneTutorial, () =>{
    closePopUp();

    if (isCoWebSiteOpened) {
        WA.nav.closeCoWebSite();
        isCoWebSiteOpened = false;
    }
})
