const chartConfig = {
            create(data) {
                return {
                    type: 'bar',
                    data: {
                        labels: data.labels,
                        datasets: [
                            {
                                label: data.bar1Name,
                                data: data.values1,
                                backgroundColor: data.color1,
                                borderColor: data.color1,
                                borderWidth: 1
                            },
                            {
                                label: data.bar2Name,
                                data: data.values2,
                                backgroundColor: data.color2,
                                borderColor: data.color2,
                                borderWidth: 1
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            legend: {
                                position: data.legendPosition,
                            },
                            title: {
                                display: true,
                                text: data.chartTitle
                            }
                        },
                        scales: {
                            x: {
                                title: {
                                    display: true,
                                    text: data.xAxisTitle
                                }
                            },
                            y: {
                                title: {
                                    display: true,
                                    text: data.yAxisTitle
                                },
                                beginAtZero: true
                            }
                        }
                    },
                    plugins: [{
                        id: 'custom_canvas_background_color',
                        beforeDraw: (doubleBarChart) => {
                            const ctx = doubleBarChart.canvas.getContext('2d');
                            ctx.save();
                            ctx.globalCompositeOperation = 'destination-over';
                            ctx.fillStyle = 'white';
                            ctx.fillRect(0, 0, doubleBarChart.canvas.width, doubleBarChart.canvas.height);
                            ctx.restore();
                        }
                    }]
                };
            }
        };

        // Download module
        const download = {
            doubleBarChart(doubleBarChart, format) {
                const canvas = document.getElementById('barChart');
                const link = document.createElement('a');
                
                if (format === 'svg') {
                    const svgString = doubleBarChart.toBase64Image('image/svg+xml');
                    link.href = svgString;
                    link.download = `doubleBarChart.svg`;
                } else {
                    link.href = canvas.toDataURL(`image/${format}`);
                    link.download = `doubleBarChart.${format}`;
                }
                
                link.click();
            }
        };

        // Form data module
        const formData = {
            get() {
                return {
                    labels: $('#labels').val().split(/[\s,]+/).map(label => label.trim()),
                    values1: $('#values1').val().split(/[\s,]+/).map(Number),
                    values2: $('#values2').val().split(/[\s,]+/).map(Number),
                    color1: $('#color1').val(),
                    color2: $('#color2').val(),
                    legendPosition: $('#legendPosition').val(),
                    chartTitle: $('#chartTitle').val(),
                    xAxisTitle: $('#xAxisTitle').val(),
                    yAxisTitle: $('#yAxisTitle').val(),
                    bar1Name: $('#bar1Name').val(),
                    bar2Name: $('#bar2Name').val()
                };
            }
        };

        // Main application logic
        let doubleBarChart = null;

        function createChart() {
            const ctx = document.getElementById('barChart').getContext('2d');
            const data = formData.get();

            if (doubleBarChart) {
                doubleBarChart.destroy();
            }

            doubleBarChart = new Chart(ctx, chartConfig.create(data));
        }

        // Initialize application
        $(document).ready(() => {
            $('#generateGraph').click(createChart);
            $('#downloadPNG').click(() => download.doubleBarChart(doubleBarChart, 'png'));
            $('#downloadJPEG').click(() => download.doubleBarChart(doubleBarChart, 'jpeg'));
            createChart();
        });