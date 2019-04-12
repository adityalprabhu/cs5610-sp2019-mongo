const studentModel = require('../data/models/student.model.server');

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

module.exports = {
    createStudent,
    findAllStudents,
    findStudentById,
    updateStudent,
    deleteStudent
};