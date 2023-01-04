const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(ctx);


window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});

const mouse = {
    x: undefined,
    y: undefined,
}

canvas.addEventListener('click', function(e){
    mouse.x = e.x;
    mouse.y = e.y;
    drawCircle();
});




function drawCircle(){
    ctx.fillStyle = 'blue';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(mouse.x,mouse.y, 50 , 0, Math.PI * 2);
    ctx.fill();
}

function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    //ctx.clearRect(start X, start Y, end X, end Y)
    requestAnimationFrame(animate);
    // requestAnimationFrame request a function one time in frame, but in case above in call itself over and over and creates infinity loop
}