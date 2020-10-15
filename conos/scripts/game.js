class Game{

    constructor(params){
        this.background = params.background
        this.position = {x: params.x, y: params.y}
        this.W = params.gameWidth
        this.H = params.gameHeight
        this.ctx = params.ctx
        this.lastUpdate = 0
        this.playerType = params.playerType
        this.status = STATE.INTRO
        this.ballImg = params.ballImg
        this.brickImg = params.brickImg
        this.paddleImg = params.paddleImg
        this.score = 0
        let ballParams = {
                            W: this.W,
                            H: this.H,
                            img: this.ballImg
                         }
        this.ball = new Ball(ballParams)
        this.paddle = new Paddle(this.W, this.H, this.paddleImg)
        if(this.playerType == 'local'){
            new InputHandler(this.paddle)
        }
    }

    start(){
        this.reset()
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
                this.score = 0
                this.reset()
                return
            break

            case STATE.PLAYING:
                this.playing(ctx,dt)
                return
            break
        }
    }

    pause(){
        this.status = STATE.PAUSED
    }

    generateBricks(params){
        for(let y = 0; y < 3; y++){
            for(let x = 0; x < 6; x++){
                let holder = Math.random()
                if(holder >= 0.55){
                    let xd = (this.W/7 * (x+1))
                    let yd = (this.H/7 * (y+1))
                    let newParams = JSON.parse(JSON.stringify(params));
                    this.bricks.push(new Brick(params,xd,yd))
                }
            }
        }
    }
    reset(){
        let brickParams = {
                            W: this.W,
                            H: this.H,
                            img: this.brickImg,
                            counter: 1,
                            ctx: this.ctx
                          }
        this.bricks = []
        this.generateBricks(brickParams)
        this.status = STATE.PLAYING
    }
    playing(ctx,dt){
        if(this.bricks.length <= 0){
            this.reset()
        }
        // Yard
        ctx.globalAlpha=0.9
        ctx.drawImage(this.background,0,0,this.W,this.H);
        ctx.globalAlpha=1
        // Updates
        this.paddle.update(dt)
        this.ball.update(dt,this)
        // Collision
        if(!this.paddleCollision(this.ball, this.paddle)){
            let brickNumberHolder = this.bricks.length
            this.bricks.forEach((x)=>x.brickCollision(this.ball))
            this.bricks = this.bricks.filter((x)=> x.counter > 0)
            this.score += brickNumberHolder - this.bricks.length
        }
        // draw
        ctx.globalAlpha=0.7
        ctx.font = "100px Comic Sans MS"
        ctx.fillStyle = "white"
        ctx.textAlign = "center"
        ctx.fillText(this.score, canvas.width/2, canvas.height/4)
        ctx.globalAlpha=1
        this.paddle.draw(ctx)
        this.ball.draw(ctx)
        this.bricks.forEach((x)=> x.draw(ctx))
    }

    paddleCollision(ball,paddle){
        let positionY = ball.position.y >= paddle.position.y-ball.size && ball.position.y <= paddle.position.y + paddle.height
        let positionX = ball.position.x + ball.size > paddle.position.x && ball.position.x < paddle.position.x + paddle.width
        if( positionY && positionX){
            ball.position.y = paddle.position.y-ball.size
            ball.invertY()
            return true
        }
        return false
    }
}
