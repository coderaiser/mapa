(function() {
    'use strict';
    
    let mapa    = require('..'),
        test    = require('tape');
    
    test('map array', t => {
        let inc     = i => ++i;
        let result  = mapa(inc, [1,2,3,4,5]);
        
        t.deepEqual(result, [2,3,4,5,6]);
        t.end();
    });
    
    test('map newly created array', t => {
        let inc = i => () => ++i;
        let result = mapa(inc(0), Array(5));
        
        t.deepEqual(result, [1,2,3,4,5]);
        t.end();
    });
    
    test('arguments of mapper: index', t => {
        const mapper = (item, index, array) => {
            t.equal(item, array[index], 'should be used element, index, array');
        }
        
        mapa(mapper, [1, 2, 3, 4, 5]);
        t.end();
    });
    
    test('arguments: no fn', t => {
        t.throws(mapa, /fn should be function!/, 'should throw when no fn');
        t.end();
    });
    
    test('arguments: no lists', t => {
        let fn  = () => mapa(() => {});
       
        t.throws(fn, /list should be an array!/, 'should throw when no list');
        t.end();
    });
})();
