//Código dos carros

let xCarros = [400, 400, 400, 400, 400, 400];
let yCarros = [45, 102, 153, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.2, 2, 3.7, 4.4];
let comprimentoCarro = 50;
let alturaCarro = 30;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}
  
function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
   if (passouTodaATela(xCarros[i])){
     xCarros[i] = 600;
   }
 } 
}

function passouTodaATela(xCarros){
 return xCarros < -50;
}
