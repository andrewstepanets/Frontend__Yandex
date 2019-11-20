'use strict';

var person = {
    type: 'human',
    getName: function() {
        return this.name;
    }
};

var student = {
    name: 'Billy',
    sleep: function(){
    },
    __proto__: person
};

var lecture = {
    name: 'Alex',
    talk: function() {},
    __proto__: person
};


console.log(student.getName());
console.log(lecture.getName());

Object.setPrototypeOf(student, person);

console.log(student.getName());