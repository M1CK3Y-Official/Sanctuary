import { releases } from "../Scripts/releases.js";
import { latest } from "../Scripts/releases.js";
import { dimLegacy } from "../Scripts/releases.js";
import { dimLatest } from "../Scripts/releases.js";
console.log(releases)


const releaseContainer = document.querySelector('.release-container');

const releaseTmp = (releases) => 
`<div class="release" style="background:${releases.colorHeader}">
<a href="${releases.link}" target="_blank"><img src="${releases.image}" alt=""></a>
<p class="release-title" style="color:${releases.color}">${releases.title}</p>
<p class="release-artist">${releases.artist}</p>
</div>`

if (releaseContainer) {
    releases.forEach( (releases) => {
        releaseContainer.innerHTML += releaseTmp(releases);
    })
}

const dimLegacyReleaseContainer = document.querySelector('.dimLegacy-release-container');

const dimLegacyReleaseTmp = (dimLegacy) => 
`<div class="release" style="background:${dimLegacy.colorHeader}">
<a href="${dimLegacy.link}" target="_blank"><img src="${dimLegacy.image}" alt=""></a>
<p class="release-title" style="color:${dimLegacy.color}">${dimLegacy.title}</p>
<p class="release-artist">${dimLegacy.artist}</p>
</div>`

if (dimLegacyReleaseContainer) {
    dimLegacy.forEach( (dimLegacy) => {
        dimLegacyReleaseContainer.innerHTML += dimLegacyReleaseTmp(dimLegacy);
    })
}




 