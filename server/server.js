const {mongoose} = require('./db/mongoose');
const {todoModel} = require('./models/todo');
const {userModel} = require('./models/user');
// library
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json()); //middleware to convert the body into an object
app.post('/create1', (request, response) => {
    const todoInstance = new todoModel({
        text: request.body.text
    });
    todoInstance.save().then((docs) => {
        response.status(200).send(docs);
    }, (err) => {
        response.status(400).send(err);
    });
});

app.listen(4000, () => {
    console.log("Server Started");
});