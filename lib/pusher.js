/**
 * Created by Tomasz Witkowski on 14/06/2015.
 */

var pushService = require('lib/boxcar');
module.exports = (function() {
  var push = pushService.push;

  return {
    push: push
  };
}());
