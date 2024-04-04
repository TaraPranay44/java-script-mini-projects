let canvas = document.getElementById("canvas");//  canvas is an HTML element which can be used to draw graphics via scripting (usually JavaScript)
     

var window_height = window.innerHeight;  //the whole window visible to user
var window_width = window.innerWidth;     

canvas.width = window_width;          //filling the whole windw with canvas
canvas.height = window_height;

canvas.style.backgound = "#ff8";       //giving that canvas a background color

let context = canvas.getContext("2d");         //creating a small context and further we will style it


context.fillRect(300,0,100,200);           //creating a rectangle with these coordinates whose default color will be black

context.fillStyle = "red";            //giving red color backgroung to upcoming created contexts

context.fillRect(100,500,100,100);    //now this rectangle will have red color as background

//now we are going to build a circle
context.beginPath();                 //begins the path
context.strokeStyle = "blue";       //with border color as blue
context.linewidth = 20;
context.arc(100,100,50,0,Math.PI*2,false);    //start position(x = 100,y = 100),radius = 50,start angle = 0,end angle = pi*2 => path again ends at 360 degeres completing a circle, and false determine the rotation is anticlockwise
context.stroke(); //this line actually implements the circle(arc)
context.closePath();




