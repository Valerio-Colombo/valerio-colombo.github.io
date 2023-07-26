var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
// round line cap (middle line)
context.beginPath();
context.moveTo(200, canvas.height / 2);
context.lineTo(canvas.width - 200, canvas.height / 2);
context.lineWidth = 10;
context.strokeStyle = '#f4e3b2ff';
context.lineCap = 'round';
context.stroke();