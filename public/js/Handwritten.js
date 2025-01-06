$(document).ready(function() {
    const canvas = $('#drawingCanvas')[0];
    const ctx = canvas.getContext('2d');
    let isDrawing = false;

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mousemove', draw);

    function startDrawing(e) {
        isDrawing = true;
        ctx.beginPath(); // 开始新的路径
        ctx.moveTo(e.offsetX, e.offsetY); // 移动到鼠标按下的位置
    }

    function stopDrawing() {
        isDrawing = false;
        ctx.closePath(); // 关闭路径
    }

    function draw(e) {
        if (!isDrawing) return;
        const brushColor = $('#colorPicker').val();
        const brushSize = $('#brushSize').val();
        ctx.strokeStyle = brushColor;
        ctx.lineWidth = brushSize;
        ctx.lineCap = 'round';
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        ctx.beginPath(); // 开始新的路径
        ctx.moveTo(e.offsetX, e.offsetY); // 移动到当前鼠标位置
    }

    $('#clearCanvas').click(function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    $('#downloadImage').click(function() {
        const link = document.createElement('a');
        link.download = 'drawing.png';
        link.href = canvas.toDataURL();
        link.click();
    });
});