class Minijuego {
  constructor(cantidadCuchillos, imgRecurso, imgRecursoFondo, imgDer, imgIzq, imgCorazon) {
    this.cantidadCuchillos = cantidadCuchillos;
    this.imgCuchillo = imgRecurso;
    this.imgFondo = imgRecursoFondo;
    this.imgCorazon = imgCorazon;
    this.imgDer = imgDer;
    this.imgIzq = imgIzq;
    this.crearCuchillos();
    this.crearPersonaje();
    
  }
  actualizar() {
    for (let i= 0; i <this.cuchillos.length; i++) {
      this.cuchillos[i].mover();
    }
    this.controlarColision();
  }
  dibujar() {
    push();
    imageMode (CORNER);
    image(this.imgFondo, 0, 0, width, height);
    pop();
    this.personaje.dibujar();
    for (let i=0; i< this.cuchillos.length; i++) {
      this.cuchillos[i].dibujar();
    }
    for (let i = 0; i < this.personaje.vidas; i++){
    let xCorazon = 30 + (i * 40);
    let yCorazon = 30;
    imageMode(CENTER);
    image(this.imgCorazon, xCorazon, yCorazon, 30, 30);
    }
  }

  

  crearCuchillos() {
    this.cuchillos = [] ;
    for (let i=0; i< this.cantidadCuchillos; i++) {
      this.cuchillos[i] = new Cuchillo(i*80 + 40, random (-200, 0), this.imgCuchillo);
    }
  }

  crearPersonaje() {
    this.personaje = new Personaje(width/2, 350, imgPjDer, imgPjIzq);
  }
  

  controlarColision() {
    for (let i=0; i< this.cuchillos.length; i++) {
      let c = this.cuchillos[i];
      if (this.personaje.colisiona(c)) {
        this.personaje.perderVida();
        c.posY = random (-200, 0);
        c.posX = random (width);
        
        if(this.personaje.vidas <= 0){
        console.log("GAME OVER");
        }
      }
    }
  }
  personajeGano() {
  }
  teclaPresionada(keyCode) {
    this.personaje.teclaPresionada(keyCode);
  }
}
