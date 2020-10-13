class Paddle{
    constructor(x,y){
        this.height = 10
        this.width = 150
        this.x = x/2-(150/2)
        this.y = y - 20 - this.height
        this.vel = 0
        this.maxSpeed = 150
        this.W = x
    }
    draw(ctx){
        ctx.fillStyle = "blue"
        ctx.fillRect(this.x,this.y,this.width,this.height)
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
        this.x += this.vel/dt
        if(this.x <= 0){
            this.x = 0
        }
        else if(this.x > this.W - this.width){
            this.x = this.W-this.width
        }
    }
}
