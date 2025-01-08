let chart = null;

        function updateChart() {
            const ctx = document.getElementById('lineGraph').getContext('2d');
            const xValues = $('#xValues').val().split(',').map(x => x.trim());
            const yValues = $('#yValues').val().split(',').map(y => parseFloat(y.trim()));
            
            if (chart) {
                chart.destroy();
            }

            chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: xValues,
                    datasets: [{
                        label: $('#seriesName').val(),
                        data: yValues,
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
                            position: $('#legendPosition').val()
                        },
                        title: {
                            display: true,
                            text: $('#graphTitle').val()
                        }
                    }
                },
                plugins: [{
                    id: 'custom_canvas_background_color',
                    beforeDraw: (chart) => {
                        const ctx = chart.canvas.getContext('2d');
                        ctx.save();
                        ctx.globalCompositeOperation = 'destination-over';
                        ctx.fillStyle = 'white';
                        ctx.fillRect(0, 0, chart.canvas.width, chart.canvas.height);
                        ctx.restore();
                    }
                }]
            });
        }

        function downloadJPG() {
            const canvas = document.getElementById("lineGraph");
            const imgData = canvas.toDataURL('image/jpeg');
            const a = document.createElement('a');
            a.href = imgData;
            a.download = 'lineGraph.jpg';
            a.click();
        }

        function downloadPNG() {
            const canvas = document.getElementById("lineGraph");
            const imgData = canvas.toDataURL('image/png');
            const a = document.createElement('a');
            a.href = imgData;
            a.download = 'lineGraph.png';
            a.click();
        }

        $('input, select').on('change', updateChart);
        $('#downloadJPG').on('click', downloadJPG);
        $('#downloadPNG').on('click', downloadPNG);

        $(document).ready(updateChart);