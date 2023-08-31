import { artists } from "../Scripts/artists.js";
import { latestArtist } from "../Scripts/artists.js";
console.log(artists)


const artistContainer = document.querySelector('.artist-container');

const releaseTmp = (artists) => 
`<div class="artist">
<a href="${artists.link}" target="_blank"><img src="${artists.logo}" width="500px" alt=""></a>
<p class="artist-name">${artists.artist}</p>
</div>`

if (artistContainer) {
    artists.forEach( (artists) => {
        artistContainer.innerHTML += releaseTmp(artists);
    })
}
