const answerDao = require('../daos/university.dao.server');

module.exports = app => {
    answerQuestion = (req, res) =>
        answerDao.answerQuestion(req.params.sid, req.params.qid, req.body)
            .then(data => res.json(data));

    findAnswerByStudentAndQuestion = (req, res) =>
        answerDao.findAnswerByStudentAndQuestion(req.params.sid, req.params.qid)
            .then(data => res.json(data));

    findAnswerByStudent = (req, res) =>
        answerDao.findAnswerByStudent(req.params.sid)
            .then(data => res.json(data));

    app.post('/api/student/:sid/question/:qid/answer', answerQuestion);
    app.get('/api/student/:sid/question/:qid/answer', findAnswerByStudentAndQuestion);
    app.get('/api/question/:qid/student/:sid/answer', findAnswerByStudentAndQuestion);
    app.get('/api/student/:sid/answer', findAnswerByStudent);
};