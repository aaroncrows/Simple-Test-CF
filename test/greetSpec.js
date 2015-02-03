var expect = require('chai').expect;
var app = require('../lib/greet');
describe('Greet', function() {
  describe('#greet()', function() {
    it('should admonish an empty input', function() {
      var results = app.greet().indexOf('breh');

      expect(results).to.not.equal(-1);
    });
    it('Should use the passed in name', function() {
      var results = app.greet('Dave');

      expect(results).to.equal('Hello, Dave I\'m Node.');

    });

  });

});