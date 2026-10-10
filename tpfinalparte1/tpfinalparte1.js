//fondos
let fondos = [];
let pantalla = 0;
//avanzar
let flecha
  //narración
  let texto1= [
  "Aleksi Nygaard es un reconocido escritor de novelas detectivescas, está acostumbrado a resolver crímenes a través de las páginas de sus libros.",
  "Tras pasar su primera noche en el hotel Paradisus, despierta dispuesto a comenzar el día. Se prepara y sale de su habitación rumbo al comedor, donde espera disfrutar de un tranquilo desayuno antes de continuar con su cronograma para este fin de semana.",
];
let texto2= [
  "Mientras avanza por el pasillo del hotel, Aleksi sigue pensando en cómo aprovechar el resto de su estancia. El silencio de la mañana apenas se ve interrumpido por sus pasos, hasta que algo en el suelo, al fondo del pasillo, llama su atención. Intrigado, continúa avanzando para distinguir de qué se trata."
];
let texto3= [
  "A unos metros, tendido en el suelo, yace el cuerpo sin vida de una persona. Por un instante, Aleksi se queda inmóvil, incapaz de apartar la mirada. Lo que parecía una mañana tranquila acaba de convertirse en una escena digna de sus propias novelas."
];
let texto4= [
  "Mientras espera la llegada de la policía, intenta mantener la calma y no alterar la escena del crimen.",
];
let texto5= [
  "Al poco tiempo, la policía llega al hotel y acordona la zona para comenzar la investigación. Los agentes examinan el cuerpo, recogen pruebas e interrogan al personal del establecimiento para reconstruir lo sucedido.",
  "En cuestión de minutos, el pasillo se convierte en una escena del crimen bajo su control."
];
let linea = 0;
//personajes
let aleksi= [];
let policias;

function preload() {
  //fondos
  for (let i = 0; i < 8; i++) {
    fondos[i] = loadImage("assets/fondo_"+i+".jpg");
  }
  //avanzar
  flecha = loadImage("assets/flecha.png");
  for (let j = 0; j< 3; j++) {
    aleksi[j] = loadImage("assets/aleksi_"+j+".png");
  }
  policias = loadImage("assets/policias.png");
}

function setup() {
  createCanvas(800, 450);
}


function draw() {

  if (pantalla == 0) {
    image(fondos[0], 0, 0, width, height);
  }

  if (pantalla == 1) {
    image(fondos[1], 0, 0, width, height);
    image(aleksi[0], 510, 60, 350, 500);
    cajaNarracion();
    narracion();
    image(flecha, 620, 384, 200, 100);
  }
  if (pantalla == 2) {
    image(fondos[2], 0, 0, width, height);
    image(aleksi[0], 510, 60, 350, 500);
    cajaNarracion();
    narracion();
    image(flecha, 620, 384, 200, 100);
  }
  if (pantalla == 3) {
    image(fondos[3], 0, 0, width, height);
    image(aleksi[2], 510, 60, 350, 500);
    cajaNarracion();
    narracion();
    image(flecha, 620, 384, 200, 100);
  }
  if (pantalla == 4) {
    image(fondos[4], 0, 0, width, height);
    image(aleksi[2], 510, 60, 350, 500);
    fill(50, 50, 50, 200);
    rect(200, 120, 400, 50);
    fill(255);
    textSize(16);
    text("Aleksi decide no acercarse más al cuerpo y llama inmediatamente a la policía.", 220, 130, 360, 50);

    fill(50, 50, 50, 200);
    rect(200, 200, 400, 50);
    fill(255);
    textSize(16);
    text("Aleksi decide buscar ayuda por su cuenta y se dirige a la recepción del hotel.", 220, 210, 360, 50);
  }
  if (pantalla == 5) {
    image(fondos[5], 0, 0, width, height);
    image(aleksi[2], 510, 60, 350, 500);
    cajaNarracion();
    narracion();
    image(flecha, 620, 384, 200, 100);
  }
  if (pantalla == 6) {
    image(fondos[6], 0, 0, width, height);
    image(aleksi[1], 510, 60, 350, 500);
    image(policias, 100, 50, 500, 650);
    cajaNarracion();
    narracion();
    image(flecha, 620, 384, 200, 100);
  }
  if (pantalla == 7) {
    image(fondos[7], 0, 0, width, height);
  }
}

function mousePressed() {
  if (pantalla == 0) {
    //rect(602, 180, 166, 30)
    if (botonSeleccionado(602, 180, 166, 30)) {
      pantalla = 1;
    }
  } else if (pantalla == 1) {
    if (botonSeleccionado(620, 384, 200, 100)) {
      if (linea==0) {
        linea = 1;
      } else {
        pantalla = 2;
        linea = 0;
      }
    }
  } else if (pantalla == 2) {
    if (botonSeleccionado(620, 384, 200, 100)) {
      pantalla = 3;
    }
  } else if (pantalla == 3) {
    if (botonSeleccionado(620, 384, 200, 100)) {
      pantalla = 4;
    }
  } else if (pantalla == 4) {
    if (botonSeleccionado(200, 120, 400, 50)) {
      pantalla = 5;
    }
  } else if (pantalla == 5) {
    if (botonSeleccionado(620, 384, 200, 100)) {
      pantalla = 6;
      linea = 0;
    }
  } else if (pantalla == 6) {
    if (botonSeleccionado(620, 384, 200, 100)) {
      if (linea==0) {
        linea = 1;
      } else {
        pantalla = 7;
      }
    }
  } else if (pantalla == 7) {
    if (botonSeleccionado(315, 305, 166, 40)) {
      pantalla = 0;
    }
  }
}
function botonSeleccionado(x, y, ancho, alto) {
  if (mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y +alto) {
    return true;
  } else {
    return false;
  }
}
function narracion() {
  fill(255);
  textSize(18);
  if (pantalla == 1) {
    text(texto1[linea], 70, 320, 660, 100);
  }
  if (pantalla == 2) {
    text(texto2[linea], 70, 320, 660, 100);
  }
  if (pantalla == 3) {
    text(texto3[linea], 70, 320, 660, 100);
  }
  if (pantalla == 5) {
    text(texto4[linea], 70, 320, 660, 100);
  }
  if (pantalla == 6) {
    text(texto5[linea], 70, 320, 660, 100);
  }
}

function cajaNarracion() {
  fill(0, 0, 0, 150);
  rect(50, 300, 700, 120);
}
