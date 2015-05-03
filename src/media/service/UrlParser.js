var AdminActions = require('../actions/AdminActions');
var MediaAudioSC = require('../audio/sc');

var sc = new MediaAudioSC();

var UrlParser = {

	parse: function(url){
		if( url.indexOf("soundcloud.com") > -1 ) {
			sc.resolve(url, this.showSCMediaInfo);
		} else {
			return false;
		}
	},

	showSCMediaInfo: function(info) {
		if (info.errors) {
			this.urlError();
			return;
		}
		AdminActions.mediaInfo({type:'sc', info:info});

	},

	urlError: function() {
		AdminActions.urlError()
	}
}

module.exports = UrlParser;