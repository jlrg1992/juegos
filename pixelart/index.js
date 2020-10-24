function setup() {
  createCanvas(540, 480);
  for(let y = 0; y < alto; y++){
    pseudoCanva[y]=[]
    for(let x = 0; x < ancho; x++){
      pseudoCanva[y].push([250,250,250,250])
    }
  }
}

function draw() {
  background(220);
  dibujarCanva(pseudoCanva)
  
}
let pixelSize = 30
let pseudoCanva =[]
let ancho = 16
let alto = 16
let currentColor = [0,0,0,250]

function dibujarCanva(arr){
  for(let y = 0; y < arr.length; y++){
    dibujarLinea(arr[y],y)
  }
}
function dibujarLinea(arr,y){
  for(let x = 0; x < arr.length; x++){
    //noStroke()
    fill(arr[x][0],arr[x][1],arr[x][2],arr[x][3])
    rect(60+x*pixelSize, y*pixelSize, pixelSize, pixelSize)
  }
}

function mouseDragged(){
  colorClicked()
}
function mousePressed(){
  colorClicked()
}
function colorClicked(){
  let x = Math.floor((mouseX - 60)/pixelSize)
  let y = Math.floor(mouseY/pixelSize)
  pseudoCanva[y][x] = currentColor.slice()
}
function keyPressed(){
  switch(keyCode){
    case 48:
      console.log(0)
    break
    case 49:
    console.log(1)
    break
    case 50:
    console.log(2)
    break
    case 51:
    console.log(3)
    break
    case 52:
    console.log(4)
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
