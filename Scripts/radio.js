export let ssRadio =
[    
    {
        "id" : "1",
        "title" : "Sanctuary Sessions",
        "guestmix" : "Zodiac X",
        "image" : "../Assets/Artwork/Sanctuary-Sessions/SS-Zodiacx-Guestmix.avif",
        "link" : "https://soundcloud.com/sanctuary-rcrds/dim-radio-1-zodiac-x-guestmix",
        "color" : "#3067bc",
        "colorHeader" : "#3067bc75"
    },
    {
        "id" : "2",
        "title" : "Sanctuary Sessions",
        "guestmix" : "M1CK3Y",
        "image" : "../Assets/Artwork/Sanctuary-Sessions/SS-M1CK3Y-Guestmix.avif",
        "link" : "https://soundcloud.com/sanctuary-rcrds/dim-radio-2-m1ck3y-guestmix",
        "color" : "#dc3e1b",
        "colorHeader" : "#dc3e1b75"
    },
    {
        "id" : "3",
        "title" : "Sanctuary Sessions",
        "guestmix" : "Kineto",
        "image" : "../Assets/Artwork/Sanctuary-Sessions/SS-Kineto-Guestmix.avif",
        "link" : "https://soundcloud.com/sanctuary-rcrds/dim-radio-3-kinteo-guestmix",
        "color" : "#099e39",
        "colorHeader" : "#099e3975"
    },
    {
        "id" : "4",
        "title" : "Sanctuary Sessions",
        "guestmix" : "BBX",
        "image" : "../Assets/Artwork/Sanctuary-Sessions/SS-BBX-Guestmix.avif",
        "link" : "https://soundcloud.com/sanctuary-rcrds/sanctuary-sessions-4-bbx-guestmix",
        "color" : "#8836e9",
        "colorHeader" : "#8836e975"
    }
]

export const latest = ssRadio.slice(-1);

const reversed_ssRadio = ssRadio.reverse();
console.log(reversed_ssRadio)