class Paddle{
    constructor(W,H,img){
        this.height = 50
        this.width = 75
        this.position = {x: W/2-(150/2), y: H - 15 - this.height}
        this.vel = 0
        this.maxSpeed = 200
        this.W = W
        this.img = img
    }
    draw(ctx){
        ctx.drawImage(this.img,this.position.x,this.position.y,this.width,this.height);
    }
    moveLeft(){
        this.vel = -this.maxSpeed
    }
    moveRight(){
        this.vel = this.maxSpeed
    }
    stop(){
        this.vel = 0
    }
    update(dt){
        this.position.x += this.vel/dt
        if(this.position.x <= 0){
            this.position.x = 0
        }
        else if(this.position.x > this.W - this.width){
            this.position.x = this.W-this.width
        }
    }
}
