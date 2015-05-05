var React = require('react');

var ImageMediaInfoComponent = React.createClass({

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
            type: 'image',
            mediaType: 'img',
            active: 1,
            sourceId: this.state.info
        };
        this.props.onMediaSubmit(data);
    },
	render: function () {
		console.log(this.state.info);
		return (
            <p>
            	<img width='50' height='50' src={this.state.info} /> 
                <button onClick={this.handleSubmit}>Add</button>
            </p>
        )
	}
});

module.exports = ImageMediaInfoComponent;