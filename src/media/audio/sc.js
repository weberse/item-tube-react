
var MediaAudioSC = function(){
	var sound = false;

	this.getSound = function(){
        return sound;
    };
   
    this.setSound = function(s){
        sound = s;
    };

    SC.initialize({
		client_id: '5409ed67988608ebd6ab1ab4264243f8'
	});

	SC.stream("/tracks/293", this.setSound);

	this.play = function(){
		sound.play();
	}

	this.stop = function(){
		sound.stop();
	}
};



MediaAudioSC.prototype.play = function () {
	console.log(this.sound);
	if (this.getSound()) {
		console.log('play audio');
		this.sound.play();
	}
};

MediaAudioSC.prototype.stop = function () {
	if (this.getSound()) {
	console.log('stop audio');
		this.sound.stop();
	}
};

	
module.exports = MediaAudioSC;