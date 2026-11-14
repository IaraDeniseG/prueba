class Cuchillo {
  constructor(posX, posY, img) {
    this.posX = posX;
    this.posY = posY;
    this.img = img;
    this.velocidad = random (2, 5);
  }
  dibujar() {
    push();
    imageMode(CENTER);
    image(this.img, this.posX, this.posY, 10, 60);
    pop();
  }

  mover() {
    this.posY += this.velocidad;
    if (this.posY > height + 50) {
      this.posY = random (-100, 0);
      this.posX = random (width);
    }
  }
}
