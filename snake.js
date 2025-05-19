 class Snake{
    constructor (x,y,size){
    this.x = x
    this.y = y
    this.size = size
    this.tail = [{x:this.x,y:this.y}]
    this.rotateX = 0
    this.rotateY = 1
 }
}



var cnavas =document.getElementById("canvas")

var snake = new Snake();
var apple = new Apple();
var canvasContext = cnavas.getContext('2d');

window.onload = ()=>{
    gameloop();
}
function gameloop(){
    setInterval(SharedWorker,1000/15) //this value 15 is over it 
}

function show(){
    update();
    draw();
}