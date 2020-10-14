class Game{

    constructor(params){
        this.position = {x: params.x, y: params.y}
        this.W = params.gameWidth
        this.H = params.gameHeight
        this.ctx = params.ctx
        this.lastUpdate = 0
        this.playerType = params.playerType
        this.status = STATE.INTRO
        this.ballImg = params.ballImg
    }

    start(){
        let ballParams = {
                            W: this.W,
                            H: this.H,
                            img: this.ballImg
                         }
        this.paddle = new Paddle(this.W, this.H)
        this.ball = new Ball(ballParams)
        this.bricks = []
        if(this.playerType == 'local'){
            new InputHandler(this.paddle)
        }
        this.status = STATE.PLAYING
        requestAnimationFrame((x)=>this.loop(x))
    }

    loop(timestamp){
        let deltaTime = timestamp - this.lastUpdate
        this.lastUpdate = timestamp
        this.ctx.clearRect(0,0,this.W,this.H)
        this.draw(this.ctx, deltaTime)
        requestAnimationFrame((x)=>this.loop(x))
    }

    paused(){
        //Gradient background thing
        let my_gradient = this.ctx.createLinearGradient(0, 0, 0, this.H)
        my_gradient.addColorStop(0, "black")
        my_gradient.addColorStop(1, "white")
        this.ctx.fillStyle = my_gradient
        this.ctx.fillRect(0, 0, this.W, this.H)
        //Letters thing
        this.ctx.fillStyle = "white"
        this.ctx.font = "60px Arial"
        this.ctx.textAlign = "center"
        this.ctx.fillText("Pausa",this.W/2,this.H/2)
    }

    draw(ctx, dt){
        switch(this.status){

            case STATE.PAUSED:
                this.paused()
                return
            break

            case STATE.INTRO:
                return
            break

            case STATE.LOST:
                return
            break

            case STATE.PLAYING:
                this.paddle.update(dt)
                this.paddle.draw(ctx)
                this.ball.update(dt)
                this.ball.draw(ctx)
            break
        }
    }

    pause(){
        this.status = STATE.PAUSED
    }


}
