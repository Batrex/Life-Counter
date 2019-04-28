console.log("main.js");

let colour1 = [250,0,0];
let colour2 = [240,30,30];
let player1 = new counter(100,100,0,0,colour1,colour2,0) //width height x y life 
let player2 = new counter(100,100,100,0,colour1,colour2,0)

//a function to check if the mouse is over something
function hovering(x,y,width,height){
        return mouseX < x + width 
            && mouseX > x
            && mouseY < y + height
            && mouseY > y;
}

//the function that is run at the begining by p5 
function setup() {
    createCanvas(500,500)
}

//the function that is run every draw step by p5 
function draw() {
    noStroke();
    background(250);
    player1.draw();
    player2.draw();

}

//the function that is run when the mouse is pressed by p5 
function mousePressed(){
    player1.pressed();
    player2.pressed();

}