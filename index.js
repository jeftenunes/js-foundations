// Working with primitives types

console.log(typeof 42);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof 'hello world');

// Autoboxing primitive types
// In JavaScript there are 5 primitive types: undefined, null, boolean, string and number. Everything else is an object.
// Bref: autoboxing is the js' capability of coerce between primitives and objects

const str = 'Foo';
console.log(typeof str);
console.log(str.length);

str.test = 'seulement un petit test'
console.log(str.test); //undefined

// Understanding Prototypal Inheritance within JavaScript
const a = {};
const b = Object.create(a);

console.log(a.toString()); // [object Object]
console.log(b.toString()); // [object Object]

const c = {};

c.toString = () => true;

const d = Object.create(c);


console.log(c.toString()); // true
console.log(d.toString()); // true

// .prototype and .__proto__
function foo() {}

console.log(foo.prototype);

foo.prototype.test = `Hey, ho! Let's go`;

console.log(foo.prototype);

const f = new foo();
console.log(f);

// block scopes
var firstName = 'Jefte'
console.log(firstName);

{
    var firstName = 'John'
    console.log(firstName);
}

console.log(firstName);

let lastName = 'Santos'
console.log(lastName);

{
    let lastName = 'Doe'
    console.log(lastName);
}

console.log(lastName);

// this keyword

const myObj = {
    lastName: 'Santos',
    firstName: 'Jefte',
    getName: function() {
        return `Je m'appelle ${this.firstName} ${this.lastName}`
    },
    value: {
        getName: function() {
            return `Je m'appelle ${this.firstName} ${this.lastName}`
        }  
    }
};

console.log(myObj.getName());
console.log(myObj.value.getName());

//1. Was the function called? Yes
//2. How? Implicit binding with ()
//3. What context was it invoked in? the myObj object's context 

// Arrow functions and lexical scope

const obj = {
    objFirstName: 'Claude',
    getName() {
        console.log(`Je m'appelle ${this.objFirstName}`);
    }
};

// setInterval(obj.getName(), 3000);

// Explicit binding of the "this" keyword

const otherObj = {
    objFirstName: 'Joe',
};

function getName() {
    return `My name's ${this.objFirstName}`;
}

console.log(getName.call()); //undefined
console.log(getName.call(otherObj)); //Joe

// In js, every function creates a new scope
// Lexical scope is the author function scope


// IIFEs => functions called right after we declared it
(function() {
    const firstName = 'Juao' //Private variable, doesn't visible from global scope
    console.log(`Hey, I'm an IIFE`);
    console.log(`Hey, my name's ${firstName}`);
})();

(() => console.log('hello'))();

// Implicit and explicit coercion

// implicit
const legs = 2;
const strLegs = `I have ${legs} legs`; // We're asking js to convert legs const into a string. Difficult to track bugs
console.log(strLegs);

// Explicit coercion
const legs_2 = String(2); //Explicit coercion. Other examples: Number(), Boolean(), parseInt(), parseFloat()
const strLegs_2 = `I have ${legs_2} legs`;
console.log(strLegs_2);

console.log('1' == 1); // double equals try to implicitly coerce the values to see if the values are of the same type
console.log('1' === 1); // triple equals compares the two values by type and value without try to coerce the values

class AnyType {}
console.log(typeof AnyType);

// class Rectangle {}
// class Square extends Rectangle {}
// console.log(Object.getPrototypeOf(Square));

// function Rectangle() {}
// function Square() {}
// Object.setPrototypeOf(Square, Rectangle); //Same result than above

// console.log(Object.getPrototypeOf(Square));

//ES6 constructors and super keyword

class Rectangle {
    constructor(height, width) {
        this.name = 'Rectangle';
        this.width = width;
        this.height = height;
    }

    static callRectangle() {
        console.log('Call rectangle');
    }
}

class Square extends Rectangle {
    constructor(length) {
        super(length, length);
        this.name = 'Square';
    }

    static callSuper() {
        console.log(`${super.callRectangle()} from the Square`);
    }
}

const myShape = new Square(2);

console.log(myShape);
console.log(Rectangle.callRectangle());
console.log(Square.callSuper());