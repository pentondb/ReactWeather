// var names = ['Derek', 'Vernon', 'Lucy', 'Brian'];

// names.forEach(function (name) {
//     console.log('forEach', name);
// })

// names.forEach((name) => {
//     console.log('arrowFunc', name);
// })

// names.forEach((name) => console.log('inline', name))

// var returnMe = (name) => name + '!';
// console.log(returnMe('Derek'));

// var person = {
//     name: 'Derek',
//     greet: function () {
//         names.forEach(function (name) {
//             console.log(this.name + ' says hello to ' + name);
//         });
//     },
//     sayhi: function () {
//         names.forEach((name) => console.log(this.name + ' says Hi to ' + name));
//     }
// }

// person.greet();
// person.sayhi();

function add(a, b) {
    return a + b;
}

var add2 = (a, b) => {
    return a + b;
}

var add3 = (a, b) => a + b;

console.log(add(1, 3));
console.log(add(9, 0));

console.log('add2', add2(1, 3));
console.log('add2', add2(5, 3));

console.log('add3', add3(1, 3));
console.log('add3', add3(5, 3));