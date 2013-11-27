function Silicon(){}

Silicon.prototype = {
  constructor: Silicon,
  
  start: function(){
    console.log("Started silicon");
    return this;
  },
  
  arriving: function(data){
    console.log("User left", data.user, "location", data.location);
  },
  departing: function(data){
    // Not implemented yet
  },
  action: function(data){
    // Not implemented yet
  },
  
  /**
   * Receives all HTTP requests to <pamelaURL>/<silicon-name>/*path
   * When the http method is defined, you are responsible for closing each incoming request.
   */
  http: function(data){
    var response = data.response, request = data.request;
    response.write("Hello World");
    // Close response
    response.end();
  },
};

module.exports = new Silicon;