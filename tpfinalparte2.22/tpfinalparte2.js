
//Buenas Profe, esperamos que se encuentre bien. Le comentamos que el trabajo esta sin terminar, por problemas personales no llegamos
//con el tiempo y preferimos enfocarnos en hacer una buena base de cara al recuperatorio. Cualquier devolucion sobre como
//venimos nos sirve, muchas gracias.
// Iara Denise Grossutti Legajo: 126986/8
// Trinidad Lima Legajo: 125610/1

//clase
let juego

  //recursos
  let imgCuchillo;
let imgFondo;
let imgPjDer;
let imgPjIzq;
let imgCorazon

function preload() {
  imgCuchillo = loadImage('assets/cuchillo.png');
  imgFondo = loadImage('assets/fondo.png');
  imgPjDer = loadImage('assets/der.png');
  imgPjIzq = loadImage('assets/izq.png');
  imgCorazon = loadImage('assets/corazon.png');
}
function setup() {
  createCanvas(800, 400);
  juego = new Minijuego(10, imgCuchillo, imgFondo, imgPjDer, imgPjIzq, imgCorazon);
}


function draw() {
  background(200);
  juego.actualizar();
  juego.dibujar();
}
function keyPressed() {
  juego.teclaPresionada(keyCode);
}
