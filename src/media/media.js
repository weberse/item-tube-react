var React = require('react');

var Media = React.createClass({

	getInitialState: function(){
        return {
            mediaType: this.props.video.mediaType,
            mediaId: this.props.video.mediaId
        };
    },

    componentWillReceiveProps: function(props) {
        this.setState({
            mediaType: props.video.mediaType,
            mediaId: props.video.mediaId
        });
    },
    
	render: function () {
        var videoFrame = '';
        if(this.state.mediaId) {
            switch (this.state.mediaType) {
                case 'vimeo':
                    videoFrame = '<iframe id="player1" src="https://player.vimeo.com/video/' + this.state.mediaId + '?api=1&player_id=player1" width="630" height="354" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
                    break;
                case 'yt':
                    videoFrame = '<iframe id="ytplayer" type="text/html" width="720" height="405" src="https://www.youtube.com/v/' + this.state.mediaId + '?controls=0&enablejsapi=1&modestbranding=1&rel=0&showinfo=0&autohide=1&color=white&iv_load_policy=3" frameborder="0" allowfullscreen>';
                    videoFrame = '<embed id="my-video" style="position: absolute; top: 0; left: 0;" width="10%" height="10%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen allowfullscreen="true" allowscriptaccess="always" quality="high" bgcolor="#000000" name="my-video" style="" src="http://www.youtube.com/v/' + this.state.mediaId + '?controls=0&enablejsapi=1&modestbranding=1&rel=0&showinfo=0&autohide=1&color=white&iv_load_policy=3" type="application/x-shockwave-flash">';
                    break;
                default:
                    break;
            }
        }

		return (
             <div dangerouslySetInnerHTML={{__html: videoFrame}} />
		)
	}
});

module.exports = Media;