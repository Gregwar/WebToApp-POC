
function update() {
    $.getJSON('com.php', function(response) {
        canvas = $('canvas')[0];
        context = canvas.getContext('2d');
        context.clearRect(0, 0, 900, 500);
        context.fillStyle = '#000';
        context.beginPath();
        context.arc(450 + parseFloat(response.x)*20, 250 - parseFloat(response.y)*20, 5, 0, Math.PI*2, true);
        context.closePath();
        context.fill();

        context.strokeStyle = '#aaa';
        context.moveTo(0, 250);
        context.lineTo(900, 250);
        context.moveTo(450, 0);
        context.lineTo(450, 500);
        context.stroke();
    });
}

$(document).ready(function() {
    setInterval(update, 50);
});
