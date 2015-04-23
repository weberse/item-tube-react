var React = require('react');

var Media = React.createClass({

	getInitialState: function(){
        console.log(this.props.mediaModel);
        return {
            mediaType: this.props.mediaModel.mediaType,
            mediaId: this.props.mediaModel.mediaId
        };
    },

    componentWillReceiveProps: function(nextProps) {
        this.setState({
            mediaType: this.props.mediaModel.mediaType,
            mediaId: this.props.mediaModel.mediaId
        });
    },
    
	render: function () {
        var videoFrame = '';
        console.log(this.state);
        if(this.state.mediaId) {
            switch (this.mediaType) {
                case 'vimeo':
                    videoFrame = '<iframe id="player1" src="https://player.vimeo.com/video/' + this.state.mediaId + '?api=1&player_id=player1" width="630" height="354" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
                    break;
                case 'yt':
                    videoFrame = '<iframe id="ytplayer" type="text/html" width="720" height="405" src="https://www.youtube.com/embed/M7lc1UVf-VE?controls=0&enablejsapi=1&modestbranding=1&rel=0&showinfo=0&autohide=1&color=white&iv_load_policy=3" frameborder="0" allowfullscreen>';
                    break;
            }
        }

		return (
             <div dangerouslySetInnerHTML={{__html: videoFrame}} />
		)
	}
});

module.exports = Media;