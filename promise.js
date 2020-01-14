var page = (function () {

    var makePromise = function () {
        //States : pending, fulfilled, rejected
        var p = new Promise(function (resolve, reject) {
            setTimeout(function () {
                var rand = Math.random();
                if (rand > 0.5) {
                    resolve('p resolved');
                } else {
                    reject('p rejected');
                }
            },
                2000);
        });

        p.then(function (value) {
            console.log(value);
        }).catch(function (value) {
            console.log(value);
        }).finally(function () {
            console.log("Set loading to dismiss in finally");
        });

        var p1 = new Promise(function (resolve, reject) {
            setTimeout(function () {
                var rand = Math.random();
                if (rand > 0.5) {
                    resolve('p1 resolved');
                } else {
                    reject('p1 rejected');
                }
            },
                2000);
        });

        Promise.all([p, p1]).then(function (values) {
            console.log("Promise.all completed");
            console.log(values);

        });
    };

    return {
        makePromise
    };

})();

