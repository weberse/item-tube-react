
var AppDispatcher = require('../tube/dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var TubeActions = require('./actions/AdminActions');
var assign = require('object-assign');
var UrlParser = require('./service/UrlParser');

var CHANGE_EVENT = 'change';

var mediaInfo = {};

var MediaStore = assign({}, EventEmitter.prototype, {

  getAll: function() {

    // var query = '&q={"type": "audio"}';
    var query = '';

    var url = "https://api.mongolab.com/api/1/databases/test/collections/media?apiKey=iwcA3TD9hYAOch1uXms2ffq6D3jPPq_J"+query;
    var jsPromise = Promise.resolve($.ajax(url));
    jsPromise.then(function(response) {
        // TubeActions.mediaLoaded();
    });
  },

  addMedia: function(data) {

    var url = "https://api.mongolab.com/api/1/databases/test/collections/media?apiKey=iwcA3TD9hYAOch1uXms2ffq6D3jPPq_J";
    var jsPromise = Promise.resolve($.ajax( { url: url,
        data: JSON.stringify( data ),
        type: "POST",
        contentType: "application/json" } 
      ));
    jsPromise.then(function(response) {
        TubeActions.mediaAdded();
    });
  },

  getMediaInfo: function() {
    return mediaInfo;
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
      	UrlParser.parse(action.url);
        break;
      case 'error_url':
      	console.log('url error');
        break;
      case 'media_info':
      	mediaInfo = action.info;
      	MediaStore.emitChange();
        break;
      case 'add_media':
        MediaStore.addMedia(action.data)
        break;
    default:
  }


});

module.exports = MediaStore;