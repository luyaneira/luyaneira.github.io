import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";
import {track7Map, setTrackContent, refreshSigns } from "./sign_script.js";
import {openPopupWithWebsiteYesNo, closePopupWithWebsite, openPopUpOkOnly, closePopUp } from "./popUp_script.js";
import * as vars from "./vars.js";

const sign7a = await WA.room.website.get("sign7a");
const sign7b = await WA.room.website.get("sign7b");

const signToTrackMap = new Map ([
    [sign7a, track7Map],
    [sign7b, track7Map]
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