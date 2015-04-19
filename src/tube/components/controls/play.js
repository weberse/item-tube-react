var states = {
    play: 'Stop',
    pending: 'Loading...',
    stop: 'Play'
};
var React = require('react');
var TubeActions = require('../../actions/TubeActions');

var Play = React.createClass({

    getInitialState: function(){

        return {
            playText: states[this.props.state]
        };
    },

    componentWillReceiveProps: function(nextProps) {
        this.setState({
            playText: states[nextProps.state]
        });
    },

	render: function() {
		return (
            <div>
			    <a
			    	onClick={this._onClickPlay}
			    >{this.state.playText}</a>
            </div>
		);
	},

	_onClickPlay: function(){
		TubeActions.changeState(this.props.state)
	},

    _onClickNextVideo: function(){
		TubeActions.nextVideo();
	}
});

module.exports = Play;