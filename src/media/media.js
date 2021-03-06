var React = require('react');

var Media = React.createClass({

	getInitialState: function(){
        return {
            image: this.props.image,
            audio: this.props.audio,
            video: false
        };
    },

    componentWillReceiveProps: function(props) {
        this.setState({
            image: props.image,
            audio: props.audio,
            video: false
        });
    },
    
	render: function () {
        var vimeoFrame = '';
        var imageSrc = '';
        if(this.state.video) {
            vimeoFrame = '<iframe id="player1" src="https://player.vimeo.com/video/' + this.state.mediaId + '?api=1&player_id=player1" width="630" height="354" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
        }
        if(this.state.image) {
            imageSrc = this.state.image.mediaUrl;
        }
		return (
            <div>
                <div dangerouslySetInnerHTML={{__html: vimeoFrame}} />
                <div id='bg'><img src={imageSrc} /></div>
            </div>
        )
	}
});

module.exports = Media;