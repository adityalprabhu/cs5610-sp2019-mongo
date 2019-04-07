const studentDao = require('../daos/university.dao.server')

module.exports = app => {
    createStudent = (req, res) => {

        return studentDao.createStudent(req.body)
            .then(data => res.json(data));

    };

    findAllStudents = (req, res) =>
        studentDao.findAllStudents()
            .then(data => res.json(data));

    findStudentById = (req, res) =>
        studentDao.findStudentById(req.params.id)
            .then(data => res.json(data));

    updateStudent = (req, res) =>
        studentDao.updateStudent(req.params.id, req.body)
            .then(data => res.json(data));

    deleteStudent = (req, res) =>
        studentDao.deleteStudent(req.params.id)
            .then(data => res.json(data));


    app.get('/api/student', findAllStudents);
    app.post('/api/student', createStudent);
    app.get('/api/student/:id', findStudentById);
    app.put('/api/student/:id', updateStudent);
    app.delete('/api/student/:id', deleteStudent);
};