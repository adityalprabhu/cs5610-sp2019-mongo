const studentModel = require('../data/models/student.model.server');
const questionModel = require('../data/models/question.model.server');
const answerModel = require('../data/models/answer.model.server');

createUser = user => userModel.create(user);

truncateDatabase = () =>

    answerModel.remove()
        .then(res => {
            return questionModel.remove()
    })
    .then(res => {
        return studentModel.remove()
    });


populateDatabase = () => {
    const students = [
        {
            "_id" : 123,
            "firstName": "Alice",
            "lastName": "Wonderland",
            "username": "alice",
            "password": "alice",
            "gradYear": 2020,
            "scholarship": 15000
        },
        {
            "_id": 234,
            "firstName": "Bob",
            "lastName": "Hope",
            "username": "bob",
            "password": "bob",
            "gradYear": 2021,
            "scholarship": 12000
        }
    ];

    const questions = [
        {
            "_id": 321,
            "question": "Is the following schema valid?",
            "points": 10,
            "questionType": "TRUE_FALSE",
            "isTrue": false,
            "correct":""
        },
        {
            "_id": 432,
            "question": "DAO stands for Dynamic Access Object",
            "points": 10,
            "questionType": "TRUE_FALSE",
            "isTrue": false,
            "correct":""
        },
        {
            "_id": 543,
            "question": "What does JPA stand for?",
            "points": 10,
            "questionType": "MULTIPLE_CHOICE",
            "isTrue":"",
            "choices":"Java Persistence API,Java Persisted Application,JavaScript Persistence API,JSON Persistent Associations",
            "correct":1
        },
        {
            "_id": 654,
            "question": "What does ORM stand for?",
            "points": 10,
            "questionType": "MULTIPLE_CHOICE",
            "isTrue": "",
            "choices": "Object Relational Model,Object Relative Markup,Object Reflexive Model,Object Relational Mapping",
            "correct":4
        }
    ];

    const answers = [
        {
            "_id" : 123,
            "student": 123,
            "question": 321,
            "trueFalseAnswer": true,
            "multipleChoiceAnswer":0
        },
        {
            "_id" : 234,
            "student": 123,
            "question": 432,
            "trueFalseAnswer": false,
            "multipleChoiceAnswer":0
        },
        {
            "_id" : 345,
            "student": 123,
            "question": 543,
            "trueFalseAnswer": null,
            "multipleChoiceAnswer": 1
        },
        {
            "_id" : 456,
            "student": 123,
            "question": 654,
            "trueFalseAnswer": null,
            "multipleChoiceAnswer": 2
        },
        {
            "_id" : 567,
            "student": 234,
            "question":321,
            "trueFalseAnswer": false,
            "multipleChoiceAnswer": null
        },
        {
            "_id" : 678,
            "student": 234,
            "question": 432,
            "trueFalseAnswer": true,
            "multipleChoiceAnswer": null
        },
        {
            "_id" : 789,
            "student": 234,
            "question": 543,
            "trueFalseAnswer": null,
            "multipleChoiceAnswer": 3
        },
        {
            "_id": 890,
            "student": 234,
            "question": 654,
            "trueFalseAnswer": null,
            "multipleChoiceAnswer": 4
        }
    ];


    studentModel.insertMany(students)
        .then(res => {
            return questionModel.insertMany(questions)
    })
        .then(res => {
            return answerModel.insertMany(answers)
        });

    };

createStudent = student =>
{
    console.log(student);
    return studentModel.create(student);
};

findAllStudents = () =>  studentModel.find();

findStudentById = studentId => studentModel.findById(studentId);

updateStudent = (studentId, student) =>
    studentModel.update({_id: studentId}, {$set: student});

deleteStudent = studentId =>
    studentModel.remove({_id: studentId});

createQuestion = question =>
    questionModel.create(question);

findAllQuestions = () => questionModel.find();

findQuestionById = questionId => questionModel.findById(questionId);

updateQuestion = (questionId, question) =>
    questionModel.update({_id: questionId}, {$set: question});

deleteQuestion = questionId =>
    questionModel.remove({_id: questionId});

answerQuestion = (studentId, questionId, answer) =>
    answerModel.create(answer);

findAllAnswers = () => answerModel.find();

findAnswerById = answerId => answerModel.findById(answerId);

findAnswerByStudent = studentId => answerModel.find({student: studentId});

findAnswerByQuestion = questionId => answerModel.find({questionId: questionId});

findAnswerByStudentAndQuestion = (studentId, questionId) => answerModel.find({student: studentId}).find({question: questionId});


module.exports = {
    truncateDatabase,
    populateDatabase,
    createStudent,
    findAllStudents,
    findStudentById,
    updateStudent,
    deleteStudent,
    findAllQuestions,
    createQuestion,
    findQuestionById,
    updateQuestion,
    deleteQuestion,
    answerQuestion,
    findAllAnswers,
    findAnswerById,
    findAnswerByStudent,
    findAnswerByQuestion,
    findAnswerByStudentAndQuestion
};