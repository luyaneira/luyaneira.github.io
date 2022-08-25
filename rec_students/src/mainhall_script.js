import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";
//import {track1Map, track2Map, track3Map, track4Map, track5Map, track6Map, track7Map, setTrackContent, refreshSigns } from "./sign_script.js";
import {openPopupWithWebsiteYesNo, closePopUp, openPopUpOkOnly} from "./popUp_script.js";
import {programMsg, urlProgram, bookstoreMsg } from "./vars.js";

/***********************************************
 * Sign functions
 ***********************************************/

/*WA.onInit().then(() => {
    var signWebsite = WA.room.website;    
//    const sign1 = await signWebsite.get("sign1");
    const sign1 = signWebsite.get("sign1");
    const sign2 = signWebsite.get("sign2");
    const sign3 = signWebsite.get("sign3");
    const sign4 = signWebsite.get("sign4");
    const sign5 = signWebsite.get("sign5");
    const sign6 = signWebsite.get("sign6");
    const sign7 = signWebsite.get("sign7");

    const signToTrackMap = new Map ([
        [sign1, track1Map],
        [sign2, track2Map],
        [sign3, track3Map],
        [sign4, track4Map],
        [sign5, track5Map],
        [sign6, track6Map], 
        [sign7, track7Map]
    ]);
    
    setTrackContent(signToTrackMap);
    refreshSigns(signToTrackMap);
});
*/

/***********************************************
 * Program pop up functions
 ***********************************************/

const zone2PopUpMap = new Map ([
    ["program1", "popUpProgram1"],
    ["program2", "popUpProgram2"],
    ["program3", "popUpProgram3"],
    ["program4", "popUpProgram4"],
    ["program5", "popUpProgram5"],
    ["program6", "popUpProgram6"],
    ["program7", "popUpProgram7"]
]);


for (const progZone of zone2PopUpMap.keys()) {
    WA.room.onEnterLayer(progZone).subscribe(() => {openPopupWithWebsiteYesNo(zone2PopUpMap.get(progZone), programMsg, urlProgram)})
    WA.room.onLeaveLayer(progZone).subscribe(() => {closePopUp()})
}

var bookstore_npcLayer = "bookstore_npc"
var bookstore_npcPopUp = "PopUpBookstore"

WA.room.onEnterLayer(bookstore_npcLayer).subscribe(() => {openPopUpOkOnly(bookstore_npcPopUp, bookstoreMsg, "OK")})
WA.room.onLeaveLayer(bookstore_npcLayer).subscribe(() => {closePopUp()})