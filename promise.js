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

        //ALL
        Promise.all([p, p1]).then(function (values) {
            console.log("Promise.all is completed when all the promise is completed in the order of the array and the result is an array passed to the then function");
            console.log(typeof(values));
            console.log(values);

        }).catch(function (values) {
            console.log("Promise.all rejects when the first promise rejects");
            console.log(values);
        });

        //CHAIN PROMISE
        var _1stPromise = new Promise(function (resolve) {
            setTimeout(() => {
                console.log("_1stPromise completed");
                resolve("_1stPromise called the then function");
            }, 1000);
        });
        _1stPromise.then((value) => {
            console.log(value);
            return new Promise(function (resolve) {
                setTimeout(() => {
                    console.log("_1stPromise.then completed");
                    resolve("Chain Promise is completed");
                },
                    1000);
            });
        }
        ).catch(()=> {
            console.log("error handling just for the previous then");
        }).then((value) => {
            console.log(value);
            value.purposely.throwerror;
        }).catch(err => {
            console.log(`catch any error : ${err}`);
        });

        //ALL SETTLED
        Promise.allSettled([p, p1]).then(function (values) {
            console.log(`Promise.allSettled is completed when all the promise is settled as either rejected or fulfilled
            and the result is  {status: "rejected", reason: "p rejected"} or {status: "fulfilled", value: "p1 resolved"}`);
            console.log(values);

        });

        //RACE
        Promise.race([p, p1]).then(function (values) {
            console.log("Promise.race is completed when the first promise fulfilled");
            console.log(values);

        }).catch(function (values) {
            console.log("Promise.race rejects when the first promise rejects");
            console.log(values);
        });

        //RESOLVE
        Promise.resolve('Resolves a definite value').then(function (value) {
            console.log(value);
        });

        //RESOLVE A Promise Inside
        Promise.resolve(p).then(function (value) {
            console.log(`Promise.resolve(p) ${value} `);
        }).catch(function (values) {
            console.log("Promise.resolve(p) rejects when the promise is rejected");
            console.log(values);
        });

        var p2 = Promise.resolve({
            then: function (onFulfill, onReject) { onFulfill('fulfilled!'); }
        });

        p2.then(function (v) {
            console.log(v);
        });
    };

    return {
        makePromise
    };

})();

