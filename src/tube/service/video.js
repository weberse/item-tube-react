var TubeActions = require('../actions/TubeActions');
var TubeVimeoVideo = require('../helper/vimeo');


var TubeVideo = function(){
	this.vimeo = new TubeVimeoVideo();
};

TubeVideo.prototype.play = function () {
	this.vimeo.play();
};

TubeVideo.prototype.stop = function () {
	this.vimeo.stop();
};

TubeVideo.prototype.init = function () {	
	this.video = this.vimeo.init();
};

module.exports = TubeVideo;