var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
// c.fillStyle = "gray";
// c.fillRect(100, 100, 100, 100);

// console.log(canvas);
// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(500,200);
// c.strokeStyle = "blue";
// c.stroke();


// for (var i=0; i < 4; i++){
//     var x = Math.random() * window.innerWidth;
//     var y = ;
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false); 
//     c.stroke();
// }



function Circle(x, y, velox, veloy,radius){
    this.x = x;
    this.y = y;
    this.velox = velox;
    this.veloy = veloy;
    this.radius= radius;

    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false); 
        c.strokeStyle = "blue";
        c.stroke();
    }
    this.update = function(){
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0 ){
            this.velox = -this.velox;
        }
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.veloy = -this.veloy;
        }
        this.x+=this.velox;
        this.y+=this.veloy;

        this.draw();
    }
}

var x = Math.random()* innerWidth;
var y = Math.random() * innerHeight;
var velox = (Math.random() - 0.5)*10;
var veloy = (Math.random() - 0.5)*10;
var radius = 30;

circleArray=[]
for(var i =0; i < 10; i++){
    var radius = 30;
    var x = Math.random()* (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2)+ radius;
    var velox = (Math.random() - 0.5)*10;
    var veloy = (Math.random() - 0.5)*10;
    
    circleArray.push(new Circle(x,y,velox,veloy,radius));
}
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0, innerWidth, innerHeight);
    for(var i =0; i < circleArray.length; i++){
        circleArray[i].update();
    }
    circle.update();
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false); 
    c.strokeStyle = "blue";
    c.stroke();
    
}
animate();





