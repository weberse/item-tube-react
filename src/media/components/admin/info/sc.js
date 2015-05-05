var React = require('react');
// var AdminActions = require('../../actions/AdminActions');

var SCMediaInfoComponent = React.createClass({

	getInitialState: function(){
        return {
        	info: this.props.info
        };
    },

    componentWillReceiveProps: function(props) {
        this.setState({
            info: props.info
        });
    },
    handleSubmit: function(e) {
        e.preventDefault();
        data = {
            type: 'audio',
            mediaType: 'sc',
            active: 1,
            title: this.state.info.title,
            sourceId: this.state.info.id
        };
        this.props.onMediaSubmit(data);
    },
	render: function () {
		return (
            <p>
            	{this.state.info.title} 
                <button onClick={this.handleSubmit}>Add</button>
            </p>
        )
	}
});

module.exports = SCMediaInfoComponent;