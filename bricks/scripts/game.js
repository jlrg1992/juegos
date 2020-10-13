class Game{

    constructor(params){
        this.position = {x: params.x, y: params.y}
        this.W = params.gameWidth
        this.H = params.gameHeight
        this.ctx = params.ctx
        this.lastUpdate = 0
        this.handler = null
        this.playerType = params.localPlayer
        requestAnimationFrame(this.loop)
    }

    start(){
        this.paddle = new Paddle(this.W, this.H)
        this.Objects = []
        if(this.localPlayer){
            InputHandler()
        }
    }

    loop(timestamp){
        let deltaTime = timestamp - this.lastUpdate
        this.lastCTXUpdate = timestamp
        this.ctx.clearRect(0,0,this.W,this.H)
        this.draw(this.ctx, deltaTime)
        requestAnimationFrame(this.loop)
    }

    draw(ctx, dt){
        this.paddle.update(dt)
        this.paddle.draw(ctx)
    }

}
