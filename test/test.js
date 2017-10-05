const removeLast = require('../remove-last');
const assert = require('chai').assert;
describe('Remove Last Element Of An Array',function(){
    it('Function Shuld Return Average Of An Array',function(){
        assert.equal(removeLast([1,-2,-1,-5]),-5);
        assert.equal(removeLast([1]),1);
        assert.isObject(removeLast([1,-2,-1,{}]),{});
        assert.isArray(removeLast([1,-2,-1,[]]),[]);
    });
});