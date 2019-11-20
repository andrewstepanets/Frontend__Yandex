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

Object.defineProperty(person, 'age', {
    set: function (age) {
        this._age = parseInt(age);
    },
    get: function () {
        return this._age;
    }
});

student.age = '20 years';
console.log(student.age);
console.log(person.age);
console.log(student.hasOwnProperty('_age'));

var kitty = {};
var cat = {};

Object.defineProperty(cat, 'color', {
    set: function () {
        this._color = 'Ginger';
    },
    get: function () {
        return this._color;
    }
});

Object.setPrototypeOf(kitty, cat);
kitty.color = 'Grey';

console.log(kitty.color);


Object.defineProperty(student, 'number', {
    enumerable: false,
    value: 120
});

for (var key in student) {
    if (student.hasOwnProperty(key)) {
        console.log(key);
    }
}


console.log(Object.keys(student));