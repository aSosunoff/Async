const async = require('async');

async.series({
    one: test_1, 
    two: test_2, 
    three: test_3
}, (err, result) => {
    if(err)
        console.log('Error', err);

    console.log(result);
});

function test_1(callback){
    setTimeout(() => {
        callback(null, 1);
    }, 1000);
}

function test_2(callback){
    setTimeout(() => {
        callback(null, 2);
    }, 1000);
}

function test_3(callback){
    setTimeout(() => {
        callback(null, 3);
    }, 1000);
}