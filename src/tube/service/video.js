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
	this.yt.play();
};

TubeVideo.prototype.stop = function () {
	//this.vimeo.stop();
};

TubeVideo.prototype.destroy = function (state) {	
	//this.video = this.vimeo.destroy();
};

TubeVideo.prototype.init = function (state) {
	//this.video = this.vimeo.init(state);
	this.yt.init(state);
};

module.exports = TubeVideo;