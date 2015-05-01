
var AppDispatcher = require('../tube/dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var TubeActions = require('./actions/AdminActions');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var MediaStore = assign({}, EventEmitter.prototype, {

  getAll: function() {

    // var query = '&q={"type": "audio"}';
    var query = '';

    var url = "https://api.mongolab.com/api/1/databases/test/collections/media?apiKey=iwcA3TD9hYAOch1uXms2ffq6D3jPPq_J"+query;
    var jsPromise = Promise.resolve($.ajax(url));
    jsPromise.then(function(response) {

    });
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
  var current;

  switch(action.actionType) {
      case 'parse_url':
      	console.log(action.url);
        break;
    default:
  }


});

module.exports = MediaStore;