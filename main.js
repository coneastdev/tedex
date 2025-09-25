function genVid() {
    // select random vid from list
    vid = Math.round(Math.random() * tedTalks.length);

    // load video
    videojs.getPlayer("my-video").poster(tedTalks[vid][0]);
    videojs.getPlayer("my-video").src({type: 'video/mp4', src: tedTalks[vid][1]});
    document.getElementById("title").innerText = tedTalks[vid][1].slice(30)
}

// randomly generates video so you don't get the placeholder vid every time
window.onload = function(){
    videojs.getPlayer("my-video").ready(function(){
        setTimeout(() => {
            genVid()
        }, 100);
    });
};