var Title = require('./components/title/title');
var Play = require('./components/play');
var React = require('react');

var Tube = React.createClass( {

    getInitialState: function() {
        return {data: {
            state: 'pending'
        }};
    },

    componentDidMount: function() {
        this.setState({data: {
            state: 'stop'
        }});
    },

  	render: function() {
      	return (
      		<div>
      			<p>Tube</p>
      			<Title />
      			<Play data={this.state.data} />
      		</div>
      	);
  	}
});

module.exports = Tube;