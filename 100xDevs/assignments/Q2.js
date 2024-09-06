const express = require('express');
const app = express();

let requestCount = 0;

const countRequests = (req, res, next) => {
  requestCount++;
  next();
};

app.use(countRequests);

app.get('/request-count', (req, res) => {
  res.json({ count: requestCount });
});

app.get('/example', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});



// So, when someone visits http://localhost:3000/request-count, this code sends a JSON response with a single property count that contains the current value of requestCount.

// // For example, if requestCount is 5, the response would be: { count: 5 }