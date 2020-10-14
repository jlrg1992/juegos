class Ball{
    constructor(params){
        this.size = 30
        this.W = params.W
        this.H = params.H
        this.x = this.W/2
        this.y = this.H/2
        this.img = params.img
        this.counter = 0;
        this.vel = {x: 2, y: 2}
        this.speed = 70
    }
    update(dt){
        this.x += this.vel.x*this.speed/dt
        this.y += this.vel.y*this.speed/dt
        if(this.x < 0 || this.x >= this.W-this.size){
         this.vel.x = this.vel.x*-1
        }
        if(this.y < 0 || this.y >= this.H-this.size){
         this.vel.y = this.vel.y*-1
        }
    }
    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y,this.size,this.size);
    }
}
