var currentPopup = undefined;
var isCoWebSiteOpened =  false;
var urlFeedback = "https://forms.office.com/Pages/ResponsePage.aspx?id=nC2noeZJbU-a9lqvoRg7_f26WHDvlOFNi_8Y43fECOdUMDVDTUpUUDRONkxHMzdLQ09WRlQxUUZSMS4u";

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

var zoneFeedback = "feedback";

WA.room.onEnterZone(zoneFeedback, () => {
   currentPopup =  WA.ui.openPopup("popUpFeedback","Hier kannst du Feedback abgeben.",[
        {
            label: "Feedback",
            callback: (popup => {
                WA.nav.openCoWebSite(urlFeedback);
                isCoWebSiteOpened = true;
                closePopUp();
            })
        }]);
})

WA.room.onLeaveZone(zoneFeedback, () =>{
    closePopUp();

    if (isCoWebSiteOpened) {
        WA.nav.closeCoWebSite();
        isCoWebSiteOpened = false;
    }
})
