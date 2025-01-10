let SingleLineChart = null;

function smoothData(data, factor = 0.2) {
    if (data.length < 2) return data;
    
    const smoothed = [];
    smoothed.push(data[0]); // Keep first point
    
    for (let i = 1; i < data.length - 1; i++) {
        const prev = smoothed[i - 1];
        const current = data[i];
        const next = data[i + 1];
        
        // Calculate EMA-like smoothing
        const smoothedValue = prev * (1 - factor) + 
                           current * factor + 
                           (next - current) * factor * 0.5;
        
        smoothed.push(smoothedValue);
    }
    
    smoothed.push(data[data.length - 1]); // Keep last point
    return smoothed;
}

        function updateChart() {
            const ctx = document.getElementById('lineGraph').getContext('2d');
            const xValues = $('#xValues').val().split(',').map(x => x.trim());
            var yValues = $('#yValues').val().split(',').map(y => parseFloat(y.trim()));

            if ($('#yAxisScale').val() === 'smooth') {
                yValues = smoothData(yValues);
            }

            if (SingleLineChart) {
                SingleLineChart.destroy();
            }

            SingleLineChart = new Chart(ctx, {
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
                            type: $('#yAxisScale').val() === 'smooth' ? 'linear' : $('#yAxisScale').val(),
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
                    beforeDraw: (SingleLineChart) => {
                        const ctx = SingleLineChart.canvas.getContext('2d');
                        ctx.save();
                        ctx.globalCompositeOperation = 'destination-over';
                        ctx.fillStyle = 'white';
                        ctx.fillRect(0, 0, SingleLineChart.canvas.width, SingleLineChart.canvas.height);
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