class Personaje {
  constructor(posX, posY, imgDer, imgIzq) {
    this.posX = posX;
    this.posY = posY;
    this.vidas = 3;
    this.radio = 25;
    this.imgDerecha = imgDer;
    this.imgIzquierda = imgIzq;
    this.dir = "derecha";
  }

  dibujar() {
    push();
    imageMode(CENTER);
    if (this.dir == "derecha") {
      image(this.imgDerecha, this.posX, this.posY, 80, 150);
    } else {
      image(this.imgIzquierda, this.posX, this.posY, 80, 150);
    }
    pop();
  }
  
  perderVida(){
  this.vidas--;
  if(this.vidas < 0){
  this.vidas = 0;
  }
  }
  teclaPresionada(keyCode) {
    if (keyCode == LEFT_ARROW) {
      this.moverIzquierda();
    } else if (keyCode == RIGHT_ARROW) {
      this.moverDerecha();
    }
  }
  moverDerecha() {
    this.posX += 30;
    if (this.posX > width) this.posX = width;
    this.dir = "derecha";
  }
  moverIzquierda() {
    this.posX -= 30;
    if (this.posX < 0) this.posX = 0;
    this.dir = "izquierda";
  }
  colisiona(cuchillo) {
    let distancia = dist(this.posX, this.posY, cuchillo.posX, cuchillo.posY);
    if (distancia < this.radio + 10) {
      return true;
    }
    return false;
  }
}
