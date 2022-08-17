import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";
import {track1Map, setTrackContent, refreshSigns } from "./sign_script.js";

const sign1a = await WA.room.website.get("sign1a");
const sign1b = await WA.room.website.get("sign1b");

const signToTrackMap = new Map ([
    [sign1a, track1Map],
    [sign1b, track1Map]
]);

setTrackContent(signToTrackMap);
refreshSigns(signToTrackMap);