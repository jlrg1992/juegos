let canvas = document.getElementById('canvas')
let config = {
                x: 0,
                y: 0,
                gameWidth: 300,
                gameHeight: 500,
                playerType: "local",
                ctx: canvas.getContext('2d')
             }
const game = new Game(config)
game.start()

