var React = require('react');
// var AdminActions = require('../../actions/AdminActions');

var SCMediaInfoComponent = React.createClass({

	getInitialState: function(){
        return {
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
            	{this.state.info}
            </div>
        )
	}
});

module.exports = SCMediaInfoComponent;