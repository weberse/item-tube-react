
var AppDispatcher = require('../dispatcher/AppDispatcher');
var TubeVideo = require('../service/video');
var MediaAudio = require('../../media/audio/audio');
var EventEmitter = require('events').EventEmitter;
var TubeActions = require('../actions/TubeActions');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _state = 'stop';
var _current = {
  mediaType: ''
};
var _allVideos = [];
var _allAudio = [];

var _currentAudio;
var _currentBckg;

function changeState(state) {
	_state = state;
}


$(function(){
  video = new TubeVideo();
  audio = new MediaAudio();
});

var TubeStore = assign({}, EventEmitter.prototype, {

  getAll: function() {

    var query = '&q={"type": "audio"}';
    // query = '';

    var url = "https://api.mongolab.com/api/1/databases/test/collections/media?apiKey=iwcA3TD9hYAOch1uXms2ffq6D3jPPq_J"+query;
    var jsPromise = Promise.resolve($.ajax(url));
    jsPromise.then(function(response) {
        _allAudio = response;
        TubeActions.mediaLoaded();
       return response;
    });
  },

  getState: function() {
    return _state;
  },

  getNextVideo: function() {

  },

  getCurrentBckg: function() {
    return _currentBckg;
  },

  getNextAudio: function() {
    return _currentAudio = _allAudio[Math.floor(Math.random()*_allAudio.length)];
  },

  getCurrentAudio: function() {
    return _currentAudio;
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
        playMedia();
        return 'play';
      case 'play' :
        stopMedia();
        return 'stop';
    }
}

function playMedia() {
  // video.play();
  audio.play();
  _state = 'play';
}

function stopMedia() {
  // video.stop();
  audio.stop();
  _state = 'stop';
}

function nextAudio(){
  audio.init(TubeStore.getNextAudio(), _state);
}

function initMedia() {
    audio.init(TubeStore.getNextAudio());
}

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  var current;

  switch(action.actionType) {
      case 'change_state':
          changeMediaState(action.state);
          TubeStore.emitChange();
          break;
      case 'media_loaded':
          initMedia();
          TubeStore.emitChange();
          break;
      case 'next_audio':
          nextAudio();
          TubeStore.emitChange();
          break;
    default:
  }


});

module.exports = TubeStore;