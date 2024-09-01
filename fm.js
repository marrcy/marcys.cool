const lastfm_username = "danielsbadtaste"
const lastfm_apikey = "cb1555188592fdd74931d79378590be3"
/* Playing */
let playing = document.getElementById("playing");

function fetchtrack(){
    fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${lastfm_username}&api_key=${lastfm_apikey}&format=json`).then(response => response.json()).then(e => {
    if(e["recenttracks"]){

          let track = e.recenttracks.track[0].name;
          let artist = e.recenttracks.track[0].artist["#text"];
          playing.innerText = track.concat(" - ", artist, " · ")

    }
})
}

fetchtrack()
setInterval(fetchtrack, 4000);
