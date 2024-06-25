// Import the 'http' module
const http = require('http');
// Create a server instance using the 'createServer' method
const server = http.createServer((request, response) => {
    // The callback function takes two parameters: 'request' and 'response'
    // Set the response HTTP header with a status code of 200 (OK) and Content-Type as text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    // Send the response body with the message "Welcome to our homepage."
    response.end('Welcome to our homepage.');
});
// Specify the port (in this case, 5000) on which the server will listen for incoming requests
const PORT = 5000;
// Start the server and make it listen on the specified port
server.listen(PORT, () => {
    console.log(`Server is running and listening on port ${PORT}`);
});
