var ajax = null;
var X = null, Y = null;
var goalX = 0, goalY = 0;

function drawCircle(x, y)
{
    canvas = $('canvas')[0];
    context = canvas.getContext('2d');
    context.clearRect(0, 0, 900, 500);
    context.fillStyle = '#000';
    context.beginPath();
    context.arc(450 + parseFloat(x), 250 + parseFloat(y), 5, 0, Math.PI*2, true);
    context.closePath();
    context.fill();

    context.strokeStyle = '#aaa';
    context.moveTo(0, 250);
    context.lineTo(900, 250);
    context.moveTo(450, 0);
    context.lineTo(450, 500);
    context.stroke();
}

function smooth()
{
    if (X != null && Y != null) {
        X = 0.9*X + 0.1*goalX;
        Y = 0.9*Y + 0.1*goalY;

        drawCircle(X, Y);
    }
}

function update()
{
    if (ajax != null) {
        ajax.abort();
    }

    ajax = $.getJSON('getposition.php', function(response) {
        ajax = null;

        goalX = response.x;
        goalY = response.y;

        if (X == null) {
            X = goalX;
        }

        if (Y == null) {
            Y = goalY;
        }
    });
}

$(document).ready(function() {
    setInterval(update, 100);
    setInterval(smooth, 10);

    $('canvas').click(function(e) {
        var mouseX = (e.pageX - $(this).offset().left)-450;
        var mouseY = (e.pageY - $(this).offset().top)-250;

        $.get('setcenter.php?x='+mouseX+'&y='+mouseY);
    });
});
