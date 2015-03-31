var states = {
    play: 'Play',
    pending: 'Loading...',
    stop: 'Stop'
};

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
			    <a>{this.state.playText}</a>
            </div>
		);
	}
});