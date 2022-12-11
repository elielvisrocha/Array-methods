/* FILTER
const items = [
    { name: "bike", price: 100 },
    { name: "TV", price: 200},
    { name: "Album", price: 10},
    { name: "Book", price: 5},
    { name: "Phone", price: 500},
    { name: "Computer", price: 1000},
    { name: "Keyboard", price: 25}
];

const filtereditems = items.filter((item) => {
    return item.price <= 200
});

console.log(items);
console.log(filtereditems)
*/

/* MAP
const items = [
    { name: "bike", price: 100 },
    { name: "TV", price: 200},
    { name: "Album", price: 10},
    { name: "Book", price: 5},
    { name: "Phone", price: 500},
    { name: "Computer", price: 1000},
    { name: "Keyboard", price: 25}
];

const filtereditems = items.map((item) => {
    return item.name
});

console.log(items);
console.log(filtereditems)
*/


/* FIND
const items = [
    { name: "bike", price: 100 },
    { name: "TV", price: 200},
    { name: "Album", price: 10},
    { name: "Book", price: 5},
    { name: "Phone", price: 500},
    { name: "Computer", price: 1000},
    { name: "Keyboard", price: 25}
];

const filtereditems = items.find((item) => {
    return item.name == "Computer"
});

console.log(items);
console.log(filtereditems)
*/


/* FOREACH
const items = [
    { name: "bike", price: 100 },
    { name: "TV", price: 200},
    { name: "Album", price: 10},
    { name: "Book", price: 5},
    { name: "Phone", price: 500},
    { name: "Computer", price: 1000},
    { name: "Keyboard", price: 25}
];

items.forEach((item) => {
    return console.log(item.name)//item.price
})
*/


/* SOME
const items = [
    { name: "bike", price: 100 },
    { name: "TV", price: 200},
    { name: "Album", price: 10},
    { name: "Book", price: 5},
    { name: "Phone", price: 500},
    { name: "Computer", price: 1000},
    { name: "Keyboard", price: 25}
];

const filtereditems = items.some((item) => {
    return item.price <= 200
});

console.log(items);
console.log(filtereditems);
*/


/* EVERY
const items = [
    { name: "bike", price: 100 },
    { name: "TV", price: 200},
    { name: "Album", price: 10},
    { name: "Book", price: 5},
    { name: "Phone", price: 500},
    { name: "Computer", price: 1000},
    { name: "Keyboard", price: 25}
];

const filtereditems = items.every((item) => {
    return item.price <= 200
});

console.log(items);
console.log(filtereditems)
*/


/* REDUCE
const items = [
    { name: "bike", price: 100 },
    { name: "TV", price: 200},
    { name: "Album", price: 10},
    { name: "Book", price: 5},
    { name: "Phone", price: 500},
    { name: "Computer", price: 1000},
    { name: "Keyboard", price: 25}
];

const filtereditems = items.reduce((total, item) => {
    return total += item.price
}, 0);

console.log(items);
console.log(filtereditems)
*/


/* INCLUDES
const verifyNumbers = [
    0,
    1,
    3
];

console.log(verifyNumbers.includes(2))
*/