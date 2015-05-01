var React = require('react');
var AdminActions = require('../../actions/AdminActions');

var UrlComponent = React.createClass({

	getInitialState: function(){
        return {
        };
    },

    componentWillReceiveProps: function(props) {
        this.setState({
        });
    },
    
	render: function () {
		return (
            <div>
            	<input
                    type='text'
                    placeholder='media url' 
                    ref='mediaUrl'
                    onBlur={this._handleBlur}
                />
            </div>
        )
	},
    _handleBlur: function () {
        var mediaUrlValue = this.refs.mediaUrl.getDOMNode().value;
        if (mediaUrlValue) {
            AdminActions.parseUrl(mediaUrlValue);
        }
    }
});

module.exports = UrlComponent;