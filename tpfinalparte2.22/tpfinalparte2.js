//clase
let juego

  //recursos


  function setup() {
  createCanvas(800, 400);
  juego = new Minijuego(10);
}


function draw() {
  background(200);
  juego.actualizar();
  juego.dibujar();
}
function keyPressed() {
  juego.teclaPresionada(keyCode);
}
