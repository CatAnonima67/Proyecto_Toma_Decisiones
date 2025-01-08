const ctx = document.getElementById('myChart')
const names = ['x','y','d','d']
const age = [24,10,54,16]

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: 'Edad', 
            data: age,
            backgroundColor: [
                'rgba(255,99,132,0.2)',
                'rgba(54,162,235,0.2)',
                'rgba(75,192,192,0.2)',
                'rgba(255,159,64,0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)',
                'rgba(255,159,64,1)'
            ],
            borderWidth: 1.5
        }]
    }
})


