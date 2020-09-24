import './styles/main.scss';
import Chart from 'chart.js';

var ctx = document.getElementById('myChart').getContext('2d');


Chart.defaults.global.defaultFontColor = 'black';
Chart.defaults.global.defaultFontFamily = 'Carter One';
Chart.defaults.global.defaultFontSize = 15;
var myChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: [22, 15, 5, 8, 18],
        datasets: [
            {
                label: "Temp:",
                backgroundColor: "rgba(234,99,148,0.2)",
                borderColor: "rgba(234,99,148,1)",
                borderWidth: 2,
                data: [22, -15, 5, 8, 18],
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
                radius: 0
            },
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: true,
                    color: "rgba(234,99,148,0.5)"
                  },
                scaleLabel: true,
                ticks: {
                    display: false
                    }
                
            }],
            yAxes: [{
                gridLines: {
                    display: true,
                    color: "rgba(234,99,148,0.5)"
                  },
                scaleLabel: true,
                ticks: {
                    display: true,
                    suggestedMin: 0,
                    suggestedMax: 10
                }
            }]
        }
    },
});