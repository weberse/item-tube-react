var React = require('react');
var MediaStore = require('./mediaStore');
var UrlComponent = require('./components/admin/url');
var MediaInfoComponent = require('./components/admin/mediaInfo');

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
                <MediaInfoComponent />
            </div>
        )
	}
});

module.exports = MediaAdmin;