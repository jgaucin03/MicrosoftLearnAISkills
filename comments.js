// Create Web Server 
// Create a Web Server that can listen to requests for /comments and serve a JSON file to the browser.

// The JSON file should contain an array of objects, each object should have a key-value pair like so:

// {"comment": "This is a comment!"}
// You can use the fs module to read from a JSON file. 
// Create a new .json file to store your data.

// Deliverables
// comments.js file
// comments.json file
// index.html file

// Steps to Success
// Create a new folder for your project
// Create a new file called comments.js
// Create a new file called comments.json
// Run npm init -y inside your project folder to create a package.json file
// Run npm install express inside your project folder
// Import the express module
// Create a new express app
// Create a new route for GET requests to "/comments"
// Read the contents of comments.json and send the contents back to the browser
// Listen for incoming requests and log the URL to the console
// Run node comments.js to start your server
// Navigate to localhost:3000/comments in your browser and view the data
// Bonus
// Create a form on index.html with a textarea and a submit button
// When the form is submitted, send a POST request to "/comments"
// Add a body parser to your express app to parse incoming JSON data
// When the server receives a POST request to "/comments", it should add the comment from the POST request body to comments.json
// The new comment should show up when you refresh localhost:3000/comments

const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
    fs.readFile('./comments.json', (err, data) => {
        if (err) throw err;
        let comments = JSON.parse(data);
        res.send(comments);
    });
});

app.post('/comments', (req, res) => {
    fs.readFile('./comments.json', (err, data) => {
        if (err) throw err;
        let comments = JSON.parse(data);
        comments.push(req.body);
        fs.writeFile('./comments.json', JSON.stringify(comments), (err) => {
            if (err) throw err;
            res.send(comments);
                    }
                            );
    });
});
