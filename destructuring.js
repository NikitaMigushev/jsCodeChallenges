/*
Object destructuring is a useful JavaScript feature
to extract properties from objects and bind them to variables.
*/

/*
Even better, object destructuring can extract multiple properties
 in a single statement, can access properties from nested objects,
 and can set a default value if the property doesn't exist.
* */

/*
That's where the object destructuring syntax is useful: you can read a property and assign its value to a variable without duplicating the property name.
 What is more, you can read multiple properties from the same object in just one statement!
* */

var hero = {
    name: 'Batman',
    realName: 'Bruce Wayne'
};

var name = hero.name;
var realName = hero.realName;

console.log(name);
console.log(realName);

const hero2 = {
    name2: 'Batman',
    realName2: 'Bruce Wayne',
    age: 34,
    year: 2025
};

const {name2: name3, realName2, age, year = 2024} = hero2;

console.log(name3);
console.log(realName2);
console.log(age)
console.log(year)

const object = {
    prop1: {
        prop2: {
            prop3: 'Deep Nested Value'
        }
    }
};

const {prop1: {prop2: {prop3}}} = object

console.log(prop3)

const hero3 = {
    nameF: 'Figma',
    realName: 'John Doe',
    company: 'Figma Corp'
};

const {nameF, ...best} = hero3;

console.log(nameF + " " + JSON.stringify(hero3, null, 2))

function storeOrder({id, currency}) { // object with props id, currency is expected as input
    // object props are destructed and assigned to variables id and currency
    localStorage.setItem('id', id);
    localStorage.setItem('currency', currency);
}

const orderData = {
    id: 123,
    currency: 'USD'
}

storeOrder(orderData)

console.log(localStorage.id);
console.log(localStorage.currency);





