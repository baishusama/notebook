// file: test/bind-polyfill.test.js
var bindPolyfill = require('../bind-polyfill');
var should = require('should');

describe('test/bind-polyfill.test.js', function () {
  it('should equal p1p2', function () {
    function foo(p1, p2){
        this.val = p1 + p2;
    }

    var bar = foo.bind_polyfill(null, "p1");

    var baz = new bar("p2");

    baz.val.should.equal('p1p2');
  });
});