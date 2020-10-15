import { elements } from './base.js'

export const updateSun = (currSunrise, currSunset) => {

    //Getting time(UNIX)
    let timeUnixRise = currSunrise;
    let timeUnixSet = currSunset;
    console.log(timeUnixRise);
    console.log(timeUnixSet);
    // new obcject and multiplied by 1000 so that the argument is in miliseconds, not seconds.
    let timeRise = new Date(timeUnixRise * 1000)
    let timeSet = new Date(timeUnixSet * 1000)
    // Hours part from the timestamp
    let hoursRise = timeRise.getHours();
    let hoursSet = timeSet.getHours();
    // Minutes part from the timestamp
    let minutesRise = "0" + timeRise.getMinutes();
    let minutesSet = "0" + timeSet.getMinutes();

    // Will display time in 10:30 format
    let formattedTimeRise = hoursRise + ':' + minutesRise.substr(-2);
    let formattedTimeSet = hoursSet + ':' + minutesSet.substr(-2);


    elements.Sunrise.innerHTML = `Sunrise: ${formattedTimeRise} AM`;
    elements.Sunset.innerHTML = `Sunset: ${formattedTimeSet} PM`;

};