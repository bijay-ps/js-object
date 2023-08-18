// 1.Object literal method

const person = {
  name: "Bijay",
  age: 32,
  hobbies: ["Reading", "movies"],
  address: {
    street: "xyz street",
    apartment: "abc",
    pincode: 123456,
  },
  greet: function () {
    console.log("Hello");
  },
};

person.age = 30;
console.log(person);

person.greet(); // dot notation for calling the function

person["greet"]();

// 2.Object Contructor Method

let car = new Object();
car.carType = "Sedan";
car.horepower = 500;
car.fuelType = "Petrol";
car.isNew = true;
car.info = {
  seatingCapacity: 5,
  offRoading: true,
};

// console.log(car);

// Accessing properties on Object
// 2 ways
// 1. Dot Notation

// console.log(person.name);

// console.log(person["age"]);

// 2. Using bracket Notation
// console.log(car["carType"]);

// console.log(Object.keys(person));

// console.log(Object.values(person));

// console.log(Object.entries(person));

// console.log(Object.entries(car));

let mathConsts = {
  pi: 3.1415,
};
Object.freeze(mathConsts);
mathConsts.pi = 3.145169;
console.log(mathConsts);

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
Object.assign(obj1, obj2);
console.log(obj1);
