(function(global) {
    'use strict';
    
    if (typeof module !== 'undefined' && module.exports)
        module.exports  = mapa;
    else
        global.mapa     = mapa;
    
    function mapa(fn, list) {
        check(fn, list);
        
        var n       = list.length,
            j       = 0,
            i       = n + 1,
            result  = Array(n);
        
        while(--i) {
            j = n - i;
            result[j] = fn(list[j], j, n, list);
        }
          
        return result;
    }
    
    function check(fn, array) {
        if (typeof fn !== 'function')
            throw Error('fn should be function!');
        
        if (!Array.isArray(array))
            throw Error('list should be an array!');
    }
})(this);
