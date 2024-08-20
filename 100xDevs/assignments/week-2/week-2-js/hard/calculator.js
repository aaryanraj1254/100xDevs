/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/
class Calculator {
  constructor() {
    this.result = 0;
  }

  add(num) {
    this.result += num;
  }

  subtract(num) {
    this.result -= num;
  }

  multiply(num) {
    this.result *= num;
  }

  divide(num) {
    if (num === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result /= num;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    try {
      this.result = eval(expression.replace(/\s+/g, ""));
    } catch (e) {
      throw new Error("Invalid expression");
    }
  }
}

// Create a new Calculator object
const calculator = new Calculator();

// Test the add method
calculator.add(5);
console.log(calculator.getResult()); // Output: 5

// Test the subtract method
calculator.subtract(2);
console.log(calculator.getResult()); // Output: 3

// Test the multiply method
calculator.multiply(3);
console.log(calculator.getResult()); // Output: 9

// Test the divide method
calculator.divide(3);
console.log(calculator.getResult()); // Output: 3

// Test the clear method
calculator.clear();
console.log(calculator.getResult()); // Output: 0

// Test the calculate method
calculator.calculate("10 + 2 * (6 - (4 + 1) / 2) + 7");
console.log(calculator.getResult()); // Output: 24