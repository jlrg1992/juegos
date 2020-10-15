class Brick{
    constructor(params,px,py){
        this.size = 35
        this.W = params.W
        this.H = params.H
        this.position = {x: px, y: py}
        this.img = params.img
        this.counter = params.counter
    }
  
    addCounter(x){
        this.counter-=x
    }

    draw(ctx){
        ctx.drawImage(this.img,this.position.x,this.position.y,this.size,this.size);
    }

    brickCollision(ball){
        if(distance(this.position, ball.position) < this.size){
            this.addCounter(ball.power)
            ball.vel.x = ball.vel.x *-1
            ball.vel.y = ball.vel.y *-1
        }
    }

}
