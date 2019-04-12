const answerModel = require('../data/models/answer.model.server');

answerQuestion = (studentId, questionId, answer) =>
    answerModel.create(answer);

findAllAnswers = () => answerModel.find();

findAnswerById = answerId => answerModel.findById(answerId);

findAnswerByStudent = studentId => answerModel.find({student: studentId});

findAnswerByQuestion = questionId => answerModel.find({questionId: questionId});

findAnswerByStudentAndQuestion = (studentId, questionId) => answerModel.find({student: studentId}).find({question: questionId});


module.exports = {
    answerQuestion,
    findAllAnswers,
    findAnswerById,
    findAnswerByStudent,
    findAnswerByQuestion,
    findAnswerByStudentAndQuestion
};