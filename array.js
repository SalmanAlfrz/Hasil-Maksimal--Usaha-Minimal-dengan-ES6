// every
var people = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Jack', age: 40 }
];

// some
function teenager(person) {
    return person.age >= 13 && person.age <= 19;
}
var firstTeenager = people.some(teenager);

console.log("Beberapa yang di array adalah belia ",firstTeenager);

// foreach
var colors = ["red", "green", "blue"];

function print(value) {
    console.log(value);
}

colors.forEach(print);

// map
var colors = ["red", "green", "blue"];

function capitalize(value) {
    return value.toUpperCase();
}

var capitalizedColors = colors.map(capitalize);

console.log(capitalizedColors);

// reduce

let foods = [800, 700, 600, 500];

let total = foods.reduce( function(sum, value){ 
    sum + value 
});

console.log(total);
