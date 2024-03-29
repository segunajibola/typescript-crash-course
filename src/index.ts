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

// Enum - allows us to define a set of named constant, numeric or string

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

const ADMIN = 'admin'
const READ_ONLY = 'read-only'


enum Permissions1 {
    ADMIN,
    READ_ONLY
}

// Research Permissions without 1 - is it a keyword

const you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    permissions: Permissions1.ADMIN,
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

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


// SCRIMBA

function addFunc(firstValue : (number | string), secondValue: (number | string)) {
  let result
  if (typeof firstValue === 'number' && typeof secondValue === 'number') {
      result = firstValue + secondValue
  }
  if (typeof firstValue === 'string' && typeof secondValue === 'string') {
      result = firstValue + ' ' + secondValue
  }
  if (typeof firstValue === 'number' && typeof secondValue === 'string') {
      console.log('cannot perform this addition')
  }
  if (typeof firstValue === 'string' && typeof secondValue === 'number') {
      console.log('cannot perform this addition')
  }
}

const combinedReviews = addFunc(5,1)
const firstNameLastName = addFunc('Ania', 'Kubow')


// Any type

// Reviews
const reviews : (
  {
  name: string;
  stars: number;
  loyaltyUser: string;
  date: string;   
} |
{
  name: string;
  stars: number;
  loyaltyUser: string;
  date: string;
  description: string;
}
)[]= [
  {
      name: 'Sheia',
      stars: 5,
      loyaltyUser: "GOLD_USER",
      date: '01-04-2021'
  },
  {
      name: 'Andrzej',
      stars: 3,
      loyaltyUser: "BRONZE_USER",
      date: '28-03-2021'
  },
  {
      name: 'Omar',
      stars: 4,
      loyaltyUser: "SILVER_USER",
      date: '27-03-2021',
      description: 'Great hosts, location was a bit further than said',
  },
]

// Alias type
type Price = 45 | 30 | 25
type Country = 'Colombia' | 'Poland' | 'United Kingdom'

// Array of Properties
const properties : {
    image: string;
    title: string;
    price: Price;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: Country;
    };
    contact: [ number, string ];
    isAvailable: boolean;
}[] = [
    {
        image: 'images/colombia-property.jpg',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contact: [+112343823978921, 'marywinkle@gmail.com'],
        isAvailable: true  
    },
    {
        image: 'images/poland-property.jpg',
        title: 'Polish Cottage',
        price: 30,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
        },
        contact: [+1298239028490830, 'garydavis@hotmail.com'],
        isAvailable: false 
    },
    {
        image: 'images/london-property.jpg',
        title: 'London Flat',
        price: 25,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'United Kingdom',
        },
        contact: [+34829374892553, 'andyluger@aol.com'],
        isAvailable: true
    }
]

// Function type
function addSome( firstValue: number, secondValue: number ) : number {
  return firstValue + secondValue
}

// As the function return type is undefined, it should return undefined

// export function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser) : undefined {
//   const iconDisplay = LoyaltyUser.GOLD_USER ? '⭐' : ''
//   reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay
//   return undefined
// }
