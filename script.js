const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(ctx);


window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});

//Create red circle
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(100,100, 50 , 0, Math.PI * 2);
ctx.fill();


//Create red stroke circle
ctx.fillStyle = 'red';
ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.arc(300,100, 500 , 0, Math.PI * 2);
// ctx.arc(X, Y, RADIUS, startAngle, endAngle);
ctx.stroke();