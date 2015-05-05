var AppDispatcher = require('../../tube/dispatcher/AppDispatcher');

var AdminActions = {

    parseUrl: function(url) {
        AppDispatcher.dispatch({
            actionType: 'parse_url',
            url: url
        });      
    },
    urlError: function() {
        AppDispatcher.dispatch({
            actionType: 'error_url'
        });      
    },
    mediaInfo: function(info) {
    	AppDispatcher.dispatch({
            actionType: 'media_info',
            info: info
        });	
    },
    addMedia: function(data) {
        AppDispatcher.dispatch({
            actionType: 'add_media',
            data: data
        }); 
    },
    mediaAdded: function() {
        console.log('media added');
    }
};

module.exports = AdminActions;