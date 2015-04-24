

var TubeYTVideo = function(){
    var player;
};

TubeYTVideo.prototype.play = function () {
    this.player.playVideo();
};

TubeYTVideo.prototype.stop = function () {

};

TubeYTVideo.prototype.init = function (current) {
	player = new YT.Player('ytplayer', {
          playerVars: { 'autoplay': 1, 'controls': 1,'autohide':1,'wmode':'opaque' },
          videoId: 'JW5meKfy3fY',
          events: {
            'onReady': onPlayerReady}
    });

      // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
        event.target.mute();
    }
};

module.exports = TubeYTVideo;