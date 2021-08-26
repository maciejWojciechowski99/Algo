import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log("realizacja Maciej Wojciechowski https://maciejwojciechowski99.github.io");

const hamburgerMenu = document.querySelector('.hamburgerMenuButton');

hamburgerMenu.addEventListener('click', ()=>{
    const nav = document.querySelector('.nav');
    nav.classList.toggle('nav--open');
})
