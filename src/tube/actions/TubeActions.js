var AppDispatcher = require('../dispatcher/AppDispatcher');

var TubeActions = {

    changeState: function(action) {
        AppDispatcher.dispatch({
            actionType: 'change_state',
            state: action
        });
    },
    videoLoaded: function() {
        AppDispatcher.dispatch({
            actionType: 'video_loaded'
        });      
    }
};

module.exports = TubeActions;