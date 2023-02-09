import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";

console.log('Script started successfully');

WA.onInit().then(async () => {
    console.log('Position: ', await WA.player.getPosition());
    
    playSound();

}).catch(e => console.error(e));

function playSound() {
    var elevatorSoundInit =  WA.sound.loadSound("../maps/resources/elevatorSound.mp3");
    elevatorSoundInit.play();
}