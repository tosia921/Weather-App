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

export const updateIcon = (iconID, iconDOM) => {
    if (iconID >= 200 && iconID <= 232) {
        iconDOM.src = tstorms;
    } else if (iconID >= 300 && iconID <= 321) {
        iconDOM.src = sleet;
    } else if (iconID >= 500 && iconID <= 531) {
        iconDOM.src = rain;
    } else if (iconID >= 600 && iconID <= 622) {
        iconDOM.src = snow;
    } else if (iconID >= 701 && iconID <= 781) {
        iconDOM.src = sleet;
    } else if (iconID == 800) {
        iconDOM.src = clear;
    } else if (iconID == 801) {
        iconDOM.src = partlySunny;
    } else if (iconID == 802) {
        iconDOM.src = partlyCloudy;
    } else if (iconID == 803) {
        iconDOM.src = mostlyCloudy;
    } else if (iconID == 804) {
        iconDOM.src = cloudy;
    } else {
        iconDOM.src = unknown;
    }
};