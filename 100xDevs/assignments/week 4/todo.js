const fs = require('fs');
const { Command } = require('commander');

const program = new Command();

let todos = [];

// Load existing todos from file
try {
  const data = fs.readFileSync('todos.json', 'utf8');
  todos = JSON.parse(data);
} catch (err) {
  // If file doesn't exist, create an empty array
  todos = [];
}

program
  .name('todo-cli')
  .description('Filesystem-based todo list CLI')
  .version('1.0.0');

program.command('add <todo>')
  .description('Add a new todo')
  .action((todo) => {
    todos.push({ text: todo, done: false });
    saveTodos();
    console.log(`Todo added: ${todo}`);
  });

program.command('delete <index>')
  .description('Delete a todo by index')
  .action((index) => {
    const idx = parseInt(index);
    if (idx >= 0 && idx < todos.length) {
      todos.splice(idx, 1);
      saveTodos();
      console.log(`Todo deleted at index ${idx}`);
    } else {
      console.log(`Invalid index: ${idx}`);
    }
  });

program.command('done <index>')
  .description('Mark a todo as done by index')
  .action((index) => {
    const idx = parseInt(index);
    if (idx >= 0 && idx < todos.length) {
      todos[idx].done = true;
      saveTodos();
      console.log(`Todo marked as done at index ${idx}`);
    } else {
      console.log(`Invalid index: ${idx}`);
    }
  });

program.parse();

function saveTodos() {
  fs.writeFileSync('todos.json', JSON.stringify(todos, null, 2));
}