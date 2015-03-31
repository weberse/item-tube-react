var Title = require('./components/title/title');
var Play = require('./components/play');
var React = require('react');
var TubeStore = require('./store/TubeStore');

function getTubeState() {
  return {
    state: TubeStore.getState(),
    current: TubeStore.getCurrent()
  };
}


var Tube = React.createClass( {

  getInitialState: function() {
    return getTubeState();
  },

  componentDidMount: function() {
    TubeStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    TubeStore.removeChangeListener(this._onChange);
  },

    // getInitialState: function() {
    //     return {data: {
    //         state: 'pending'
    //     }};
    // },

    // componentDidMount: function() {
    //     this.setState({data: {
    //         state: 'stop'
    //     }});
    // },

  	render: function() {
      	return (
      		<div>
      			<p>Tube</p>
      			<Title />
      			<Play state={this.state.state} />
      		</div>
      	);
  	},

    _onChange: function(){
      this.setState(getTubeState());
    }
});

module.exports = Tube;