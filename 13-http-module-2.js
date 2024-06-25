// Import the 'http' module
const http = require('http');
// Create a server instance using the 'createServer' method
const server = http.createServer((request, response) => {
    if (request.url === '/') {
        // Serve the homepage content
        response.end("Welcome to our homepage!");
    } else if (request.url === '/about') {
        // Serve the about page content
        response.end("Here's our about page story so far.");
    } else {
        // Handle requests for pages that don't exist
        response.end("<h1>Oops!</h1> <p>The page you're looking for doesn't exist.</p><a href='/'>Back home</a>");
    }
    
});
// Specify the port (in this case, 5000) on which the server will listen for incoming requests
const PORT = 5000;
// Start the server and make it listen on the specified port
server.listen(PORT, () => {
    console.log(`Server is running and listening on port ${PORT}`);
});
