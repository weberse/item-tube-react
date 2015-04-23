


var TubeYTVideo = function(){
    var player;
};

TubeYTVideo.prototype.play = function () {
    this.player.playVideo();
};

TubeYTVideo.prototype.stop = function () {
    this.player.api('pause');
};

TubeYTVideo.prototype.init = function () {
    var player = document.getElementById("my-video");


    this.player = player;

};

module.exports = TubeYTVideo;