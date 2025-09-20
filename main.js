function genVid() {
    //videojs.getPlayer("my-video").src({ type: 'video/mp4', src: "http://download.ted.com/talks/YossiVardi_2007-light.mp4" });
    vid = Math.round(Math.random() * tedTalks.length);
    videojs.getPlayer("my-video").poster(tedTalks[vid][0]);
    videojs.getPlayer("my-video").src({type: 'video/mp4', src: tedTalks[vid][1]});
}

window.onload = function(){
    videojs.getPlayer("my-video").ready(function(){
        var myPlayer = this;
        genVid()
        // un comment for auto play
        //myPlayer.play();
    });
};