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
