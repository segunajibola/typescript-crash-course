let age: number = 22; // age will be a number
let fullName: string = "Ajibola Segun"; // string
let isDark: boolean = true; // boolean
let hobbies: any = "coding"; // can be any data type

let ids: number[] = [4, 5, 2]; // array of numbers
let store: any[] = [4, "five", 2]; //array of any data types

// Tuple
let person: [number, boolean, string] = [3, true, "Hi"]; // array will contain number, boolean and string in the order

// Tuple Array
let person2: [number, string][]; // array of arrays and will only contain number and string in the order, example below

person2 = [
  [1, "John"],
  [2, "Mike"],
  [3, "Lekan"],
];

// Union
let pid: string | number; // can be string or number
pid = "22";

// Enum
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

// console.log(Direction.Up, Direction.Left); // output = 0, 2

enum Direction1 {
  Up = 2,
  Down,
  Left,
  Right,
}

// console.log(Direction1.Up, Direction1.Left); // output = 2, 4

enum Direction2 {
  Up = "one",
  Down = "two",
  Left = "three",
  Right = "four",
}

// console.log(Direction2.Up, Direction2.Left); // output = one, three

// Objects

type userType = {
  id: number;
  name: string;
}; // specify the type of the user object below

const user: userType = {
  id: 5,
  name: "Segun",
};

// can also be written as this below for user2

const user2: {
  id: number;
  name: string;
} = {
  id: 5,
  name: "Segun",
};

// Type Assertion

let cid: any = "hello"; // cid can be any type
let customerID = <number>cid; // customerID can have cid as a number
let customerID2 = cid as number; // same as above, customerID2 can have cid as a number

// cid can be anything but customerID can only be a number
customerID = cid = 2;

// Functions
function addNum(x: number, y: number): number {
  // parameters can be numbers, the return will be a number.
  return x + y;
}

// Void
function log(message: string | number): void {
  // parameters can be string or number, the return is not specified so it's void. it returns nothing
  console.log(`The message is ${message}`);
}

// log("hello"); // Can be able to pass string or number to log() function // output = "The message is hello"

// Interface
interface userInterface {
  id: number;
  readonly secondid: number;
  name: string;
  age: number;
  state?: "Lagos"; //state is not defined in user3 object, hence "?" else error
} // specify the type of the user3 object below

const user3: userInterface = {
  id: 5,
  secondid: 3,
  name: "Segun",
  age: 3,
};

// user3.secondid = 4 // cannot change value because it is only read-only
user3.age = 4; // can change value of age

type Point = number | string; // type works here
const p1: Point = 2;

// interface Point = number | string  // interface cannot work here
// const p1: Point = 2

// interface with arrow function
interface MathFunc {
  (x: number, y: number): number;
}

// Arrow function
const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// Classes
class Person {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

// Using interface in Classes

interface Person2interface {
  id: number; // id can only be a number
  name: string; // name can only be a string
  register(): string; // register method will return string
}

class Person2 implements Person2interface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

const mike = new Person(2, "mike");

// console.log("mike", mike.id, mike.name, mike.register()); //output = "mike", 2, "mike", "mike is now registered"

// Subclasses
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(2, "Shawn", "Developer");
// console.log(emp.id, emp.name, emp.position, emp.register()) // output = "2 Shawn Developer Shawn is now registered"

// Generics
function getArray<T>(items: T[]): T[] {
  // T is a placeholder for the type,
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]); // number is like the argument, now we can only pass in numbers
let strArray = getArray<string>(["hello", "world"]); // we can only pass string

// console.log(numArray) // output = [1, 2, 3, 4]

strArray.push("2");

// console.log(strArray) // output = [ 'hello', 'world', '2' ]
