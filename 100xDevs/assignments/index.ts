//hello world
function greet(firstname:string){
     console.log("Hello"+firstname)
}
greet("aaryan"); 
//sum of 2 functions
functions sum(a:number,b:number){
    return a+b
}
let ans=sum(1,2);

console.log(ans);
//true or false
function isLegal(age:number){
    if(age>18){
        return true;
    }else{
        return false;
    }
    console.log(isLegal(2));
}
//q4
function delayedCall(fn: () => void) {
    setTimeout(fn, 1000);
}

delayedCall(function() {
    console.log("hi there");
})

let greet=()=>{
    console.log("hi there")
}

function greet(user:{
    name:string,
    age:number
    adress:{
        streetname:string,
        country:string,
    }
}) {
    console.log("hello"+user.firstname)
}

greet({
     name:"harkirat",
     age:21
})

//interfaces
const user={
    firstname:"aaryan",
    lastname:"raj",
    email:aaryanraj2359@gmail.com,
    age:19
}
interface User:{//type to the user object we use interface
    firstname:string,
    lastname:string,
    email:string,
    age:number,
}

interface User{
    firstname:string,
    lastname:string,
    email:string,
    age:number
}
function isLegal(user:User){
    is(user.age>18){
        return true
    }
    else{
        return false;
    }
}
interface Person{
    name:string,
    age:number,
    greet(phrase:string):void
}


// Todo.tsx
interface TodoType {
  title: string;
  description: string;
  done: boolean;
}

interface TodoInput {
  todo: TodoType;
}

function Todo({ todo }: TodoInput) {
  return <div>
    <h1>{todo.title}</h1>
    <h2>{todo.description}</h2>
    
  </div>
}
he TodoType interface defines what a todo item should look like (with a title, description, and done status).
The TodoInput interface defines what the Todo function expects as input (an object containing a todo).
The Todo function takes a todo and displays its title and description in a structured format (HTML).



What is an interface?
In TypeScript, an interface is like a contract or blueprint. It defines what properties and methods a class should have, but it doesn't provide the actual code for those methods.

Here's the Person interface:

typescript
Copy code
interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}
name: The Person must have a name which is a string.
age: The Person must have an age which is a number.
greet: The Person must have a greet method, which takes a string (phrase) and doesn't return anything (void).
What is a class?
A class is a way to define a template for creating objects. It can have properties (like name and age) and methods (like greet).

The Employee class:
typescript
Copy code
class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}
The class Employee implements the Person interface. This means it must have the same properties (name, age) and methods (greet) that the Person interface defines.

constructor(n: string, a: number): This is a special method used to create a new instance of Employee. When you create an Employee, you need to pass a name (n) and an age (a), which will be stored in the class.

greet(phrase: string): This is a method that takes a phrase (a string) as an argument, and it prints out a message like Hello John (if the name of the Employee is John).


const employee = new Employee("Alice", 30);
employee.greet("Hello");  // Output: "Hello Alice"
const employee = new Employee("Alice", 30); creates a new Employee object named Alice who is 30 years old.
employee.greet("Hello"); calls the greet method, which prints Hello Alice to the console.
Summary:
Interface: Defines the structure (what properties and methods an object should have).
Class: Implements the structure and provides the actual behavior (like how greet works).
Employee class implements the Person interface, meaning it must have a name, age, and greet method.

//arrys in ts
// Given an array of positive integers as input, return the maximum value in the array

fuction maxValue(arr:number[])
  let max=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i]
    }
    return max;
  }
  console.log(maxValue([1,2,3]));

//legal

interface User{
    firstName:string;
    lastName:string,
    age:number,
}

interface User {
	firstName: string;
	lastName: string;
	age: number;
}

function filteredUsers(users: User[]) {
    return users.filter(x => x.age >= 18);
}

console.log(filteredUsers([{
    firstName: "harkirat",
    lastName: "Singh",
    age: 21
}, {
    firstName: "Raman",
    lastName: "Singh",
    age: 16
}, ]));

//enum
enum Day{
    Sunday,
    Monday,
    Tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
}
function isWeekend(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend";
    } else {
        return "Weekday";
    }
}
console.log(isWeekend(Day.Monday));  
console.log(isWeekend(Day.Saturday)); 

2.
enum TrafficLight {
    red,
    yellow,
    green
}

function getAction(color: TrafficLight): string {
    switch (color) {
        case TrafficLight.red:
            return "Stop";
        case TrafficLight.yellow:
            return "Get Ready";
        case TrafficLight.green:
            return "Go";
        default:
            return "Invalid color";
    }
}

console.log(getAction(TrafficLight.red));    // Output: "Stop"
console.log(getAction(TrafficLight.yellow)); // Output: "Get Ready"
console.log(getAction(TrafficLight.green));  // Output: "Go"

// Union and intersection practice
function processValue(value:string |number):number{
    if(typeof value==="string"){
        return value.length;
    }
    else{
        return value*2;
    }
console.log(processValue("Hello"));
console.log(processValue(10));
}
//intersection
interface Person{
    name:Aaryan,
    age:number;
}
interface Employee{
    employeeId:number;
    department:string;
}

type Employeedetails=Person &Employee={
    name:"John Doe",
    age:"19",
    employeeId:113,
    department:"HR"
};
console.log(employee);



//generics
Generics in TypeScript provide a way to create reusable and flexible components that can work with different data types. They allow you to write functions, classes, and interfaces that operate on various types while ensuring type safety. Essentially, generics enable you to create code that can handle multiple types without losing the benefits of TypeScript's strong type checking.

In short, generics let you define components that are more versatile and adaptable, reducing the need for repetitive code and making your codebase more maintainable and robust.

// q:Create a generic function called pair that takes two arguments of different types and returns them as a tuple

function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}
console.log(pair<string, number>("Age", 30));
console.log(pair<boolean, string>(true, "Success")); 
