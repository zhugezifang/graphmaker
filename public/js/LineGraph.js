let chart = null;

        function updateChart() {
            const labels = $('#dataLabels').val().split(',').map(label => label.trim());
            const values = $('#dataValues').val().split(',').map(value => parseFloat(value.trim()));
            
            const ctx = document.getElementById('lineGraph').getContext('2d');

            if (chart) {
                chart.destroy();
            }

            chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: $('#graphTitle').val(),
                        data: values,
                        borderColor: $('#lineColor').val(),
                        backgroundColor: $('#lineColor').val(),
                        tension: parseFloat($('#lineTension').val()),
                        pointRadius: $('#showPoints').is(':checked') ? 5 : 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    scales: {
                        y: {
                            type: $('#yAxisScale').val(),
                            beginAtZero: $('#startFromZero').is(':checked'),
                            grid: {
                                display: $('#showYGrid').is(':checked')
                            },
                            title: {
                                display: true,
                                text: $('#yAxisLabel').val()
                            }
                        },
                        x: {
                            grid: {
                                display: $('#showXGrid').is(':checked')
                            },
                            title: {
                                display: true,
                                text: $('#xAxisLabel').val()
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            position: $('#legendPosition').val(),
                            align: $('#legendAlign').val()
                        }
                    }
                },
                plugins: [
                    'svgSaver',
                    {
                        id: 'custom_canvas_background_color',
                        beforeDraw: (chart) => {
                            const ctx = chart.canvas.getContext('2d');
                            ctx.save();
                            ctx.globalCompositeOperation = 'destination-over';
                            ctx.fillStyle = 'white';
                            ctx.fillRect(0, 0, chart.canvas.width, chart.canvas.height);
                            ctx.restore();
                        }
                    }
                ]
            });
        }

        // Download functions
        function downloadJPG() {
            var canvas = document.getElementById("lineGraph");
            var imgData = canvas.toDataURL('image/jpeg');
            var a = document.createElement('a');
            a.href = imgData;
            a.download = 'lineGraph.jpg';
            a.click();
        }

        function downloadPNG() {
            var canvas = document.getElementById("lineGraph");
            var imgData = canvas.toDataURL('image/png');
            var a = document.createElement('a');
            a.href = imgData;
            a.download = 'lineGraph.png';
            a.click();
        }

        // Attach click events to download buttons
        document.getElementById('downloadJPG').addEventListener('click', downloadJPG);
        document.getElementById('downloadPNG').addEventListener('click', downloadPNG);

        // Update chart when any input changes
        $('input, select').on('change', updateChart);
        
        // Initial chart render
        $(document).ready(updateChart);