var React = require('react');
var MediaStore = require('./mediaStore');
var UrlComponent = require('./components/admin/url');

var MediaAdmin = React.createClass({

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
                <UrlComponent />
            </div>
        )
	}
});

module.exports = MediaAdmin;