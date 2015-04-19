
var AppDispatcher = require('../dispatcher/AppDispatcher');
var TubeVideo = require('../service/video');
var MediaAudio = require('../../media/audio/audio');
var EventEmitter = require('events').EventEmitter;
var TubeActions = require('../actions/TubeActions');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _state = 'stop';
var _current = {  };
var _allVideos = [];

function changeState(state) {
	_state = state;
}


$(function(){
  video = new TubeVideo();
  // audio = new MediaAudio();
});

var TubeStore = assign({}, EventEmitter.prototype, {

  getAll: function() {
    var url = "https://api.mongolab.com/api/1/databases/test/collections/media?apiKey=iwcA3TD9hYAOch1uXms2ffq6D3jPPq_J";
    var jsPromise = Promise.resolve($.ajax(url));
    jsPromise.then(function(response) {
        _allVideos = response;
        _current = response[0];
        // video.init();
        TubeActions.videoLoaded();
       return response;
    });
  },

  getState: function() {
    return _state;
  },

  setNextVideo: function(){
    _current = _allVideos[Math.floor(Math.random()*_allVideos.length)];
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

function changeMediaState(state) {
    switch (state) {
      case 'stop' :
        video.play();
        _state = 'play';
        return 'play';
      case 'play' :
        video.stop();
        _state = 'stop'
    }
}

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  var current;

  switch(action.actionType) {
      case 'change_state':
          changeMediaState(action.state);
          TubeStore.emitChange();
          break;
      case 'video_loaded':
          TubeStore.emitChange();
          video.init(_state);
          break;
      case 'video_next':
          video.destroy();
          TubeStore.setNextVideo();
          TubeStore.emitChange();
          video.init(_state);
          break;
    default:
  }


});

module.exports = TubeStore;