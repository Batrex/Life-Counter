//the class for the counter 

class counter {

    constructor(width,height,x,y,colour1,colour2,life) {

        this.textColour = [0];
        this.life = life;
        this.textsize = 50;

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.colour1 = colour1;
        this.colour2 = colour2;
        this.colour = [250];

        //create the settings icon 
        this.iconSize = 20;
        this.settings = new icon(this.width - 30 + this.x,
                                 this.iconSize - 10 + this.y,
                                 this.iconSize,
                                 this.iconSize);     
        //and the icons for settings 
        this.settingIcons = [];
    }

    

    draw(){

        //the background will eventually be a picture but for now a solid red will do 
        fill(this.colour)
        rect(this.x,this.y,this.width,this.height) 

         //the display of the life total    
        push(); 
        fill(this.textColour);
        textAlign(CENTER,CENTER);
        textSize(this.textsize);
        text(this.life,this.width/2+this.x,this.height/2+this.y);
        pop();

        //hovering
        if (hovering(this.x,this.y,this.width,this.height)){
            this.colour = this.colour2;
        } 
        else {
            this.colour = this.colour1;
        }
        //the icon 
        this.settings.draw();
        for (let i = 0 ; i < this.settingIcons.length; i ++) {
            this.settingIcons[i].draw();
        }
        
    }
    

    incrementLife() {
        if (mouseY < this.height/2){
            this.life++;
        }
        else {
            this.life--;
            } 
        
    }

    expandSettings(){
        console.log("more settings");
        this.settingIcons.push(new icon(50,50,50,50))
    }

    pressed(){
        if (hovering(this.settings.x,this.settings.y,this.settings.width,this.settings.height)){
            this.settings.action(this.expandSettings);
        } else if (hovering(this.x,this.y,this.width,this.height)) {    
            this.incrementLife()
        }
                
    }
}