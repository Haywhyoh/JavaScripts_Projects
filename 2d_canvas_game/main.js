var canvas = document.getElementById('mycanvas');
ctx = canvas.getContext('2d');
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var paddleheight = 12;
var paddlewidth = 72;
var paddleX = (canvas.width-paddlewidth)/2;

function drawBall(){
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();
  

}

function drawPaddle(){
    ctx.beginPath();
    ctx.rect(paddleX,canvas.height -paddleheight, paddlewidth, paddleheight);
    ctx.fillStyle = 'skyblue';
    ctx.fill();
    ctx.closePath();
}

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawBall();
    drawPaddle();
    if ( x +dx > canvas.width-ballRadius || x+ dx < ballRadius){
        dx = -0.8*dx
    }

    if ( y +dy> canvas.height-ballRadius || y+ dy < ballRadius){
        dy= -dy
    }
    x +=dx;
    y +=dy;
}
setInterval(draw, 10)