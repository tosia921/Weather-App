
import { elements } from './base.js'

export const updateWeatherDaily = (dailyDes, dailyDate, dailyTemp, i) => {
    const DailyConditionsArr = [];
    const DailyDateArr = [];
    const DailyTempArr = [];
    DailyConditionsArr.push(elements.DailyWeatherCon1, elements.DailyWeatherCon2, elements.DailyWeatherCon3, elements.DailyWeatherCon4, elements.DailyWeatherCon5);
    DailyDateArr.push(elements.DailyDate1, elements.DailyDate2, elements.DailyDate3, elements.DailyDate4, elements.DailyDate5);
    DailyTempArr.push(elements.DailyTemp1, elements.DailyTemp2, elements.DailyTemp3, elements.DailyTemp4, elements.DailyTemp5,);

    let date = new Date(dailyDate * 1000);
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let year = date.getFullYear();
    let month = months[date.getMonth()];
    let day = days[date.getDay()]
    let dateNum = date.getDate();

    let formattedDate = `${day} ${month} ${dateNum} ${year}`;



    DailyConditionsArr[i].innerHTML = dailyDes;
    DailyDateArr[i].innerHTML = formattedDate;
    DailyTempArr[i].innerHTML = Math.round(dailyTemp - 273.15) + "°C";
};