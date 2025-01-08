        let chart = null;
        let seriesCount = 0;
        const defaultColors = [
            '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
            '#FF9F40', '#FF6384', '#C9CBCF', '#4BC0C0', '#FF9F40'
        ];

        function createDataSeries(color) {
            seriesCount++;
            const seriesId = `series-${seriesCount}`;
            
            const seriesHTML = `
                <div id="${seriesId}" class="p-4 border rounded-lg bg-gray-50">
                    <div class="flex items-center justify-between mb-2">
                        <input type="text" class="series-name px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                               value="Series ${seriesCount}" placeholder="Series Name"/>
                        <input type="color" class="series-color h-10 w-20" value="${color}"/>
                        <button class="delete-series px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">Delete</button>
                    </div>
                    <div class="grid grid-cols-1 gap-2">
                        <div>
                            <label class="text-gray-700 text-sm">X Values (comma separated)</label>
                            <input type="text" class="x-values w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                   value="1, 2, 3, 4, 5"/>
                        </div>
                        <div>
                            <label class="text-gray-700 text-sm">Y Values (comma separated)</label>
                            <input type="text" class="y-values w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                   value="${Math.random() * 100}, ${Math.random() * 100}, ${Math.random() * 100}, ${Math.random() * 100}, ${Math.random() * 100}"/>
                        </div>
                    </div>
                </div>
            `;
            
            $('#dataSeriesContainer').append(seriesHTML);
            
            // Add delete handler
            $(`#${seriesId} .delete-series`).on('click', function() {
                $(`#${seriesId}`).remove();
                updateChart();
            });
            
            // Add change handlers
            $(`#${seriesId} input`).on('change', updateChart);
        }

        function getDatasets() {
            const datasets = [];
            $('#dataSeriesContainer > div').each(function() {
                const $series = $(this);
                const name = $series.find('.series-name').val();
                const color = $series.find('.series-color').val();
                const xValues = $series.find('.x-values').val().split(',').map(x => x.trim());
                const yValues = $series.find('.y-values').val().split(',').map(y => parseFloat(y.trim()));
                
                datasets.push({
                    label: name,
                    data: yValues,
                    borderColor: color,
                    backgroundColor: color,
                    tension: parseFloat($('#lineTension').val()),
                    pointRadius: $('#showPoints').is(':checked') ? 5 : 0
                });
            });
            return datasets;
        }

        function getAllXValues() {
            const allXValues = new Set();
            $('#dataSeriesContainer > div').each(function() {
                const xValues = $(this).find('.x-values').val().split(',').map(x => x.trim());
                xValues.forEach(x => allXValues.add(x));
            });
            return Array.from(allXValues).sort();
        }

        function updateChart() {
            const ctx = document.getElementById('lineGraph').getContext('2d');
            
            if (chart) {
                chart.destroy();
            }

            chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: getAllXValues(),
                    datasets: getDatasets()
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

        // Download functions
        function downloadJPG() {
            const canvas = document.getElementById("lineGraph");
            const imgData = canvas.toDataURL('image/jpeg');
            const a = document.createElement('a');
            a.href = imgData;
            a.download = 'multiLineGraph.jpg';
            a.click();
        }

        function downloadPNG() {
            const canvas = document.getElementById("lineGraph");
            const imgData = canvas.toDataURL('image/png');
            const a = document.createElement('a');
            a.href = imgData;
            a.download = 'multiLineGraph.png';
            a.click();
        }

        // Event Handlers
        $('#addSeries').on('click', function() {
            createDataSeries(defaultColors[seriesCount % defaultColors.length]);
            updateChart();
        });

        $('input, select').on('change', updateChart);
        
        // Download buttons
        $('#downloadJPG').on('click', downloadJPG);
        $('#downloadPNG').on('click', downloadPNG);

        // Initialize with one series
        $(document).ready(function() {
            createDataSeries(defaultColors[0]);
            updateChart();
        });