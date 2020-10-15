class InputHandler{
    constructor(x){
        document.addEventListener("keydown", function(event){
                switch(event.keyCode){
                    case 37:
                        x.moveLeft()
                        break
                    case 39:
                        x.moveRight()
                        break
                    }
            })
        document.addEventListener("keyup", function(event){
                if(event.keyCode == 37 && x.vel < 0 || event.keyCode == 39 && x.vel > 0){
                   x.stop()
                }
            })
    }
}
