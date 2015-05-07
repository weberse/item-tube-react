var React = require('react');
var MediaStore = require('./mediaStore');
var UrlComponent = require('./components/admin/url');
var MediaInfoComponent = require('./components/admin/mediaInfo');

function getAdminState() {
  return {
    state: '',
    mediaInfo: MediaStore.getMediaInfo()
  };
}


var MediaAdmin = React.createClass({

  getInitialState: function() {
    return {
        state: '',
        mediaInfo: {}
    };
  },

  componentDidMount: function() {
    MediaStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    MediaStore.removeChangeListener(this._onChange);
  },
    
	render: function () {
		return (
            <div>
                <UrlComponent />
                <MediaInfoComponent info={this.state.mediaInfo} />
            </div>
        )
	},

  _onChange: function(){
    this.setState(getAdminState());
  }
});

module.exports = MediaAdmin;