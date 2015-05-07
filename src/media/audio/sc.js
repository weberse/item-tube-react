
var MediaAudioSC = function(){
	var sound = false;
	var isPlay = false;
	var clientId = '5409ed67988608ebd6ab1ab4264243f8';

    this.setSound = function(s){
        sound = s;
        if(isPlay) {
        	sound.play();
        }
    };

    SC.initialize({
		client_id: clientId
	});

	this.play = function(){
		sound.play();
	}

	this.pause = function(){
		sound.pause();
	}

	this.init = function(media, play){
		isPlay = play;
		if(media.mediaId) {
			if(sound) {
				sound.stop();
			}
			SC.stream("/tracks/"+media.mediaId, this.setSound);
		}
	}

	this.resolve = function(url, callback) {
		SC.get('/resolve', { url: url }, function(track) {
			callback(track);
		});
	}
};

	
module.exports = MediaAudioSC;