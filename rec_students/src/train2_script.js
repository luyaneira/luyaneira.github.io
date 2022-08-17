import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";
import {track2Map, setTrackContent, refreshSigns } from "./sign_script.js";
import {openPopupWithWebsiteYesNo, closePopupWithWebsite } from "./popUp_script.js";
import * as vars from "./vars.js";

const sign2a = await WA.room.website.get("sign2a");
const sign2b = await WA.room.website.get("sign2b");

const signToTrackMap = new Map ([
    [sign2a, track2Map],
    [sign2b, track2Map]
]);

setTrackContent(signToTrackMap);
refreshSigns(signToTrackMap);

WA.room.onEnterZone(vars.programZone, () => {openPopupWithWebsiteYesNo(vars.programPopUp, vars.programMsg, vars.urlProgram)})
WA.room.onLeaveZone(vars.programZone, () => {closePopupWithWebsite()})