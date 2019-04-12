const questionModel = require('../data/models/question.model.server');

createQuestion = question =>
    questionModel.create(question);

findAllQuestions = () => questionModel.find();

findQuestionById = questionId => questionModel.findById(questionId);

updateQuestion = (questionId, question) =>
    questionModel.update({_id: questionId}, {$set: question});

deleteQuestion = questionId =>
    questionModel.remove({_id: questionId});

module.exports = {
    findAllQuestions,
    createQuestion,
    findQuestionById,
    updateQuestion,
    deleteQuestion,
};