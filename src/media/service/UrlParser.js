var AdminActions = require('../actions/AdminActions');
var MediaAudioSC = require('../audio/sc');

var sc = new MediaAudioSC();

var UrlParser = {

	parse: function(url){
		if( url.indexOf("soundcloud.com") > -1 ) {
			sc.resolve(url, this.showSCMediaInfo);
		} else {
			if (this.checkImage(url)){
				console.log('valid image');
				this.showImageMediaInfo(url)
			} else {
				console.log('url error');
				return false;
			}
		}
		return true;
	},

	showSCMediaInfo: function(info) {
		if (info.errors) {
			this.urlError();
			return;
		}
		AdminActions.mediaInfo({type:'sc', info:info});
	},

	showImageMediaInfo: function(info) {
		setTimeout(function(){		
			AdminActions.mediaInfo({type:'image', info:info});
		}, 500);
	},

	checkImage: function(url) {
		try {
			var img = document.createElement("img");
			img.src = url;
		} catch(err) {

		}
		if(img.height > 0) {
			return true;
		} else {
			return false;
		}
	},

	urlError: function() {
		AdminActions.urlError()
	}
}

module.exports = UrlParser;