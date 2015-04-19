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
        var vimeoFrame = '';
        console.log(this.state);
        if(this.state.mediaId) {
            vimeoFrame = '<iframe id="player1" src="https://player.vimeo.com/video/' + this.state.mediaId + '?api=1&player_id=player1" width="630" height="354" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
        }

		return (
             <div dangerouslySetInnerHTML={{__html: vimeoFrame}} />
		)
	}
});

module.exports = Media;