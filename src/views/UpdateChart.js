export const updateChart = async (data) => {

    const dataArr = [];
    const hoursArr = [];

    for (let i = 0; i < 24; i++) {
        dataArr.push(Math.round(data[i].temp - 273.15));
    }
    for (let i = 0; i < 24; i++) {
        //Getting time(UNIX) from hours array
        let timeUNIX = data[i].dt;
        // new obcject and multiplied by 1000 so that the argument is in miliseconds, not seconds.
        let time = new Date(timeUNIX * 1000)
        // Hours part from the timestamp
        let hours = time.getHours();
        // Minutes part from the timestamp
        let minutes = "0" + time.getMinutes();

        // Will display time in 10:30 format
        let formattedTime = hours + ':' + minutes.substr(-2);
        hoursArr.push(formattedTime);


    }

    var ctx = document.getElementById("myChart").getContext("2d");

    Chart.defaults.global.defaultFontColor = "black";
    Chart.defaults.global.defaultFontFamily = "Fredoka One";
    Chart.defaults.global.defaultFontSize = 20;
    var myChart = new Chart(ctx, {
        type: "line",
        // prettier-ignore
        data: {
            labels: hoursArr,
            datasets: [
                {
                    label: "Temp:",
                    backgroundColor: "rgba(38,188,255, 0.7)",
                    borderColor: "rgb(0, 155, 224)",
                    borderWidth: 2,
                    // prettier-ignore
                    data: dataArr,
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
};
