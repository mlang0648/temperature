let speak = require('../speak.js')
let assert = require('assert');

// Create a group of tests about Temperatures
describe('Say Something', function() {
  // Within our TemperatureConversion group, Create a group of tests for conversions
  describe('word', function() {
    it('should return a word', function() {
      assert.equal("wor", speak.word());
    });
    it('should return a sentence', function() {
      assert.equal("two words", speak.sentence());
    });
  });
});
