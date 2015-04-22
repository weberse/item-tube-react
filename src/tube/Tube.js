var Title = require('./components/title/title');
var Play = require('./components/controls/play');
// var TubeVideo = require('./service/video');
var React = require('react');
var TubeStore = require('./store/TubeStore');
var Media = require('../media/media');
var player;


TubeStore.getAll();

function getTubeState() {
  return {
    state: TubeStore.getState(),
    currentBckg: TubeStore.getCurrentBckg(),
    currentAudio: TubeStore.getCurrentAudio()
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

	render: function() {
    	return (
    		<div>
    			<Title />
			    <Play state={this.state.state} />
          <Media video={this.state.currentBckg} audio={this.state.currentAudio} />
        </div>
      );
	},

  _onChange: function(){
    this.setState(getTubeState());
  }
});

module.exports = Tube;