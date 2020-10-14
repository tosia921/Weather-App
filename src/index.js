import "./styles/main.scss";
import Chart from "chart.js";

import Getdata from './models/Getdata'
import { elements } from './views/base'
import { updateIcon } from './views/UpdateIcon'
import { updateWeatherCurrent } from './views/UpdateWeather'
import { updateChart } from './views/UpdateChart'

const state = {};


const ControlGeoSearch = () => {
	//1) Get lat and long using geolocation
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(async (position) => {
			let long = position.coords.longitude;
			let lat = position.coords.latitude;
			//2)new GetData object and added to state
			state.getData = new Getdata(lat, long);
			//3)Get Data from weather API
			await state.getData.GetDataGeo();
			//4)Update Current Weather Icon
			updateIcon(state.getData.iconID, elements.CurrentIcon);
			//5)Update Current Weather Data
			updateWeatherCurrent(state.getData.description, state.getData.date, state.getData.temp);
			//6) Updating Chart with weekly data
			updateChart(state.getData.hours);
		});

	};
};

elements.GeoBtn.addEventListener("click", () => {
	ControlGeoSearch();
});


/////////////////// EMPTY CHART TO BE DISPLAYED BEFORE FETCHING THE DATA ////////////////////////

var ctx = document.getElementById("myChart").getContext("2d");

Chart.defaults.global.defaultFontColor = "black";
Chart.defaults.global.defaultFontFamily = "Fredoka One";
Chart.defaults.global.defaultFontSize = 20;
var myChart = new Chart(ctx, {
	type: "line",
	// prettier-ignore
	data: {
		labels: ["1h", "2h", "3h", "4h", "5h", "6h", "7h", "8h", "9h", "10h", "11h", "12h", "13h", "14h", "15h", "16h", "17h", "18h", "19h", "20h", "21h", "22h", "23h", "24h"],
		datasets: [
			{
				label: "Temp:",
				backgroundColor: "rgba(38,188,255, 0.7)",
				borderColor: "rgb(0, 155, 224)",
				borderWidth: 2,
				// prettier-ignore
				data: [],
			}
		],
	},
	options: {
		maintainAspectRatio: false,
		legend: {
			display: false,
		},
		tooltips: {
			enabled: false,
		},
		elements: {
			point: {
				radius: 0,
			},
		},
		scales: {
			xAxes: [
				{
					gridLines: {
						display: true,
						color: "rgb(93,205,255)",
					},
					scaleLabel: false,
					ticks: {
						display: true,
					},
				},
			],
			yAxes: [
				{
					gridLines: {
						display: true,
						color: "rgb(93,205,255)",
					},
					scaleLabel: true,
					ticks: {
						display: true,
						suggestedMin: 0,
						suggestedMax: 10,
					},
				},
			],
		},
	},
});

