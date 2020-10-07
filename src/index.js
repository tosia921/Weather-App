import "./styles/main.scss";
import Chart from "chart.js";

// const apiKey = 'c9e3c239980a443441df591c707917dc';

// const geoBtn = document.querySelector('.inputField__geo');

// geoBtn.addEventListener('click', ()=> {
//     let long;
//     let lat;

//     if (navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(position => {
//             long = position.coords.longitude;
//             lat = position.coords.latitude;

//             const api = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,alerts&appid=${apiKey}`;
//             // console.log(api);

//             fetch(api)
//             .then(response => {
//                 return response.json();
//             })
//             .then(data => {
//                 console.log(data);
//             });
//         });
//     }
// });

const apiKey = "c9e3c239980a443441df591c707917dc";

const geoBtn = document.querySelector(".inputField__geo");

geoBtn.addEventListener("click", () => {
	let long;
	let lat;

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition((position) => {
			long = position.coords.longitude;
			lat = position.coords.latitude;

			const api = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,alerts&appid=${apiKey}`;
			// console.log(api);

			async function getWeather() {
				const result = await fetch(api);
				const data = await result.json();
				console.log(data);
			}
			getWeather();
		});
	}
});

/////////////////// CHART CANVAS ////////////////////////

var ctx = document.getElementById("myChart").getContext("2d");

Chart.defaults.global.defaultFontColor = "black";
Chart.defaults.global.defaultFontFamily = "Carter One";
Chart.defaults.global.defaultFontSize = 15;
var myChart = new Chart(ctx, {
	type: "line",
	// prettier-ignore
	data: {
		labels: ["1h", 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
		datasets: [
			{
				label: "Temp:",
				backgroundColor: "rgba(234,99,148,0.2)",
				borderColor: "rgba(234,99,148,1)",
				borderWidth: 2,
				// prettier-ignore
				data: [22, 15, 5, 8, 18, 15, 5, 8, 15, 5, 8, 15, 5, 8, 15, 5, 8, 15, 5, 8, 15, 5, 8, 9],
			},
		],
	},
	options: {
		maintainAspectRatio: false,
		legend: {
			display: false,
		},
		tooltips: {
			enabled: true,
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
						color: "rgba(234,99,148,0.5)",
					},
					scaleLabel: true,
					ticks: {
						display: true,
					},
				},
			],
			yAxes: [
				{
					gridLines: {
						display: true,
						color: "rgba(234,99,148,0.5)",
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

