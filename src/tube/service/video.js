var TubeActions = require('../actions/TubeActions');
var TubeVimeoVideo = require('../helper/vimeo');





var TubeVideo = function(){

	this.vimeo = new TubeVimeoVideo();
};

TubeVideo.prototype.play = function () {
		console.log('vimoo stop action mot implemented');
	this.video.api('play');
	
};

TubeVideo.prototype.stop = function () {
		console.log('vimoo stop action mot implemented');

	this.video.api('pause');
};

TubeVideo.prototype.init = function () {
		
	this.video = this.vimeo.init();
};

module.exports = TubeVideo;