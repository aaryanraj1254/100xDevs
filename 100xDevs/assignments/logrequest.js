const logrequest=(req,res,next)=>{
    const timestamp=new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.url}`);
    next();
}


// Line 1: const logrequest = (req, res, next) => {

// We're defining a function called logRequest. This function takes three arguments: req, res, and next.
// req stands for "request", which represents the incoming request from the client (e.g., a web browser).
// res stands for "response", which represents the response that will be sent back to the client.
// next is a function that allows us to pass control to the next middleware function or the route handler.
// Line 2: const timestamp = new Date().toISOString();

// We're creating a new variable called timestamp.
// We're using the new Date() constructor to get the current date and time.
// We're calling the toISOString() method on the Date object to convert the date and time into a string in ISO format (e.g., 2023-02-20T14:30:00.000Z).
// Line 3: console.log([${timestamp}] ${req.method} ${req.url});

// We're using the console.log() function to print a message to the console.
// The message includes three parts:
// [${timestamp}]: We're including the timestamp we created earlier, surrounded by square brackets.
// ${req.method}: We're including the HTTP method of the incoming request (e.g., GET, POST, etc.).
// ${req.url}: We're including the URL of the incoming request.
// Line 4: next();

// We're calling the next() function to pass control to the next middleware function or the route handler.
// This allows the request to continue processing and eventually reach the route handler that will respond to the request.