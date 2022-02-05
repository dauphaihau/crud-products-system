const express = require('express');
const {
    getDetailStudent,
    deleteStudent,
    updateStudent,
    createStudent,
    getStudentList
} = require("../controller/student.controller");
const {checkEmpty, checkAge} = require("../middlewares/validations/student.validation");
const {logFeature} = require("../middlewares/logger/logger-features");

const studentRouter = express.Router();

// http://localhost:1111/students
studentRouter.get(
    '/',
    (req, res, next) => {
        console.log('Middleware 1');
        next();
    },
    (req, res, next) => {
        console.log('Middleware 2');
        next();
    },
    getStudentList
)

// get detail student
studentRouter.get(
    '/:id',
    logFeature, // middleware
    getDetailStudent
)

// create
studentRouter.post('/', checkEmpty, checkAge, createStudent)

// update
studentRouter.put('/:id', updateStudent)

// delete
studentRouter.delete('/:id', deleteStudent)

module.exports = studentRouter;
