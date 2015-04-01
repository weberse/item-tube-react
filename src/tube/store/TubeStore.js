
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
// var TodoConstants = require('../constants/TodoConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _state = 'play';
var _current = 'current';

function changeState() {
	_state = 'pending';
}

var TubeStore = assign({}, EventEmitter.prototype, {

  getAll: function() {
    // var url = "https://api.mongolab.com/api/1/databases/test/collections/media?apiKey=iwcA3TD9hYAOch1uXms2ffq6D3jPPq_J"
    // var jsPromise = Promise.resolve($.ajax(url));
    // jsPromise.then(function(response) {
    //   console.log(response);
    //   return response;
    // });
  },

  getState: function() {
    return _state;
  },

  getCurrent: function() {
    return _current;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  var state;

  switch(action.actionType) {
    case 'play':
      state = 'pending';
      changeState();
      TubeStore.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = TubeStore;