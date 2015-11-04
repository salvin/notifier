// jscs:disable requireCamelCaseOrUpperCaseIdentifiers
/**
 * Created by Tomasz Witkowski on 14/06/2015.
 */

var https = require('https'),
    appConf = require('lib/config');
module.exports = (function() {
  var pushMsg = {
        user_credentials: appConf.boxcarId,
        notification: {
          title: 'Walutomat update',
          long_message: 'MsgBody',
          sound: 'bell-one-tone',
          source_name: 'Waluty',
          icon_url: 'http://new.boxcar.io/images/rss_icons/boxcar-64.png'
        }
      },
      pushOptions = {
        host: 'new.boxcar.io',
        port: 443,
        path: '/api/notifications',
        method: 'POST'
      },
      push = function(obj) {
        var clone = JSON.parse(JSON.stringify(pushMsg));
        clone.notification.title = obj.title || clone.notification.title;
        clone.notification.long_message = obj.message || clone.notification.long_message;
        send(clone);
      },
      send = function(msgObject) {
        var msg = JSON.stringify(msgObject);

        pushOptions.headers = {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(msg, 'utf8')
        };
        var reqPost = https.request(pushOptions, function(res) {

        });

        // write the json data
        reqPost.write(msg);
        reqPost.end();
        reqPost.on('error', function(e) {
          console.error(e);
        });
      };
  return {
    push: push
  };

}());
