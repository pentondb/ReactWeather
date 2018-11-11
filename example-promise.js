// function getTempCallback(location, callback) {
//     callback(undefined, 78);
//     callback('City not found');
// }

// getTempCallback('Birmingham', function (err, temp) {
//     if (err) {
//         console.log('error', err);
//     } else {
//         console.log('success', temp);
//     }
// });

// function getTempPromise(location) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve(79);
//             reject('City not found!');
//         }, 1000);
//     });
// }

// getTempPromise('Birmingham').then(function (temp) {
//     console.log('Promise success', temp);
// }, function (err) {
//     console.log('Promise error', err);
// })

// Challenge area

function addPromise(a, b) {
    return new Promise(function (resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject('A & B must both be numbers');
        }
    });
}

addPromise().then(function (sum) {
    console.log('promise success', sum);
}, function (err) {
    console.log('promise error', err);
});
addPromise(1, 2).then(function (sum) {
    console.log('promise success', sum);
}, function (err) {
    console.log('promise error', err);
});