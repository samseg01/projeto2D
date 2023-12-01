const element = document.querySelector('body');
const ponteiro = document.getElementById('ponteiro');

element.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;
  //console.log(`A posição atual do cursor do mouse é: (${x}, ${y})`);
  ponteiro.style.top = y+'px';
  ponteiro.style.left = x+'px';
});

const person = document.getElementById('personagem');
let posicion = 50;

document.addEventListener('keydown', function(e){
    var code = e.which;
    console.log(code);
    // 37 - esquerda
    // 39 - direita
    // 38 - cima
    // 40 - baixo

    if(code==37){
        let esquerda = posicion--;
        person.style.left = esquerda+"%";
    }else if(code == 39){
        let direita = posicion++;
        person.style.left = direita+"%";
    }

})