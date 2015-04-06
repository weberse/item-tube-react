var AppDispatcher = require('../dispatcher/AppDispatcher');

var TubeActions = {

    changeState: function(action) {
        AppDispatcher.dispatch({
            actionType: action,
            state: action
        });
    },

    nextVideo: function() {
        AppDispatcher.dispatch({
            actionType: 'stop',
            state: 'play'
        });
    }
};

module.exports = TubeActions;