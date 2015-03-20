var Player = React.createClass({
    getInitialState: function() {
        return {
            state: 'stop'
        };
    },
    handlePlayerState: function(state) {
        state = state == 'play' ? 'pause' : 'play';
        this.setState({
            state: state
        });
    },
    render: function() {
        return (
            <PlayButton 
                state={this.state.state}
                onPlayerState={this.handlePlayerState}
            />
        );
    }
});

var PlayButton = React.createClass({
    playBtnClick: function() {
        this.props.onPlayerState(this.props.state);
    },
    render: function() {
        return <a
                 onClick = {this.playBtnClick}   
                >{this.props.state}</a>;   
    }
});

React.render(<Player state="stop" />, document.getElementById('tube-player'));
