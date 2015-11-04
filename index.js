/**
 * Created by Tomasz Witkowski on 03/11/2015.
 */
var requestPromise = require('lib/requestPromise'),
    dp = require('lib/dataProcessor'),
    appConf = require('lib/config');

requestPromise.request(appConf.datasourceUrl).then(function(result) {
  requestPromise.request(appConf.firebaseUrl).then(function(conf) {
    dp.process(result, conf);
  });
});
