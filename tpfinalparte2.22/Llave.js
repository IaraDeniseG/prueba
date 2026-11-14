class Llave {
  constructor(posX, posY) {
    this.posX = 50;
    this.posY = 50;
    this.mColor = color(255, 255, 0);
  }
  dibujar() {
    fill(255, 255, 0);
    ellipse(this.posX, this.posY, 10, 20);
  }

  mover() {
  }
}
