import "./styles/main.scss";
import Chart from "chart.js";

import Getdata from './models/Getdata'
import { elements } from './views/base'
import { updateIcon } from './views/UpdateIcon'

const state = {};

const ControlGeoSearch = () => {
	//1) Get lat and long using geolocation
	let long;
	let lat;
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(async (position) => {
			long = position.coords.longitude;
			lat = position.coords.latitude;
			//2)new GetData object and added to state
			state.getData = new Getdata(lat, long);
			//3)Get Data from weather API
			await state.getData.GetDataGeo();

			updateIcon(state.getData.iconID, elements.CurrentIcon);
		});

	};
};

elements.GeoBtn.addEventListener("click", () => {
	ControlGeoSearch();


});


/////////////////// CHART CANVAS ////////////////////////

var ctx = document.getElementById("myChart").getContext("2d");

Chart.defaults.global.defaultFontColor = "black";
Chart.defaults.global.defaultFontFamily = "Fredoka One";
Chart.defaults.global.defaultFontSize = 20;
var myChart = new Chart(ctx, {
	type: "line",
	// prettier-ignore
	data: {
		labels: ["1h", 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
		datasets: [
			{
				label: "Temp:",
				backgroundColor: "rgba(38,188,255, 0.7)",
				borderColor: "rgb(0, 155, 224)",
				borderWidth: 2,
				// prettier-ignore
				data: [22, 20, 18, 16, 14, 12, 10, 8, 10, 12, 10, 8, 6, 4, 2, 1, 2, 3, 3, 3, 5, 7, 8, 9],
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

