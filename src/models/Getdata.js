import axios from 'axios';

export default class DataGeo {
    constructor(long, lat) {
        this.long = long;
        this.lat = lat;
    }


    async GetDataGeo() {
        const apiKey = "c9e3c239980a443441df591c707917dc";
        try {
            const getData = await axios(`http://api.openweathermap.org/data/2.5/onecall?lat=${this.lat}&lon=${this.long}&exclude=minutely,alerts&appid=${apiKey}`);
            console.log(getData);
            this.temp = Math.round(getData.data.current.temp - 273.15) + "°C";
            this.description = getData.data.current.weather[0].description;
            this.iconID = getData.data.current.weather[0].id;
            this.date = new Date().toDateString();
            this.hours = getData.data.hourly;
            this.pressure = getData.data.current.pressure;
            this.humidity = getData.data.current.humidity;
            this.windSpeed = getData.data.current.wind_speed;
            this.sunrise = getData.data.current.sunrise;
            this.sunset = getData.data.current.sunset;
            this.daily = getData.data.daily;
        } catch (error) {
            alert(error);
        }

    }
}