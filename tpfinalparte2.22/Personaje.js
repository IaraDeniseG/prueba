class Personaje {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.vida = true;
    this.mColor = color(0, 255, 0);
    this.radio = 25;
  }

  dibujar() {
    fill(0, 255, 0)
      ellipse(this.posX, this.posY, 50, 50);
  }
  teclaPresionada(keyCode) {
    if (keyCode == LEFT_ARROW) {
      this.moverIzquierda();
    } else if (keyCode == RIGHT_ARROW) {
      this.moverDerecha();
    }
  }
  moverDerecha() {
    this.posX += 20;
    if (this.posX > width) this.posX = width;
  }
  moverIzquierda() {
    this.posX -= 20;
    if (this.posX < 0) this.posX = 0;
  }
  colisiona(cuchillo) {
    let distancia = dist(this. posX, this.posY, cuchillo.posX, cuchillo.posY);
    if (distancia < this.radio + 10) {
      return true;
    }
    return false;
  }
}
