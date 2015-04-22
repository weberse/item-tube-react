var React = require('react');

var Media = React.createClass({

	getInitialState: function(){
        return {
            bckg: this.props.video,
            audio: this.props.audio
        };
    },

    componentWillReceiveProps: function(props) {
        this.setState({
            bckg: this.props.video,
            audio: this.props.audio
        });
    },
    
	render: function () {
        var vimeoFrame = '';
        if(this.state.video) {
            vimeoFrame = '<iframe id="player1" src="https://player.vimeo.com/video/' + this.state.mediaId + '?api=1&player_id=player1" width="630" height="354" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
        }

		return (
             <div dangerouslySetInnerHTML={{__html: vimeoFrame}} />
		)
	}
});

module.exports = Media;