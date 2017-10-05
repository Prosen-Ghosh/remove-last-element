const removeLast = (function(){
    'use strict';
    const fn = function(ar){
        if(Object.prototype.toString.call(ar).toLowerCase() !== '[object array]'){
            throw new TypeError('removeLast() expects an array parameter');
        }
        if(ar.length === 0){
            throw new RangeError('Array Is Empty');
        }
        let value = ar[ar.length-1];
        ar.length--;
        return value;
    }
    return fn;
})();

if (typeof module === 'object' && module.exports) {
    module.exports = removeLast;
}