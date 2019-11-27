'use strict';

// example function who create objects

var studentProto = {
    sleep: function(){
        console.info('zzzZZ ...');
    }
};

function createStudent(name) {
    var student = {
        name: name
    };

    Object.setPrototypeOf(student, studentProto);

    return student;
}

var billy = createStudent('Billy');
var willy = createStudent('Willy');

billy.sleep();

// code constructor 

function Student(name){
    this.name = name;
}

var billy = new Student('Billy');
console.info(billy.name);

// Prototype chains

function Person(){
    this.type = 'human';
}
Person.prototype.getName = function(){
    return this.name;
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.sleep = function() {
    console.info('ZZzz...');
};
Student.prototype.constructor = Student;

var billy = new Student('Billy');

billy.sleep();

function Lecture(name) {
    this.name = name;
}
Lecture.prototype = Object.create(Person.prototype);

var sergey = new Lecture('Sergey');
//  sergey.sleep(); This cause problem ----- TypeError: sergey.sleep is not a function

//  Example prototype chain

var fruitProto = {
    isUsefull: true
}

var apple = Object.create(fruitProto);

console.log(apple.isUsefull);

// test relations with objects, constructors and prototypes
// #1
var person = {
    type: 'human',
    getName: function(){}
}

var student = {
    name: 'Billy',
    [[]]: person
}

Object.getPrototypeOf(student) === person; // true

//  #2


Student.prototype.isPrototypeOf(billy); //true
Person.prototype.isPrototypeOf(billy); //true

//  #3

billy instanceof Student;  // true
billy instanceof Person;  // true
billy instanceof Object;  // true

//  example

var foreverAlone = Object.create(null);

foreverAlone instanceof Object; // false
console.info(foreverAlone instanceof Object);

// Solving problem of doubling code into constructors

function Person(name) {
    this.type = 'human',
    this.name = name
}

function Student(name) {
    Person.call(this, name)    
}

var billy = new Student('Billy');

console.info(billy.name);

// call shaded methog

function Person(name) {
    this.type = 'human';
    this.name = name;
}

Person.prototype.getName = function(){
    return this.name;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.getName = function() {
    return 'Student ' + Person.prototype.getName.call(this);
};

console.info(Student.prototype.getName());

// Constructing objects == object's fabrica
function fruit() {
    this.type = type
}
var apple = Object.create(fruit, {
    shape: {value: 'round', writable: false},
    colour: {value: 'Green'},
    amount: {writable: true}
});

apple.amount = 'half';

console.log(apple);