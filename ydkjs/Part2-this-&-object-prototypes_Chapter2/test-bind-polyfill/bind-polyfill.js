// if (!Function.prototype.bind_polyfill) {
  Function.prototype.bind_polyfill = function (oThis) {
    if (typeof this !== "function") {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError("Function.prototype.bind_polyfill - what is trying to be bound is not callable")
    }

    var aArgs = Array.prototype.slice.call(arguments, 1), 
      fToBind = this, 
      fNOP = function () {},
      fBound = function () {
        fBound.prototype = this instanceof fNOP ? new fNOP() : fBound.prototype
        return fToBind.apply(this instanceof fNOP
                                 ? this
                                 : oThis || this,
                                 aArgs.concat(Array.prototype.slice.call(arguments)))
        }
    if( this.prototype ) {
      // Function.prototype doesn't have a prototype property
      fNOP.prototype = this.prototype
    }

    return fBound
  }
// }

var bindFunc = function(){};

exports.bindFunc = bindFunc;