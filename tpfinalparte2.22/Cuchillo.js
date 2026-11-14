class Cuchillo {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.mColor = color(192, 192, 192);
    this.velocidad = random (2, 5);
  }
  dibujar() {
    fill(192, 192, 192);
    ellipse(this.posX, this.posY, 10, 20);
  }

  mover() {
    this.posY += this.velocidad;
    if (this.posY > height) {
      this.posY = random (-100, 0);
      this.posX = random (width);
    }
  }
}
