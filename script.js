// Lecture: Function Constructors

//obj literal
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

// Function Constructor Pattern for writing a blueprint
// The usual convention in JS is that we always write function constructors with capital letter
var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};


// ****** Inheritance in practice ******
// Effectively none of the objects have the calculateAge() method really attached to them. But still they are going to be able to use it. They will have access to it because it's in their prototype.
// Attaching methods to the constructor function's prototype property. This is very common to use.
// We have access to it because it is in the prototype property of the function constructor.
Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);
};
// Also we can add properties instead of methods but that's not really common.
// (So, all John, Jane, and Mark inherit this property).
Person.prototype.lastName = 'Smith'; //This will be inherited for all of the instances



// This is how we create new objects using the constructor function.
// This is called instantiation because these objects here are instances of the Person object
var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');
// Calling a function creates a new execution context that also has a .this variable
// The 'new' operator does is to point the .this variable not to the global object but to this new empty object that was created in the beginning when we used .this operator.
// So then after that when we set the name, year and job properties to .this, then that's the same as setting them right on our new empty object.

// Prooving that inheritance of methods works
john.calculateAge();
jane.calculateAge();
mark.calculateAge();

// Prooving that inheritance of properties works
console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);










