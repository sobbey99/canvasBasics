const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = [];
let hue = 0;

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
    for(let i =0; i < 20; i++) {
        particlesArray.push(new Particle('white'));
    }
});


canvas.addEventListener('mousemove', function(e){
    mouse.x = e.x;
    mouse.y = e.y;
    for(let i =0; i < 5; i++) {
        particlesArray.push(new Particle('white'));
    }
});





class Particle {
    constructor() {
     this.x = mouse.x;
     this.y = mouse.y;
    // this.x = Math.random() * canvas.width;
    // this.y = Math.random() * canvas.height;
     this.size = Math.random() * 15 + 1;
     this.speedX = Math.random() * 3 - 1.5;
     this.speedY = Math.random() * 3 - 1.5;
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if ( this.size > 0.2 ) {
            this.size -= 0.1;
        }
     }

    draw(){
        ctx.fillStyle = 'hsl(' + hue + ', 100%, 50%)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(this.x,this.y, this.size , 0, Math.PI * 2);
        ctx.fill();
    }
}



function handleParticles(){
    for(let i = 0; i < particlesArray.length; i++){
        particlesArray[i].update();
        particlesArray[i].draw();
        if(particlesArray[i].size <= 0.3) {
            particlesArray.splice(i, 1);
            i--;
        }
    }
}


function animate(){
    // ctx.clearRect(0,0, canvas.width, canvas.height);
    //ctx.clearRect(start X, start Y, end X, end Y)
    ctx.fillStyle = 'rgba(0,0,0,0.02)';
    ctx.fillRect(0,0, canvas.width, canvas.height);
    handleParticles()
    hue++;
    requestAnimationFrame(animate);
    // requestAnimationFrame request a function one time in frame, but in case above in call itself over and over and creates infinity loop
}

animate();