(function(global) {
    'use strict';
    
    if (typeof module !== 'undefined' && module.exports)
        module.exports  = mapa;
    else
        global.mapa     = mapa;
    
    function mapa(fn, list) {
        check(fn, list);
        
        var i       = 0,
            n       = list.length,
            result  = Array(n);
          
        for (i = 0; i < n; i++)
            result[i] = fn(list[i], i, n, list);
          
        return result;
    }
    
    function check(fn, array) {
        if (typeof fn !== 'function')
            throw Error('fn should be function!');
        
        if (!Array.isArray(array))
            throw Error('list should be an array!');
    }
})(this);
