class Ball{
    constructor(params){
        this.size = 25
        this.W = params.W
        this.H = params.H
        this.position = {x: this.W/2, y: this.H/2}
        this.img = params.img
        this.counter = 0;
        this.vel = {x: 2, y: 2}
        this.speed = 30
        this.power = 1
    }
    update(dt,gam){
        this.position.x += this.vel.x*this.speed/dt
        this.position.y += this.vel.y*this.speed/dt

        if(this.position.x < 0){
            this.position.x = 0
            this.invertX()
        }
        if(this.position.y < 0){
            this.position.y = 0
            this.invertY()
        }

        if(this.position.x > (this.W - this.size)){
            this.position.x = this.W - this.size
            this.invertX()
        }
        if(this.position.y > (this.H - this.size)){
            this.position.y = 250
            this.invertY()
            gam.status = STATE.LOST
        }

    }
    draw(ctx){
        ctx.drawImage(this.img,this.position.x,this.position.y,this.size,this.size);
    }

    invertX(){
        this.vel.x = this.vel.x * -1
    }
    invertY(){
        this.vel.y = this.vel.y * -1
    }
}
