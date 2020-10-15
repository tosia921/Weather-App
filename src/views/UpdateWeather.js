import { elements } from './base.js'

export const updateWeatherCurrent = (currDes, currDate, currTemp,) => {
    elements.CurrentWeatherCondition.innerHTML = currDes;
    elements.CurrentDate.innerHTML = currDate;
    elements.CurrentTemp.innerHTML = currTemp;
};

