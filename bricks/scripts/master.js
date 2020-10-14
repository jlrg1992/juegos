let canvas = document.getElementById('canvas')
let elBoton = document.getElementById('elBoton')
let config = {
                x: 0,
                y: 0,
                gameWidth: canvas.width,
                gameHeight: canvas.height,
                playerType: "local",
                ctx: canvas.getContext('2d'),
                ballImg: document.getElementById('ball')
             }
let STATE = {
                PLAYING: 1,
                PAUSED: 2,
                INTRO: 3,
                LOST: 4,
                LEVEL_UP:5
            }
const game = new Game(config)
function start(){
    alert("Puedes moverte con las flechas <-- -->.")
    game.start()
}


// State controller
function togglePause(){
    switch(game.status){

        case STATE.INTRO:
            start()
            elBoton.innerHTML = "Pausar"
        break

        case STATE.PAUSED:
            elBoton.innerHTML = "Pausar"
            game.status = STATE.PLAYING
        break

        case STATE.PLAYING:
            elBoton.innerHTML = "Continuar"
            game.status = STATE.PAUSED
        break

        case STATE.LOST:
            start()
            elBoton.innHTML = "Pausar"
        break
    }
}
