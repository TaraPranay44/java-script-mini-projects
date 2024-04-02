//create a canvas object from html element
var canvas = document.getElementById('canvas') //The getElementById() method returns an element with a specified value. The getElementById() method returns null if the element does not exist.
//create a 2d drawing object
var ctx = canvas.getContext('2d'); //getContext() method returns a drawing context on the canvas, or null if the context identifier is not supported
//calculate the clock radius by using the height
var radius = canvas.height / 2;
//re-map the x and y axis to the center of the canvas
ctx.translate(radius,radius); //The translate() method remaps the (0,0) position of the context. Note. When you call a new method after translate(), the new positions are added to the x and y
radius *= 0.90 // reduce clock radius by 90%
 //run the drawclock functio every second 
setInterval(drawClock,1000);//The setInterval() method calls a function at specified intervals (in milliseconds)

function drawClock(){
    drawFace(ctx,radius);
    drawNumbers(ctx,radius);
    drawTime(ctx,radius);
}

function drawFace(ctx,radius){
    var grad;
    //draw white circle for the face
    ctx.beginPath(); //beginPath() method of the Canvas 2D API starts a new path by emptying the list of sub-paths.
    ctx.arc(0,0,radius,0,2*Math.PI);  //The arc() method creates a circle or a part of a circle. Use the stroke() or fill() method to draw the path.
    // 0,0 is centre;  0 is start angle 2*math.pi is end angle
    // positive x-axis(right) is denoted by 0, negative y-axis(down): 0.5*math.pi, negative x-axis(left): 1*math.pi, postive y-axis : 1.5*math.pi and completing the circle denoted by 2.math.pi ----> starting from 0->0.5*pi->1*pi->1.5*pi->2*pi->completes a circle
    ctx.fillStyle = "White";
    ctx.fill();

    //create a radial gradient(inner,middle,and outer edge of clock)
    //radial gradient : Gradients are CSS elements of the image data type that show a transition between two or more colors. These transitions are shown as either linear or radial. Because they are of the image data type, gradients can be used anywhere an image might be. The most popular use for gradients would be in a background element.
    grad = ctx.createRadialGradient(0,0,radius*0.95,0,0,radius*1.05); //createRadialGradient() method of the Canvas 2D API creates a radial gradient using the size and coordinates of two circles.
    //context.createRadialGradient(x0, y0, r0, x1, y1, r1) ---> x0	The x-coordinate of the starting circle of the gradient
                                                               // y0	The y-coordinate of the starting circle of the gradient
                                                               // r0	The radius of the starting circle
                                                               // x1	The x-coordinate of the ending circle of the gradient
                                                               // y1	The y-coordinate of the ending circle of the gradient
                                                               // r1	The radius of the ending circle
    grad.addColorStop(0,'#333'); // specifies a color and a position in a gradient object.
    grad.addColorStop(0.5,'white'); //gradient.addColorStop(stop, color) stop :	A value between 0 and 1. The position between gradian start and end
    grad.addColorStop(1,'#333');

    //define gradient as strokestyle
    ctx.strokeStyle = grad; //The strokeStyle property sets or returns the color, gradient, or pattern used for strokes.The default value is #000000 (solid black).
    ctx.lineWidth = radius*0.1; //lineWidth property of the Canvas 2D API sets the thickness of lines
    ctx.stroke(); //stroke() method of the Canvas 2D API strokes (outlines) the current or given path with the current stroke style. Strokes are aligned to the center of a path; in other words, half of the stroke is drawn on the inner side, and half on the outer side.

    //draw the center of the clock
    ctx.beginPath();
    ctx.arc(0,0,radius*0.1,0,2*Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();


}

