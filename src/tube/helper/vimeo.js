var TubeVimeoVideo = function(){
	var player;
};

TubeVimeoVideo.prototype.play = function () {
	this.player.api('play');
}

TubeVimeoVideo.prototype.stop = function () {
	this.player.api('pause');
}

TubeVimeoVideo.prototype.destroy = function () {
	this.player.removeEvent('ready');
	this.player.removeEvent('play');
}

TubeVimeoVideo.prototype.init = function (state) {

	var iframe = $('#player1')[0],
	    player = $f(iframe),
	    status = $('.status');

	// When the player is ready, add listeners for pause, finish, and playProgress
	this.player = player;
	player.addEvent('ready', function() {
	    player.addEvent('play', onPlay);
	    player.addEvent('pause', onPause);
	    player.addEvent('finish', onFinish);
	    player.addEvent('playProgress', onPlayProgress);
	});
	if(state && state == 'play'){
		player.api('play');
	}

	// Call the API when a button is pressed
	$('button').bind('click', function() {
	    player.api($(this).text().toLowerCase());
	});

	function onPlay(id) {

	}

	function onPause(id) {

	}

	function onFinish(id) {

	}

	function onPlayProgress(data, id) {

	}
};

module.exports = TubeVimeoVideo;