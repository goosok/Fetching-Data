
var xlabels = [];
var xtemp = [];
var xlabels2 = [];
var xtemp2 = [];
chartIt();

async function getData() {
    xtemp.length = 0;
    xlabels.length=0;
    const response = await fetch('ZonAnn.Ts.csv');
    const data = await response.text();

    const table = data.split('\n').slice(1);

    table.forEach(row => {
        let random = Math.random() * (20 - 1) + 1;
        const columns = row.split(',');
        const year = columns[0];
        const temp = columns[3];
        xlabels.push(year);
        xlabels2.push(year)
        xtemp.push(parseFloat(temp)+random);
        xtemp2.push(parseFloat(temp) + random);
        console.table(year, temp)
    })
    //console.log(rows);

}

async function chartIt(saludar){
    await getData();
    let ctx = document.getElementById('chart').getContext('2d');  
    
    ctx.clearRect(0, 0, ctx.width, ctx.height);

    const chart = new Chart(ctx, {

        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            labels: xlabels,
            datasets: [{
                label: 'Datos de temperatura',
                backgroundColor: ['rgba(255, 99, 132, 0.3)', 'rgba(55, 99, 12, 0.3)', 'rgba(125, 199, 132, 0.3)', 'rgba(255, 12, 13, 0.3)', 'rgba(255, 99, 132, 0.3)', 'rgba(55, 99, 12, 0.3)', 'rgba(125, 199, 132, 0.3)', 'rgba(255, 12, 13, 0.3)', 'rgba(255, 99, 132, 0.3)', 'rgba(55, 99, 12, 0.3)', 'rgba(125, 199, 132, 0.3)', 'rgba(255, 12, 13, 0.3)', 'rgba(255, 99, 132, 0.3)', 'rgba(55, 99, 12, 0.3)', 'rgba(125, 199, 132, 0.3)', 'rgba(255, 12, 13, 0.3)'],
                //borderColor: ['rgba(255, 99, 132, 0,3)', 'rgba(55, 99, 12, 0,3)', 'rgba(125, 199, 132, 0,3)', 'rgba(255, 12, 13, 0,3)'],
                data: xtemp
            }]
        },

        // Configuration options go here
        options: {
            scales: {
                xAxes: [{
                    barPercentage: 0.5,
                    barThickness: 60,
                    maxBarThickness: 50,
                    minBarLength: 2,
                    gridLines: {
                        offsetGridLines: true
                    }
                }]
            }}
    });

    window.setInterval(function () {
        /// call your function here

        // Simulate a code delay
        setTimeout(function () {
            let random = Math.random() * (20 - 1) + 1;
            xlabels = xlabels2;
            chart.data.labels.push('2019');
            chart.data.labels.slice(1);
            chart.data.datasets.forEach((dataset) => {
                dataset.data.push(random);
                dataset.data.slice(1);
            });
            chart.update();
        }, 5000);


    }, 500);




}

function saludar(){
    alert("Hola Gooos!");
}
