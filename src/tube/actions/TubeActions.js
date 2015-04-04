var AppDispatcher = require('../dispatcher/AppDispatcher');

var TubeActions = {

  changeState: function(action) {
  	AppDispatcher.dispatch({
      actionType: action,
      state: action
    });
  },
};

module.exports = TubeActions;