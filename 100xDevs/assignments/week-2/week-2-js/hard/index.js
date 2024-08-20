// index.js
const Todo = require('./Todo');

const todo = new Todo();

todo.add('Buy milk');
todo.add('Walk the dog');
todo.add('Do laundry');

console.log("Initial Todos:");
console.log(todo.getAll()); // Output: ['Buy milk', 'Walk the dog', 'Do laundry']

todo.remove(1);
console.log("Todos after removing one:");
console.log(todo.getAll()); // Output: ['Buy milk', 'Do laundry']

todo.update(0, 'Buy eggs');
console.log("Todos after updating one:");
console.log(todo.getAll()); // Output: ['Buy eggs', 'Do laundry']

console.log("Todo at index 0:");
console.log(todo.get(0)); // Output: 'Buy eggs'

todo.clear();
console.log("Todos after clearing:");
console.log(todo.getAll()); // Output: []