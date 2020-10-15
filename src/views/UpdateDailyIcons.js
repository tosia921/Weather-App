import { elements } from './base.js'

import mostlySunny from '../images/icons/mostlysunny.svg'
import chanceRain from '../images/icons/chancerain.svg'
import chanceSleet from '../images/icons/chancesleet.svg'
import chanceSnow from '../images/icons/chancesnow.svg'
import chancetStorm from '../images/icons/chancetstorms.svg'
import clear from '../images/icons/clear.svg'
import cloudy from '../images/icons/cloudy.svg'
import flurries from '../images/icons/flurries.svg'
import fog from '../images/icons/fog.svg'
import mostlyCloudy from '../images/icons/mostlycloudy.svg'
import partlyCloudy from '../images/icons/partlycloudy.svg'
import partlySunny from '../images/icons/partlysunny.svg'
import rain from '../images/icons/rain.svg'
import sleet from '../images/icons/sleet.svg'
import snow from '../images/icons/snow.svg'
import sunny from '../images/icons/sunny.svg'
import tstorms from '../images/icons/tstorms.svg'
import unknown from '../images/icons/unknown.svg'



export const updateDailyIcons = (iconID, i) => {
    const DailyIconsArr = [];
    DailyIconsArr.push(elements.DailyIcon1, elements.DailyIcon2, elements.DailyIcon3, elements.DailyIcon4, elements.DailyIcon5);

    if (iconID >= 200 && iconID <= 232) {
        DailyIconsArr[i].src = tstorms;
    } else if (iconID >= 300 && iconID <= 321) {
        DailyIconsArr[i].src = sleet;
    } else if (iconID >= 500 && iconID <= 531) {
        DailyIconsArr[i].src = rain;
    } else if (iconID >= 600 && iconID <= 622) {
        DailyIconsArr[i].src = snow;
    } else if (iconID >= 701 && iconID <= 781) {
        DailyIconsArr[i].src = sleet;
    } else if (iconID == 800) {
        DailyIconsArr[i].src = clear;
    } else if (iconID == 801) {
        DailyIconsArr[i].src = partlySunny;
    } else if (iconID == 802) {
        DailyIconsArr[i].src = partlyCloudy;
    } else if (iconID == 803) {
        DailyIconsArr[i].src = mostlyCloudy;
    } else if (iconID == 804) {
        DailyIconsArr[i].src = cloudy;
    } else {
        DailyIconsArr[i].src = unknown;
    }

};