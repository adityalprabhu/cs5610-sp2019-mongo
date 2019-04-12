const questionDao = require('../daos/question.dao.server');

module.exports = app => {
    createQuestion = (req, res) =>
        questionDao.createQuestion(req.body)
            .then(data => res.json(data));

    findAllQuestions = (req, res) =>
        questionDao.findAllQuestions()
            .then(data => res.json(data));

    findQuestionById = (req, res) =>
        questionDao.findQuestionById(req.params.id)
            .then(data => res.json(data));

    updateQuestion = (req, res) =>
        questionDao.updateQuestion(req.params.id, req.body)
            .then(data => res.json(data));

    deleteQuestion = (req, res) =>
        questionDao.deleteQuestion(req.params.id)
            .then(data => res.json(data));


    app.get('/api/question', findAllQuestions);
    app.post('/api/question', createQuestion);
    app.get('/api/question/:id', findQuestionById);
    app.put('/api/question/:id', updateQuestion);
    app.delete('/api/question/:id', deleteQuestion);
};