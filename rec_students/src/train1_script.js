import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";
import {track1Map, setTrackContent, refreshSigns } from "./sign_script.js";
import {openPopupWithWebsiteYesNo, closePopupWithWebsite } from "./popUp_script.js";
import * as vars from "./vars.js";

const sign1a = await WA.room.website.get("sign1a");
const sign1b = await WA.room.website.get("sign1b");

const signToTrackMap = new Map ([
    [sign1a, track1Map],
    [sign1b, track1Map]
]);

setTrackContent(signToTrackMap);
refreshSigns(signToTrackMap);

WA.room.onEnterZone(vars.programZone, () => {openPopupWithWebsiteYesNo(vars.programPopUp, vars.programMsg, vars.urlProgram)})
WA.room.onLeaveZone(vars.programZone, () => {closePopupWithWebsite()})