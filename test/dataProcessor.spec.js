// jscs:disable requireCamelCaseOrUpperCaseIdentifiers
'use strict';

var subject = require('lib/dataProcessor');

describe('webparser', function() {

  it('should have parse method', function() {
    expect(subject.process).toBeDefined();
  });
  describe('sell', function() {
    var conf, result;
    beforeEach(function() {
      conf = {
        buyTreshold: '5.2000',
        sellTreshold: '5.5000'
      };
      result = {
        buy: '5.0000',
        sell: '6.0000',
        buy_old: '5.9685',
        sell_old: '5.9700',
        count_sell: 18,
        count_buy: 30,
        avg: '5.9807',
        avg_old: '5.9588'
      };
    });
    it('should work', function() {
      spyOn(console, 'info');
      subject.process(result, conf);
      expect(console.info).toHaveBeenCalledWith('Mozna kupic GBP po: 5.0000 przy srednim: 5.9807');
      expect(console.info).toHaveBeenCalledWith('Mozna sprzedac GBP po: 6.0000 przy srednim: 5.9807');
    });
  });

});

/*var webparser = require('../');

 */
