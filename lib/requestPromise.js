/*
 * webParser
 * https://github.com/salvin/webparser
 *
 * Copyright 2015 Tomasz Witkowski
 * Licensed under the MIT license.
 */

'use strict';
var request = require('request'),
    q = require('q');

module.exports = (function() {
  return {
    request: function(url) {
      var deferred = q.defer();
      request({
        uri: url,
        json: true
      }, function(error, response, body) {
        deferred.resolve(body);
      });

      return deferred.promise;
    }
  };
})();
