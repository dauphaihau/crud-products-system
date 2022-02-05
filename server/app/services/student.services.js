const {Student} = require('../model');

let studentList = [
    {
        id: 1,
        name: "John",
        age: 11,
        level: "fresher",
    },
    {
        id: 2,
        name: "Han",
        age: 10,
        level: "Senior"
    },
];

const getList = async () => {
    const studentList = await Student.findAll();
    if (studentList) {
        return studentList;
    } else {
        return false;
    }
}

const getDetail = async (id) => {
    const student = await Student.findOne({
        where: {
            id
        }
    });
    if (student) {
        return student
    } else {
        return false;
    }
    // const index = studentList.findIndex(sd => sd.id == id);
    // if (index !== -1) {
    //     return studentList[index];
    // } else {
    //     return false;
    // }
};

const create = async (student) => {
    // student = {
    //     id: Math.random(),
    //     ...student
    // }
    // studentList = [...studentList, student]
    await Student.create(student);
}

const update = async (id, student) => {
    const studentUpdate = await getDetail(id);
    if (studentUpdate) {
        studentUpdate.name = student.name;
        studentUpdate.age = student.age;
        studentUpdate.level = student.level;
        await studentUpdate.save();
    } else {
        return false;
    }
    // const index = studentList.findIndex(sd => sd.id == id);
    // if (index !== -1) {
    //     const oldStudent = studentList[index];
    //     studentList[index] = {...oldStudent, ...student};
    //     return true;
    // } else {
    //     return false;
    // }
};

const deleteById = async (id) => {
    const studentDelete = await getDetail(id);
    if (studentDelete) {
        await Student.destroy({
            where: {
                id
            }
        });
        return true;
    } else {
        return false;
    }
    // const index = studentList.findIndex(sd => sd.id == id);
    // if (index !== -1) {
    //     studentList.splice(index, 1)
    //     return true;
    // } else {
    //     return false;
    // }
}

module.exports = {
    getList,
    getDetail,
    create,
    update,
    deleteById
};
