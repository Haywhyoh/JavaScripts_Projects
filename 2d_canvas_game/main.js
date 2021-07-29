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
var leftPressed = false;
var rightPressed = false;


var brickRowCount =4;
var brickColumnCount = 7;
var brickWidth = 80;
var brickHeight = 24;
var brickPadding = 12;
var brickOffsetLeft = 32;
var brickOffsetTop = 32; 

var bricks = [];
for(c=0; c<brickColumnCount; c++){
    bricks[c] = [];
    for(r=0; r<brickRowCount; r++){
        bricks[c][r] = {x: 0, y: 0 };
    }
}

function drawBricks(){
    for(c=0; c < brickColumnCount; c++){
        for(r=0; r < brickRowCount; r++){
            var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
            var brickY = (r*(brickHeight+brickPadding))+brickOffsetLTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle= 'black';
            ctx.fill();
            ctx.closePath();
        }
    }
}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup',keyUpHandler,false);

function keyDownHandler(e){
    if(e.keyCode == 39){
        rightPressed = true;
    }

    else if(e.keyCode == 37){
        leftPressed = true;
        }
}


function keyUpHandler(e){
    if(e.keyCode == 39){
        rightPressed = false;
    }

    else if(e.keyCode == 37){
        leftPressed = false;
        }
}


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
    drawBricks();
    
    drawPaddle();
    if ( x +dx > canvas.width-ballRadius || x+ dx < ballRadius){
        dx = -dx;
    }
    if(y + dy < ballRadius){
        dy = -dy;
    }
    else if(y + dy > canvas.height-ballRadius){
        if (x > paddleX && x < paddleX + paddlewidth){
            dy = -dy;
        }
        else{
            alert('GAME OVER!!!!');
            document.location.reload();
        }
    }
   
    if (rightPressed && paddleX < canvas.width-paddlewidth){
          
        paddleX += 7;
    }

    else if(leftPressed && paddleX >0){
        paddleX -= 7; 
    }
    x +=dx;
    y +=dy;
}
setInterval(draw, 10)