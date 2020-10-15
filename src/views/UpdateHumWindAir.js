import { elements } from './base.js'

export const updateHumWindAir = (currHum, currAir, currWind) => {
    elements.CurrentHumidity.innerHTML = `Humidity: ${currHum}%`;
    elements.CurrentAirPressure.innerHTML = `Air Pressure: ${currAir} Hpa`;
    elements.CurrentWind.innerHTML = `Wind Speed: ${currWind} mph`;
};
