var TubeActions = require('../actions/TubeActions');
var TubeVimeoVideo = require('../helper/vimeo');
var TubeYTVideo = require('../../media/video/yt');


var TubeVideo = function(){
    this.type = '';

	this.vimeo = new TubeVimeoVideo();
	this.yt = new TubeYTVideo();
};

TubeVideo.prototype.play = function () {
	//this.vimeo.play();
	if(this.yt.player)
		this.yt.play();
	else
		this.init();
};

TubeVideo.prototype.stop = function () {
	//this.vimeo.stop();
};

TubeVideo.prototype.destroy = function (state) {	
	//this.video = this.vimeo.destroy();
};

TubeVideo.prototype.init = function (current) {
	//this.video = this.vimeo.init(state);
	this.yt.init(current);
};

module.exports = TubeVideo;