const odd = [1, 3, 5];
const combined = [2, 4, 6, ... odd]; // unpacks the elements of the odd array
// console.log(combined)

function f(a, b, ...args) { // this allows to pass a variable number of arguments, i can pass an array here which will be spread
    let result = [a, b, ...args]
   console.log(result)
}

f(1, 2,...[3, 4, 5], ...[6, 7, 8]);

function compare(a, b) {
    return a - b;
}

let result = compare.apply(null, [1, 2]);
console.log(result)

let rivers = ['Nile', 'Ganges', 'Yangte'];
let moreRivers = ['Danube', 'Amazon'];
rivers.push(...moreRivers);
console.log(rivers)

let chars = ['A', ...'BC', 'D'];
console.log(chars)