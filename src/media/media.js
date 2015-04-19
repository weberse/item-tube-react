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
        var vimeoFrame = '';
        if(this.state.mediaId) {
            vimeoFrame = '<iframe id="player1" src="https://player.vimeo.com/video/' + this.state.mediaId + '?api=1&player_id=player1" width="630" height="354" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
        }

		return (
             <div dangerouslySetInnerHTML={{__html: vimeoFrame}} />
		)
	}
});

module.exports = Media;