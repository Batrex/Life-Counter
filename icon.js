//icon

class icon {
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw(){
        fill(0);
        rect(this.x,this.y,this.width,this.height);
    }
    action(fcn){
        fcn();
    }
}