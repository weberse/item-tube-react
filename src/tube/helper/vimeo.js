var TubeVideo = require('../service/video');




var TubeVimeoVideo = function(){

};


TubeVimeoVideo.prototype.init = function () {
		
			console.log('vimeo init');
			var iframe = $('#player1')[0],
			    player = $f(iframe),
			    status = $('.status');

			// When the player is ready, add listeners for pause, finish, and playProgress
			player.addEvent('ready', function() {
			    console.log('ready');
			    
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
			    console.log('play');
			    // TubeVideo.changeState('play');
			}

			function onPause(id) {
			    console.log('paused');
			    // TubeVideo.changeState('stop');
			}

			function onFinish(id) {
			    console.log('finished');
			}

			function onPlayProgress(data, id) {
			    // console.log(data.seconds + 's played');
			}
			return player;
		// });
};

module.exports = TubeVimeoVideo;