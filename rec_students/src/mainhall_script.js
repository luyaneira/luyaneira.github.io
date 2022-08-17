import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";
import {track1Map, track2Map, track3Map, track4Map, track5Map, track6Map, track7Map, setTrackContent, refreshSigns } from "./sign_script.js";
import {openPopupWithWebsiteYesNo, closePopupWithWebsite } from "./popUp_script.js";
import {programMsg, urlProgram } from "./vars.js";

/***********************************************
 * Sign functions
 ***********************************************/
WA.onInit().then(() => {
    var signWebsite = WA.room.website;
    const sign1 = await signWebsite.get("sign1");
    const sign2 = await signWebsite.get("sign2");
    const sign3 = await signWebsite.get("sign3");
    const sign4 = await signWebsite.get("sign4");
    const sign5 = await signWebsite.get("sign5");
    const sign6 = await signWebsite.get("sign6");
    const sign7 = await signWebsite.get("sign7");

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

/***********************************************
 * Program pop up functions
 ***********************************************/
//var programMsg = "Möchtest Du Dir das Programm der DB TechCon 2022 ansehen?";
//var urlProgram = "https://db-planet.deutschebahn.com/pages/dbtechcon/apps/content/programm";

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
    WA.room.onEnterLayer(progZone, () => {openPopupWithWebsiteYesNo(zone2PopUpMap.get(progZone), programMsg, urlProgram)})
    WA.room.onEnterLayer(progZone, () => {closePopupWithWebsite()})
}

var bookstoreZone = "bookstore";
var popUpBookstore = "popUpBookstore";
var urlShareCommunity = "https://dbsw.sharepoint.com/sites/DB.Cloud.Bar.Camp/Lists/Share%20your%20DB%20Community/AllItems.aspx?ct=1651851483247&or=Teams%2DHL";
var bookstoreMsg = "Willkommen bei Schmied & Huhn!\nMöchtest du Informationen zu einer Community erhalten oder teilen?";

WA.room.onEnterLayer(bookstoreZone, () => {openPopupWithWebsiteYesNo(popUpBookstore, bookstoreMsg, urlShareCommunity)})
WA.room.onEnterLayer(bookstoreZone, () => {closePopupWithWebsite()})