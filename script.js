//Function constructorvar 
// var john = {
//     name: "John",
//     yearOfBirth: 1990,
//     job: 'teacher'

// }
// var Person = function(name, yearOfBirth, job) {
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job

//     }
//     //this method or func belongs to classes/objects that inherit from Person
// Person.prototype.calculateAge = function() {
//         console.log(2021 - this.yearOfBirth)
//     }
//     //the 'new' operator creates a brand new object
// var john = new Person('John', 1990, 'teacher')

// var jane = new Person('Jane', 1979, 'designer');
// var mark = new Person('Mark', 1977, 'retired');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge()


/***********************************************************************
 * Object.create()
 */
// var personProto = {
//     calcualetAge: function() {
//         console.log(2021 - this.yearOfBirth)
//     }
// }
// var john = Object.create(personProto)
// john.name = "John";
// john.yearOfBirth = 1990
//     //another person
// var jane = Object.create(personProto, {
//     name: { value: "Jane" },
//     yearOfBirth: { value: 1998 },
//     job: { value: "designer" }
// })

/************************************************************************
 * Primitives vs objects
 */

//variables
// var a = 23
// var b = a
// a = 47
//     // console.log(a)
// console.log(b)


//objects
// var obj1 = {
//     name: 'John',
//     age: 26
// }
// var obj2 = obj1
// obj1.age = 30
//the age of obj2 changes to 30 because it is the same object both variables are referencing
// console.log(obj1)
// console.log(obj2)

//Functions
// var age = 23
// var obj = {
//         name: "Jonas",
//         city: 'Lisbon'
//     }
//we do not pass an object to a function but a reference to an object
// function change(a, b) {
//     a = 30;
//     b.city = 'San Francisco'
// }
// change(age, obj)
// console.log(age)
// console.log(obj.city)


/***********************************************************
 * Functions
 * A function is an instance of an object
 * A function behaves like any other object
 * We can store functions in a variable
 * We can pass a function as an argument to another function
 * We can also return a function from a function
 */


// var years = [1990, 1965, 1937, 2005, 1998]

// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     // for (var i = 0; i < arr.length; i++) {
//     //     arrRes.push(fn(arr[i]))
//     // }
//     arr.forEach(element => {
//         arrRes.push(fn(element))

//     });
//     return arrRes;
// }

// function calculateAge(el) {
//     return 2016 - el;
// }

// function isFullAge(el) {
//     return el >= 18;
// }

// function maxHeartRate(el) {
//     if (el >= 18 && el <= 81) {
//         return Math.round(206.9 - (0.67 * el))
//     } else {
//         return -1;
//     }

// }

// var ages = arrayCalc(years, calculateAge)
// var fullAges = arrayCalc(ages, isFullAge)
// var rates = arrayCalc(ages, maxHeartRate)
// console.log(rates)
// console.log("full Ages: " + fullAges)

// console.log(ages)


/*****************************************************************
 * Functions returning functions
 */
// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name + ', can you please explain what UX design is?')

//         }

//     } else if (job === 'teacher') {
//         return function(name) {
//             console.log('What subject do you teach ' + name + '?')
//         }
//     } else {
//         return function(name) {
//             console.log('Hello ' + name + ', what do you do?')
//         }
//     }
// }
// var teacherQuestion = interviewQuestion('teacher')
// var designerQuestion = interviewQuestion('designer')

// teacherQuestion('John')
// designerQuestion('Mark')
//     //or
// interviewQuestion('teacher')('John')


/*********************************************************************
 * IIFE -- Immediately invoked function expression
 */
//instead of doing this
// function game() {
//     var score = Math.random() * 10;
//     console.log(score > 5);
// }
// //call
// game();

// //we do it with IIFE. And we can pass argument
// (function(goodLuck) {
//     var score = Math.random() * 10;
//     console.log(score > 5 - goodLuck);
// })(5);


/***********************************************************************
 * CLOSURES
 * An inner function has always access to the varibales and parameters of its
 * outer function, even after the outer function has returned.
 */
// function retirement(retirementAge, counrtyName) {
//     var a = ' years left until retirement.'



//     return function(yearOfBirth) {
//         var age = 2021 - yearOfBirth;
//         console.log((retirementAge - age) + a + ' That is for ' + counrtyName);

//     }

// }
// var retirementUs = retirement(66, 'US')
// var retirementGermany = retirement(65, 'Germany')
// var retirementIceland = retirement(67, "Iceland")
// retirementUs(1990)
// retirementGermany(1990)
// retirementIceland(1990)
//     //or
//retirement(66)(1990)


/****************************************************************************
 * Bind, Call, Apply
 */
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ' ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job +
                ' and I\'m ' + this.age + ' years old.')
        } else if (style === 'friendly') {
            console.log('Hey! what\'s up' + ', I\'m a ' + this.job +
                ' and I\'m ' + this.age + ' years old. Have a nice ' +
                timeOfDay + '.')

        }

    }
};

var emily = {
    name: 'Emily',
    age: 36,
    job: 'Nurse'
}
john.presentation('formal', 'morning')
    // john.presentation('friendly', 'evening')

///using call method enables u to call another object's method for a current object
//this is method borrowing
//john.presentation.call(emily, 'friendly', 'morning')

///the call, does not accept a list of arrays so it will not work
//john.presentation.apply(emily, 'friendly', 'morning')
//the bind create a copy of the function. It does not execute immediately
var jonhfriendly = john.presentation.bind(john, 'friendly')
var jonhFormal = john.presentation.bind(emily, 'formal', 'morning')
jonhfriendly('morning')