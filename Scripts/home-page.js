import { releases } from "../Scripts/releases.js";
import { latest } from "../Scripts/releases.js";
console.log(releases)


const releaseText = document.querySelector('.text');
const artworkContainer = document.querySelector('.artwork-container')
const mainContainer = document.querySelector('.main');
const nav = document.querySelector('.navbar');
const streamBtn = document.querySelector('.streamnow');


mainContainer.style.backgroundImage = `url('${latest[0].background}')`;
nav.style.background = `${latest[0].colorHeader}`;

const artworkContainerTmp = (releases) => 
`<img src="${latest[0].image}" width="100%" class="release-artwork" alt="">`

const releaseTmp = (releases) => 
`<div class="text"><h1 class="heading" style="color:${latest[0].color}">Sanctuary</h1>
<p class="release">${latest[0].title} by ${latest[0].artist} is out now!</p>
<a href="${latest[0].link}" target="_blank"><button class="streamnow" style="background:${latest[0].color}">Stream Now <i class="fa-solid fa-up-right-from-square fa-bounce"></i></button></a>`




if (releaseText) {
    releaseText.innerHTML = releaseTmp(releases);
}

if(artworkContainer) {
    artworkContainer.innerHTML = artworkContainerTmp(releases);
}



