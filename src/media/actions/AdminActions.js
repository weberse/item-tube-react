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
    }
};

module.exports = AdminActions;