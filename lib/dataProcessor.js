/**
 * Created by Tomasz Witkowski on 03/11/15.
 */
'use strict';

module.exports = (function() {
  var pusher = require('lib/pusher'),
      processData = function(data, conf) {
        if (!!conf.buyTreshold && parseFloat(conf.buyTreshold) * 10000 >= parseFloat(data.buy) * 10000) {
          var msg = 'Mozna kupic GBP po: ' + data.buy + ' przy srednim: ' + data.avg;
          pusher.push({message:msg});
          console.info(msg);
        }

        if (!!conf.sellTreshold && parseFloat(conf.sellTreshold) * 10000 < parseFloat(data.sell) * 10000) {
          var msg = 'Mozna sprzedac GBP po: ' + data.sell + ' przy srednim: ' + data.avg;
          pusher.push({message:msg});
          console.info(msg);
        }
      };

  return {
    process: processData
  };
}());
