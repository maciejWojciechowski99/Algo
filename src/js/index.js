import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const hamburgerMenu = document.querySelector('.hamburgerMenuButton');

hamburgerMenu.addEventListener('click', ()=>{
    const nav = document.querySelector('.nav');
    nav.classList.toggle('nav--open');
})

/* 
const nav = document.querySelector(".nav");

let size = 180;
let grow = true;

window.addEventListener('scroll', ()=>{
    
    if(size >= window.innerHeight / 7){
        grow=false;
    }else if( size <= 0){
        grow=true;
    }
    
    if(grow){
        nav.style.height = size + "px";
        size += 2;
        if(size===60){
            nav.style.height = 60 + "px";
        }
    }else{
        nav.style.height = size + "px";
        size -= 2;
    }
})

const slideList = [{
    img: "1.jpg",
    header: 'Agnieszka Kozłowska – metodyk WSB',
    text: 'Zajęcia prowadzone przez Alicję to majstersztyk. Ledwo pozbierałam się z         zadziwienia już na pierwszych, gdy okazało się, że mamy przygotowany plan na cały rok, dodatkowo podpisujemy kontrakt i uzgadniamy cele. Marzenie metodyka!  Każda kolejna lekcja pokazywała, jak perfekcyjnie Alicja jest przygotowana. W zasadzie nic nie mogło jej zaskoczyć: czy była nas cała grupa, czy jedno lub dwoje, zawsze był plan na lekcję. I to taki, że ćwiczenie goniło ćwiczenie i nawet człowiek nawet nie orientował się, że minęła godzina. Zajęcia miały kapitalną strukturę, były jak tort przekładany raz nutellą, raz konfiturą z malin. Na początek był zawsze small talk, na koniec zawsze lista słówek. I znów słowo od metodyka: Alicja zarządzała powtórkami w taki sposób, że nie było możliwości, żeby się nie nauczyć. Tworzyła na zajęciach przesympatyczną atmosferę i jednocześnie goniła do roboty.Alicja w mistrzowski sposób opanowała prowadzenie zajęć online. Traktuje narzędzia online jak narzędzia pracy, a nie jak "urozmaicenie" zajęć. To prawdziwa profesjonalistka z ogromną pasją. Czasem myślę, czy aby na pewno jest prawdziwa...'
},
{
    img: "2.jpg",
    header: 'MARO',
    text: ' Pani Alicja Szczepańska jest wykwalifikowaną, doświadczoną i lubianą przez naszych słuchaczy lektorką. Od lat współpracuje z naszą szkołą ucząc języka angielskiego ogólnego, jak i biznesowego osoby na różnych poziomach zaawansowania. Jej zajęcia są zawsze ciekawe i merytoryczne.'
},
{
    img:"3.png",
    header: 'Marta',
    text: 'Alicja jest najlepszym nauczycielem języka z jakim miałam do czynienia, zawsze rzetelnie przygotowana do zajęć, z kreatywnym podejściem. Zaraża entuzjazmem, naukę języka angielskiego zamienia w czystą przyjemność. Dzięki Alicji widzę wyraźny postęp w posługiwaniu się angielskim i jestem bardzo zmotywowana do dalszej nauki. Nauczyciel z pasją i ogromem wiedzy. Polecam bardzo, bardzo. :)'
}];

const buttonLeft = document.querySelector('.opinionsLeft--js');
const buttonRight = document.querySelector('.opinionsRight--js');

const image = document.querySelector('.opinions__item--container--photo');
const header = document.querySelector('.opinions__item--container--header');
const paragraph= document.querySelector('.opinions__item--container--paragraph'); 


let active = 0;

buttonLeft.addEventListener('click', ()=>{
    active--;
    if(active===-1){
        active=slideList.length;
    }
    image.src = slideList[active].img;
    header.textContent=slideList[active].header;
    paragraph.textContent=slideList[active].text;

});

buttonRight.addEventListener('click', ()=>{
    active++;
    if(active===slideList.length){
        active=0;
    }
    image.src = slideList[active].img;
    header.textContent=slideList[active].header;
    paragraph.textContent=slideList[active].text;

});
*/