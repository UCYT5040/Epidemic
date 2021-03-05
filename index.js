var express = require("express"), 
    app = express(), 
    bodyParser = require('body-parser'), 
    port = process.env["PORT"] || 8080; 
var path = require("path") 
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }));
const Database = require("@replit/database")
const db = new Database()
 
 
app.get("/", function(req, res) { 
    res.sendFile(path.join(__dirname, 'views/index.html')); 
}); 

app.get("/contribute", function(req, res) { 
    res.sendFile(path.join(__dirname, 'views/contribute.html')); 
}); 
app.get("/account", function(req, res) { 
    res.sendFile(path.join(__dirname, 'views/account.html')); 
}); 

app.get("/api/account/signup", function(req, res) { 
    req.body.q.email
    res.send("Done!"); 
}); 
 
app.listen(port) 
console.log("listening to server on port:", port); 