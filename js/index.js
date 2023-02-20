

/* async, await,  fetch, innerHTML  .json()*/


const botaoDado = document.querySelector('.circulo');
const conselho = document.querySelector('.conselho');
const numerodoconselho = document.querySelector('.numerodadica');

botaoDado.addEventListener('click', async ()=>{

     const resposta = await fetch('https://api.adviceslip.com/advice');
     const conteudo = await resposta.json();
     const idconselho = 'A D V I C E #: ' + conteudo.slip.id;
     const conselhoconteudo = conteudo.slip.advice;
       
     conselho.innerHTML = conselhoconteudo;
     numerodoconselho.innerHTML = idconselho;
})



