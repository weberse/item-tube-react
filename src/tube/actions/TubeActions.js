var AppDispatcher = require('../dispatcher/AppDispatcher');

var TubeActions = {

    changeState: function(action) {
        AppDispatcher.dispatch({
            actionType: 'change_state',
            state: action
        });
    },
    mediaLoaded: function() {
        AppDispatcher.dispatch({
            actionType: 'media_loaded'
        });      
    },
    nextAudio: function() {
        AppDispatcher.dispatch({
            actionType: 'next_audio'
        });      
    },
    nextVideo: function() {
        AppDispatcher.dispatch({
            actionType: 'next_video'
        });      
    },
    nextVideo: function() {
        AppDispatcher.dispatch({
            actionType: 'video_next'
        });
    }
};

module.exports = TubeActions;