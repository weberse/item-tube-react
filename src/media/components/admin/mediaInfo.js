var React = require('react');
var SCMediaInfoComponent = require('./info/sc');

var MediaInfoComponent = React.createClass({

	getInitialState: function(){
        return {
        	type: '',
        	info: {}
        };
    },

    componentWillReceiveProps: function(props) {
        this.setState({
        });
    },
    
	render: function () {
		return (
            <div>
            	<SCMediaInfoComponent info={this.state.info} />
            </div>
        )
	}
});

module.exports = MediaInfoComponent;