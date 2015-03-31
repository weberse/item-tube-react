var AppDispatcher = require('../dispatcher/AppDispatcher');

var TubeActions = {

  play: function(action) {
  	AppDispatcher.dispatch({
      actionType: 'play',
      state: action
    });
  },
};

module.exports = TubeActions;