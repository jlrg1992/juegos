let canvas = document.getElementById('canvas')
let elBoton = document.getElementById('elBoton')
let config = {
                x: 0,
                y: 0,
                gameWidth: canvas.width,
                gameHeight: canvas.height,
                playerType: "local",
                ctx: canvas.getContext('2d'),
                ballImg: document.getElementById('ball'),
                brickImg: document.getElementById('brick'),
                background: document.getElementById('background'),
                paddleImg: document.getElementById('paddle')
             }
let STATE = {
                PLAYING: 1,
                PAUSED: 2,
                INTRO: 3,
                LOST: 4,
                LEVEL_UP:5
            }

function start(){
    alert("Puedes moverte con las flechas <-- -->.")
    game.start()
}


// State controller
function togglePause(){
    switch(game.status){

        case STATE.INTRO:
            start()
            elBoton.innerHTML = "Pause"
        break

        case STATE.PAUSED:
            elBoton.innerHTML = "Pause"
            game.status = STATE.PLAYING
        break

        case STATE.PLAYING:
            elBoton.innerHTML = "Continue"
            game.status = STATE.PAUSED
        break

        case STATE.LOST:
            start()
            elBoton.innHTML = "Pause"
        break
    }
}

function distance(pos1, pos2){
    return Math.sqrt(Math.pow(Math.abs(pos1.x - pos2.x), 2) + Math.pow(Math.abs(pos1.y - pos2.y), 2));
}

const game = new Game(config)
