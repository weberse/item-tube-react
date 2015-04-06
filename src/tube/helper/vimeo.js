var TubeVideo = require('../service/video');


var TubeVimeoVideo = function(){

	function updateFrameElement(id) {
		
	}

};

TubeVimeoVideo.prototype.init = function () {

	var iframe = $('#player1')[0],
	    player = $f(iframe),
	    status = $('.status');

	// When the player is ready, add listeners for pause, finish, and playProgress
	player.addEvent('ready', function() {
	    
	    player.addEvent('play', onPlay);
	    player.addEvent('pause', onPause);
	    player.addEvent('finish', onFinish);
	    player.addEvent('playProgress', onPlayProgress);
	});

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
	return player;
};

module.exports = TubeVimeoVideo;