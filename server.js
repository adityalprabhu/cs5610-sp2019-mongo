var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

require('./data/db')();


var app = express();

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'any string'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin",
        "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

const whiteboardService = require('./services/whiteboard.service.server');
const studentService = require('./services/student.service.server');
const questionService = require('./services/question.service.server');
const answerService = require('./services/answer.service.server');

whiteboardService(app);
studentService(app);
questionService(app);
answerService(app)
app.listen(process.env.PORT || 3000);