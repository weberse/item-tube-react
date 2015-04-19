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

TubeVideo.prototype.destroy = function (state) {	
	this.video = this.vimeo.destroy();
};

TubeVideo.prototype.init = function (state) {	
	this.video = this.vimeo.init(state);
};

module.exports = TubeVideo;