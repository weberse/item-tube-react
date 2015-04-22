var MediaAudioSC = require('./sc');

var MediaAudio = function(){
	this.sc = new MediaAudioSC();
};

MediaAudio.prototype.play = function () {
	this.sc.play();
};

MediaAudio.prototype.stop = function () {
	this.sc.pause();
};

MediaAudio.prototype.init = function (media, state) {	
	this.sc.init(media, state == 'play');
};

module.exports = MediaAudio;