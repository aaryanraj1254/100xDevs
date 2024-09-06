// Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console

const express = require('express');
const app = express();

const logRequest = (req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
};

app.use(logRequest); 

app.get('/example', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
// listens for GET requests to the /example URL.
// Responds with a "Hello World!" message when a request is made to /example.
// Listens for incoming requests on port 3000.
// Prints a message to the console when the server is successfully listening on port 3000.
// When you run this code, you can open a web browser and navigate to http://localhost:3000/example to see the "Hello World!" response.


// when use axios??
// In summary, use Axios when you need to make HTTP requests from the client-side (e.g., from a web page or mobile app) to a server, and use Express.js route handlers (e.g., app.get(), app.post()) when building a server-side application with Node.js and Express.js.