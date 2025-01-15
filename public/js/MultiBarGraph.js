// Color palette for bars
const colorPalette = [
    '#4361ee', '#ef233c', '#2a9d8f', '#e76f51', '#9b5de5',
    '#f15bb5', '#00bbf9', '#00f5d4', '#fee440', '#f15bb5',
    '#3a86ff', '#ff006e', '#8338ec', '#fb5607', '#3a0ca3'
];

// Bar counter for unique IDs
let barCounter = 0;

// Chart configuration module
const chartConfig = {
    create(data) {
        return {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: data.datasets
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
                beforeDraw: (mutilBarChart) => {
                    const ctx = mutilBarChart.canvas.getContext('2d');
                    ctx.save();
                    ctx.globalCompositeOperation = 'destination-over';
                    ctx.fillStyle = 'white';
                    ctx.fillRect(0, 0, mutilBarChart.canvas.width, mutilBarChart.canvas.height);
                    ctx.restore();
                }
            }]
        };
    }
};

// Download module
const download = {
    mutilBarChart(mutilBarChart, format) {
        const canvas = document.getElementById('barChart');
        const link = document.createElement('a');
        link.href = canvas.toDataURL(`image/${format}`);
        link.download = `mutilBarChart.${format}`;
        link.click();
    }
};

// Bar input template
function createBarInput(id, color) {
    return `
        <div id="bar${id}" class="bar-input bg-gray-50 p-4 rounded-lg border">
            <div class="flex justify-between items-center mb-4">
                <h3 class="font-medium">Bar ${id + 1}</h3>
                <button class="remove-bar text-red-600 hover:text-red-700" data-id="${id}">
                    Remove
                </button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Bar Name</label>
                    <input type="text" class="bar-name w-full border rounded-md p-2" value="Bar ${id + 1}">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Values</label>
                    <input type="text" class="bar-values w-full border rounded-md p-2" value="10, 20, 30, 40">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Color</label>
                    <input type="color" class="bar-color w-full h-10 border rounded-md" value="${color}">
                </div>
            </div>
        </div>
    `;
}

// Form data module
const formData = {
    get() {
        const datasets = [];
        $('.bar-input').each(function() {
            datasets.push({
                label: $(this).find('.bar-name').val(),
                data: $(this).find('.bar-values').val().split(/[\s,]+/).map(Number),
                backgroundColor: $(this).find('.bar-color').val(),
                borderColor: $(this).find('.bar-color').val(),
                borderWidth: 1
            });
        });

        return {
            labels: $('#labels').val().split(/[\s,]+/).map(label => label.trim()),
            datasets: datasets,
            legendPosition: $('#legendPosition').val(),
            chartTitle: $('#chartTitle').val(),
            xAxisTitle: $('#xAxisTitle').val(),
            yAxisTitle: $('#yAxisTitle').val()
        };
    }
};

// Main application logic
let mutilBarChart = null;

function createChart() {
    const ctx = document.getElementById('barChart').getContext('2d');
    const data = formData.get();

    if (mutilBarChart) {
        mutilBarChart.destroy();
    }

    mutilBarChart = new Chart(ctx, chartConfig.create(data));
}

// Event handlers
$(document).ready(() => {
    // Add initial bars
    $('#addBar').click(() => {
        const color = colorPalette[barCounter % colorPalette.length];
        $('#barInputs').append(createBarInput(barCounter, color));
        barCounter++;
    });

    // Add two bars by default
    $('#addBar').click();
    $('#addBar').click();

    // Remove bar
    $(document).on('click', '.remove-bar', function() {
        const barCount = $('.bar-input').length;
        if (barCount > 1) {
            $(`#bar${$(this).data('id')}`).remove();
        } else {
            alert('You must have at least one bar!');
        }
    });

    // Generate and download handlers
    $('#generateGraph').click(createChart);
    $('#downloadPNG').click(() => download.mutilBarChart(mutilBarChart, 'png'));
    $('#downloadJPEG').click(() => download.mutilBarChart(mutilBarChart, 'jpeg'));

    // Initial mutilBarChart
    createChart();
});