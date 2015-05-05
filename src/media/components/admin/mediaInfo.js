var React = require('react');
var SCMediaInfoComponent = require('./info/sc');
var ImageMediaInfoComponent = require('./info/image');
var AdminActions = require('../../actions/AdminActions');

var MediaInfoComponent = React.createClass({

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

    onMediaSubmit: function(data) {
        AdminActions.addMedia(data);
    },
    
	render: function () {
        infoComponent = '';
        if (this.state.info.type == 'sc') {
            infoComponent = <SCMediaInfoComponent info={this.state.info.info} onMediaSubmit={this.onMediaSubmit}/>
        } else if (this.state.info.type == 'image') {
            infoComponent = <ImageMediaInfoComponent info={this.state.info.info} onMediaSubmit={this.onMediaSubmit}/>
        }
		return (
            <div>
            	{infoComponent}
            </div>
        )
	}
});

module.exports = MediaInfoComponent;