import { ssRadio } from "../Scripts/radio.js";
import { latest } from "../Scripts/radio.js";
console.log(ssRadio)


const radioContainer = document.querySelector('.radio-container');

const releaseTmp = (ssRadio) => 
`<div class="release" style="background:${ssRadio.colorHeader}">
<a href="${ssRadio.link}" target="_blank"><img src="${ssRadio.image}" alt=""></a>
<p class="release-title" style="color:${ssRadio.color}">${ssRadio.title} #${ssRadio.id}</p>
<p class="release-artist">${ssRadio.guestmix} Guestmix</p>
</div>`

if (radioContainer) {
    ssRadio.forEach( (ssRadio) => {
        radioContainer.innerHTML += releaseTmp(ssRadio);
    })
}
