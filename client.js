var page = (function() {

    var makePromise = function() {
        var p = new Promise(function(resolve, reject) {
            setTimeout(function() {
                    var rand = Math.random();
                    if (rand > 0.5) {
                        resolve('resolved');
                    } else {
                        reject('rejected');
                    }
                },
                2000);
        });

        p.then(function(value) {
            alert(value);
        }).catch(function (value) {
            alert(value);
        });
    };

    return {
        makePromise
    };

})();

