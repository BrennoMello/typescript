var start = function (callback) {
    setTimeout(function () {
        callback('Hello');
        setTimeout(function () {
            callback('And Welcome');
            setTimeout(function () {
                callback('To Async Await Using TypeScript');
            }, 1000);
        }, 1000);
    }, 1000);
};
start(function (text) { return console.log(text); });
