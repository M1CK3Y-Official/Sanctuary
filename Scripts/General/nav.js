import { latest } from "../releases.js";
import { releases } from "../releases.js";

const navbar = document.querySelector('.navbar');


const navTmp = 
`
<div class="logo-container">
<a href="/"><img src="../Assets/Logos/Sanctuary_Logo_White.svg" width="100%" alt="Sanctuary Logo" class="logo"></a>
<p class="logo-text">Sanctuary</p>
</div>

<ul class="nav-menu">
<li class="nav-item"><a href="../index.html" class="nav-link">Home</a></li>
<li class="nav-item"><a href="../Pages/releases.html" class="nav-link">Releases</a></li>
<li class="nav-item"><a href="../Pages/sanctuary-sessions.html" class="nav-link">Sanctuary Sessions</a></li>
<li class="nav-item"><a href="../Pages/artists.html" class="nav-link">Artists</a></li>
<li class="nav-item"><a href="../Pages/send-demos.html" class="nav-link">Send Demos</a></li>
<li class="nav-item"><a href="../Pages/contact.html" class="nav-link">Contact</a></li>
</ul>`

if (navbar) {
    navbar.innerHTML = navTmp;
}


const navItems = document.querySelectorAll('.nav-item a');

    const url = new URL(location.href);


    navItems.forEach( (navItem) => {

        let navItemUrl = new URL(navItem.href)


        if(navItemUrl.pathname === url.pathname) {

            navItem.parentNode.classList.add('active')
            const active = document.querySelector('.active');
            
            active.style.background = `${latest[0].colorHeader}`;

        }

    })

export default nav;
