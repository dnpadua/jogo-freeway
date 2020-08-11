//Imagens do jogo e audio do jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

//Sons
let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
 imagemDaEstrada = loadImage("imagens/estrada.png");
 imagemDoAtor = loadImage("imagens/ator-1.png");
 imagemCarro1 = loadImage("imagens/carro-1.png");
 imagemCarro2 = loadImage("imagens/carro-2.png");
 imagemCarro3 = loadImage("imagens/carro-3.png");
 imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro2, imagemCarro3, imagemCarro1];

 somDaTrilha = loadSound("audioJogo/trilha.mp3");
 somDaColisao = loadSound("audioJogo/colidiu.mp3");
 somDoPonto = loadSound("audioJogo/pontos.wav");
}
