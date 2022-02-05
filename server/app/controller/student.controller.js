const {create, getDetail, getList, update, deleteById} = require("../services/student.services");

const getStudentList = async (req, res) => {
    const studentList = await getList();
    if (studentList) {
        res.status(200).send(studentList)
    } else {
        res.status(404).send('Not Found!')
    }
}

const getDetailStudent = async (req, res) => {
    const student = await getDetail(req.params.id)
    if (student) {
        res.status(200).send(student)
    } else {
        res.status(404).send('not found')
    }
}

const createStudent = async (req, res) => {
    let student = req.body;
    await create(student);
    res.status(201).send('add student successfully')
}

const updateStudent = async (req, res) => {
    const student = await update(req.params.id, req.body);
    if (student) {
        res.status(200).send('updated student successfully')
    } else {
        res.status(404).send('not found!')
    }
};

const deleteStudent = async ({params}, res) => {
    const studentDeleted = await deleteById(params.id)
    if (studentDeleted) {
        res.status(200).send(`Student ${params.id} has been deleted `)
    } else {
        res.status(404).send('Not Found!')
    }
};

module.exports = {
    getStudentList,
    getDetailStudent,
    createStudent,
    updateStudent,
    deleteStudent
};
