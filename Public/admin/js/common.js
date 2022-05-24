new WOW().init();

// Charts
// Bar
const ctx = document.querySelector('#barChart').getContext('2d');
const barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Green', 'Yellow', 'Grey', 'Pink'],
        datasets: [{
            label: '# of Votes',
            data: [12, 14, 21, 17, 34, 4],
            backgroundColor: ['Red', 'Blue', 'Lightgreen', 'Yellow', 'Grey', 'Pink'],
            hoverBackgroundColor: [
                'rgba(255, 0, 0, 0.5)',
                'rgba(0, 0, 255, 0.5)',
                'rgba(144, 238, 144, 0.5)',
                'rgba(255, 255, 0, 0.5)',
                'rgba(128, 128, 128, 0.5)',
                'rgba(255, 192, 203, 0.5)'
            ],
            borderColor: ['Maroon', 'Navy', 'Darkgreen', 'Orange', 'Black', 'Coral'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// Pie
const ctx2 = document.querySelector('#pieChart').getContext('2d');
const pieChart = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Green', 'Yellow', 'Grey', 'Pink'],
        datasets: [{
            data: [12, 14, 21, 17, 34, 4],
            backgroundColor: ['Red', 'Blue', 'Lightgreen', 'Yellow', 'Grey', 'Pink'],
            hoverBackgroundColor: [
                'rgba(255, 0, 0, 0.5)',
                'rgba(0, 0, 255, 0.5)',
                'rgba(144, 238, 144, 0.5)',
                'rgba(255, 255, 0, 0.5)',
                'rgba(128, 128, 128, 0.5)',
                'rgba(255, 192, 203, 0.5)'
            ]
        }]
    },
    options: {
        responsive: true,
        legend: false
    }
});

// Line
var ctxL = document.getElementById("lineChart").getContext('2d');
var myLineChart = new Chart(ctxL, {
    type: 'line',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
                label: "Last",
                backgroundColor: [
                    'rgba(105, 0, 132, .2)',
                ],
                borderColor: [
                    'rgba(200, 99, 132, .7)',
                ],
                borderWidth: 2,
                data: [17, 67, 10, 45, 83, 51, 40]
            },
            {
                label: "Current",
                backgroundColor: [
                    'rgba(0, 137, 132, .2)',
                ],
                borderColor: [
                    'rgba(0, 10, 130, .7)',
                ],
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    },
    options: {
        responsive: true
    }
});