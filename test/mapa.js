(function() {
    'use strict';
    
    let mapa    = require('..'),
        test    = require('tape');
    
    let inc = i => () => ++i;
        
    test('map newly created array', t => {
        let result = mapa(inc(0), Array(5));
        
        t.deepEqual(result, [1,2,3,4,5]);
        t.end();
    });
    
    test('arguments: no fn', t => {
        t.throws(mapa, /fn should be function!/, 'should throw when no fn');
        t.end();
    });
    
    test('arguments: no lists', t => {
        let fn  = () => mapa(inc);
       
        t.throws(fn, /list should be an array!/, 'should throw when no list');
        t.end();
    });
})();
