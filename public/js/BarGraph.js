let barChart = null;

        function createChart() {
            const labels = $('#labels').val().split(/[\s,]+/).filter(Boolean);
            const values = $('#values').val().split(/[\s,]+/).map(Number).filter(Boolean);
            
            const ctx = document.getElementById('barChart').getContext('2d');
            
            if (barChart) {
                barChart.destroy();
            }

            barChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Value',
                        data: values,
                        backgroundColor: $('#barColor').val(),
                        borderColor: $('#barColor').val(),
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        title: {
                            display: true,
                            text: $('#barChartTitle').val() || 'Bar Graph'
                        },
                        legend: {
                            position: $('#legendPosition').val()
                        }
                    },
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: $('#xAxisTitle').val() || 'X-Axis'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: $('#yAxisTitle').val() || 'Y-Axis'
                            },
                            beginAtZero: true
                        }
                    }
                },
                plugins: [{
                    id: 'custom_canvas_background_color',
                    beforeDraw: (barChart) => {
                        const ctx = barChart.canvas.getContext('2d');
                        ctx.save();
                        ctx.globalCompositeOperation = 'destination-over';
                        ctx.fillStyle = 'white';
                        ctx.fillRect(0, 0, barChart.canvas.width, barChart.canvas.height);
                        ctx.restore();
                    }
                }]
            });
        }

        function downloadChart(format) {
            const canvas = document.getElementById('barChart');
            const link = document.createElement('a');
            
            if (format === 'svg') {
                const svgString = barChart.toBase64Image('image/svg+xml');
                link.href = svgString;
                link.download = `barChart.svg`;
            } else {
                link.href = canvas.toDataURL(`image/${format}`);
                link.download = `barChart.${format.toLowerCase()}`;
            }
            
            link.click();
        }

        $(document).ready(function() {
            $('#generateGraph').click(createChart);
            
            $('#downloadPNG').click(() => downloadChart('png'));
            $('#downloadJPEG').click(() => downloadChart('jpeg'));

            // Initial barChart creation
            createChart();
        });