/**
 * Client
 */

var socket = require('socket.io-client')();
var debug  = require('debug')('client');

/**
 * Log all debug messages
 */

require('debug').enable('*'); // change this to `client` to only check for client events

/**
 * Connect
 */

socket.on('connect', function(){
  debug('connected');
});

socket.on('new_user', function(message){
  debug('new_user', message);
});

socket.on('disconnect', function(){
  debug('deisconnected');
});