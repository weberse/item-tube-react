var MediaAudioSC = require('./sc');

var MediaAudio = function(){
	this.sc = new MediaAudioSC();
};

MediaAudio.prototype.play = function () {
	this.sc.play();
};

MediaAudio.prototype.stop = function () {
	this.sc.stop();
};

MediaAudio.prototype.init = function () {	

};

module.exports = MediaAudio;