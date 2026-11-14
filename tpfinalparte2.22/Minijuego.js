class Minijuego {
  constructor(cantidadCuchillos) {
    this.cantidadCuchillos = cantidadCuchillos;
    this.crearCuchillos();
    this.crearPersonaje();
    this.crearLlave();
  }
  actualizar() {
    for (let i= 0; i <this.cuchillos.length; i++) {
      this.cuchillos[i].mover();
    }
    this.controlarColision();
  }
  dibujar() {
    this.personaje.dibujar();
    for (let i=0; i< this.cantidadCuchillos; i++) {
      this.cuchillos[i].dibujar();
    }
    this.llave.dibujar();
  }

  iniciar() {
  }

  crearCuchillos() {
    this.cuchillos = [] ;
    for (let i=0; i< this.cantidadCuchillos; i++) {
      this.cuchillos[i] = new Cuchillo(i*80 + 40, random (-200, 0));
    }
  }

  crearPersonaje() {
    this.personaje = new Personaje(width/2, 350);
  }
  crearLlave() {
    this.llave = new Llave();
  }

  controlarColision() {
    for (let i=0; i< this.cuchillos.length; i++) {
      let c = this.cuchillos[i];
      if (this.personaje.colisiona(c)) {
        this.personaje.vida = false;
      }
    }
  }
  personajeGano() {
  }
  teclaPresionada(keyCode) {
    this.personaje.teclaPresionada(keyCode);
  }
}
