const async = require('async');

const arrayResult = [];

/* PROBLEMM */
/* setTimeout(() => {
    arrayResult.push(1);

    setTimeout(() => {
        arrayResult.push(2);

        setTimeout(() => {
            arrayResult.push(3);

            console.log(arrayResult);
        }, 1000);
    }, 1000);
}, 1000); */


/* SOLVE */
function run(callback){
    async.each([
        test_1, 
        test_2, 
        test_3
    ], (item, callback) => {
        item(callback);
    }, callback);
}

run((err) => {
    if(err)
        console.log(err);

    console.log(arrayResult);
});

function test_1(callback){
    setTimeout(() => {
        arrayResult.push(1);
        callback(null);
    }, 1000);
}

function test_2(callback){
    setTimeout(() => {
        arrayResult.push(2);
        callback(null);
    }, 1000);
}

function test_3(callback){
    setTimeout(() => {
        arrayResult.push(3);
        callback(null);
    }, 1000);
}