var AppDispatcher = require('../../tube/dispatcher/AppDispatcher');

var AdminActions = {

    parseUrl: function(url) {
        AppDispatcher.dispatch({
            actionType: 'parse_url',
            url: url
        });      
    }
};

module.exports = AdminActions;