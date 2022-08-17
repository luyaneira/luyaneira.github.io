import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";
import {track6Map, setTrackContent, refreshSigns } from "./sign_script.js";
import {openPopupWithWebsiteYesNo, closePopupWithWebsite, openPopUpOkOnly, closePopUp } from "./popUp_script.js";
import * as vars from "./vars.js";

const sign6a = await WA.room.website.get("sign6a");
const sign6b = await WA.room.website.get("sign6b");

const signToTrackMap = new Map ([
    [sign6a, track6Map],
    [sign6b, track6Map]
]);

setTrackContent(signToTrackMap);
refreshSigns(signToTrackMap);

WA.room.onEnterZone(vars.programZone, () => {openPopupWithWebsiteYesNo(vars.programPopUp, vars.programMsg, vars.urlProgram)})
WA.room.onLeaveZone(vars.programZone, () => {closePopupWithWebsite()})

var technicianZone = "technician-informed";
var popUpTechnician = "popUpTechnician";
var technicianMsg = "Techniker ist informiert.";

WA.room.onEnterZone(technicianZone, () => {openPopUpOkOnly(popUpTechnician, technicianMsg, "OK")})
WA.room.onLeaveZone(technicianZone, () => {closePopUp()})