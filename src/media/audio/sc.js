
var MediaAudioSC = function(){
	var sound = false;
	var isPlay = false;

    this.setSound = function(s){
        sound = s;
        if(isPlay) {
        	sound.play();
        }
    };

    SC.initialize({
		client_id: '5409ed67988608ebd6ab1ab4264243f8'
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
};

	
module.exports = MediaAudioSC;