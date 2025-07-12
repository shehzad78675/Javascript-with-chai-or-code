// singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const jsUser = {
    name: "Shehzad",
    "full name": "Shehzad Muhammad",
    [mySym]: "mykey1",
    age: 23,
    email: 'abc@gmail.com',
    isLoggedIn: false
};

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser[mySym])
console.log(jsUser["full name"])

jsUser.email = "new@gmail.com";
// Object.freeze(jsUser);
jsUser.age = 18;
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Js user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello Js user ${this.name}`);
}

console.log(jsUser.greeting);
console.log(jsUser.greeting());

jsUser.greetingTwo();

// const tinderUser = new Object(); // singleton object

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Ali";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
    email: "cb@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Hamza",
            lastname: "Ali"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4:"b"};

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign(obj1, obj2);
// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = {...obj1, ...obj2}; // spread operator

console.log(obj3); 

console.log(Object.keys(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));

 

// Object destructure
const course = {
    coursename: "Js in hindi",
    prise: "999",
    courseInstructor: "Shehzad"
}

// const {courseInstructor} = course;

// console.log(courseInstructor);

const {courseInstructor: instructor} = course;
 
console.log(instructor);