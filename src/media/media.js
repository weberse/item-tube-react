var React = require('react');

var Media = React.createClass({

	getInitialState: function(){
        return {
            image: this.props.image,
            audio: this.props.audio,
            video: this.props.video
        };
    },

    componentWillReceiveProps: function(props) {
        this.setState({
            image: props.image,
            audio: props.audio,
            video: props.video
        });
    },
    
	render: function () {
        var imageSrc = '';
        var videoFrame = '';
        if(this.state.video) {
            switch (this.state.video.mediaType) {
                case 'vimeo':
                    videoFrame = '<iframe id="player1" src="https://player.vimeo.com/video/' + this.state.mediaId + '?api=1&player_id=player1" width="630" height="354" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
                    break;
                case 'yt':
                    videoFrame = '<iframe id="ytplayer" type="text/html" width="720" height="405" src="https://www.youtube.com/v/' + this.state.video.mediaId + '?controls=0&enablejsapi=1&modestbranding=1&rel=0&showinfo=0&autohide=1&autoplay=1&disablekb=1&color=white&iv_load_policy=3" frameborder="0" allowfullscreen>';
                    videoFrame = '<div id="ytplayer"></div>'
                    break;
                default:
                    break;
            }
        }
        if(this.state.image) {
            imageSrc = this.state.image.mediaUrl;
        }
		return (
            <div>
                <div dangerouslySetInnerHTML={{__html: videoFrame}} />
            </div>
        )
                // <img src={imageSrc} />
	}
});

module.exports = Media;