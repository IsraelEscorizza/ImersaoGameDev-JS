let bgImage;
let chImage;
let cenario;
let gameSound;

function preload(){
  bgImage   = loadImage('../../assets/bg/floresta.png');
  chImage   = loadImage('../../assets/ch/witch_runner/correndo.png');
  gameSound = loadSound('../../assets/sound/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth*0.9,windowHeight*0.9);
  cenario     = new Cenario(bgImage, 16);
  personagem  = new Personagem(chImage);
  frameRate(24);
  gameSound.loop(); 
}

function draw() {
  cenario.exibe();
  cenario.move();
  personagem.exibe();
}