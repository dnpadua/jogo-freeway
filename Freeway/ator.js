//Código do ator

let xAtor = 100;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;


function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 25, 20); 
}

function movimentaAtor(){
 if (keyIsDown(UP_ARROW)){
   yAtor -= 1.5;
  }
  if (keyIsDown(DOWN_ARROW)){
      if(podeSeMover()){
      yAtor += 1.5;
    }
  }
}

function verificaColisao(){
 for (let i = 0; i < imagemCarros.length; i++){
   colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
   if (colisao){
    voltaPosicaoInicial();
    somDaColisao.play();
    //Perde pontos ao bater em carros
    if (meusPontos > 0){
    meusPontos -= 1;  
   }
  }
 }
}

function voltaPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,255,0));
  text(meusPontos, width / 7, 26);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    voltaPosicaoInicial();
    somDoPonto.play();
 }
}

function podeSeMover(){
 return yAtor < 368; 
}