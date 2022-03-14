var currentPopup = undefined;
var isCoWebSiteOpened =  false;
var urlTutorial = "https://db-planet.deutschebahn.com/pages/telefonie/apps/content/workadventure-erste-schritte";

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

var zoneTutorial = "tutorial";

WA.room.onEnterZone(zoneTutorial, () => {
   currentPopup =  WA.ui.openPopup("popUpTutorial","Möchtest du dir das Tutorial ansehen?.",[
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
