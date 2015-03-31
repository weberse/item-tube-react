var states = {
    play: 'Play',
    pending: 'Loading...',
    stop: 'Stop'
};
var React = require('react');
var TubeActions = require('../actions/TubeActions');

var Play = React.createClass({

    getInitialState: function(){

        return {
            playText: states[this.props.data.state]
        };
    },

    componentWillReceiveProps: function(nextProps) {
        this.setState({
            playText: states[nextProps.data.state]
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
		TubeActions.play()
	}
});

module.exports = Play;