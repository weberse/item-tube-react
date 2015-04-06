var React = require('react');

var Media = React.createClass({

	getInitialState: function(){
		console.log(this.props.mediaModel);
        return {
            mediaType: this.props.mediaModel.type,
            mediaId: this.props.mediaModel.id
        };
    },

    componentWillReceiveProps: function(nextProps) {
        this.setState({
            mediaType: this.props.mediaModel.type,
            mediaId: this.props.mediaModel.id
        });
    },
    
	render: function () {
		return (
			<div>
			  <iframe id="player1" src="https://player.vimeo.com/video/76979871?api=1&player_id=player1" width="630" height="354" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
			</div>
		)
	}
});

module.exports = Media;