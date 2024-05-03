// menu mobile

let botaoMenu = document.getElementById('botao-abrir')
let menu = document.getElementById('menu-mobile')
let overlayMenu = document.getElementById('overlay-menu')

botaoMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlayMenu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})


// rolagem suave botão

document.getElementById('botao-oferta').addEventListener('click', function() {
    document.getElementById('destaques').scrollIntoView({ behavior: 'smooth' });
  });
  

