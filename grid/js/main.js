const labels = [
    "Playstation 4",
    "PC",
    "Nintendo 2DS",
    "Nintendo 3DS",
    "Nintendo Switch"
];

const data = {
    labels: labels,
    datasets: [{
        label: "Most played consoles in hours",
        data: [100, 1000, 100, 200, 200],
        backgroundColors: ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#F473B9'],
    }]
}

const config = {
    type: 'doughnut',
    data: data,
}

const config2 = {
    type: 'bar',
    data: data,
}

new Chart(document.getElementById("js--chart-1"), config);
new Chart(document.getElementById("js--chart-2"), config2);