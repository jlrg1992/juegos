const editor = (p)=> {

  p.setup = function() {
  cnv = p.createCanvas(480, 480);
    pseudoCanva = nuevoPseudoCanva()
  }

  p.draw = function() {
    p.background(200);
    if(reset){pseudoCanva = nuevoPseudoCanva(); reset = false}
    dibujarCanva(pseudoCanva)
    if(download){pseudoCanva = descargarImagen(); download = false}
  }

  p.mouseDragged = function(){
    colorClicked()
  }
  p.mousePressed = function(){
    colorClicked()
  }

  p.keyPressed = function(){
    console.log(p.keyCode)
    switch(p.keyCode){
        case 48:
          currentColor = [0,0,0,0]
        break
        case 49:
          currentColor = [250,250,250,250]
        break
        case 50:
          currentColor = [0,0,0,250]
        break
        case 51:
          currentColor = [250,0,0,250]
        break
        case 52:
          currentColor = [0,250,0,250]
        break
        case 53:
          console.log(5)
        break
        case 54:
          console.log(6)
        break
        case 55:
          console.log(7)
        break
        case 56:
          console.log(8)
        break
        case 57:
          console.log(9)
        break
        case 58:
          console.log(0)
        break
    }
  }


  function nuevoPseudoCanva(){
    let pseudoCanva = []
    for(let y = 0; y < alto; y++){
      pseudoCanva[y]=[]
      for(let x = 0; x < ancho; x++){
        pseudoCanva[y].push([250,250,250,250])
      }
    }
    return pseudoCanva
  }

  function dibujarCanva(arr){
    for(let y = 0; y < arr.length; y++){
      dibujarLinea(arr[y],y)
    }
  }
  function dibujarLinea(arr,y){
    for(let x = 0; x < arr.length; x++){
      p.fill(arr[x][0],arr[x][1],arr[x][2],arr[x][3])
      p.rect(x*pixelSize, y*pixelSize, pixelSize, pixelSize)
    }
  }

  function colorClicked(){
    let x = Math.floor((p.mouseX)/pixelSize)
    let y = Math.floor(p.mouseY/pixelSize)
    if(p.mouseX < 480 && p.mouseX > 0 && p.mouseY > 0 && p.mouseY < 480){
      pseudoCanva[y][x] = currentColor.slice()
    }
  }
  function descargarImagen(){
    p.saveCanvas(cnv, 'myCanvas', 'jpg');
  }
}


let pixelSize = 30
let pseudoCanva
let ancho = 16
let alto = 16
let currentColor = [0,0,0,250]
let reset = false
let download = false
let cnv

let myp5 = new p5(editor, 'canvacontainer');
