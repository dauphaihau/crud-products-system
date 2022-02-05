const checkEmpty = (req, res, next) => {
    const {name, level} = req.body;
    if (name && level) {
        next();
    } else {
        res.status(500).send('name or level is require')
    }
}

const checkAge = (req, res, next) => {
    const {age} = req.body;
    if (age >= 1 && age <= 11) {
        next();
    } else {
        res.status(500).send('age number must 1 - 11')
    }
}

module.exports = {
    checkEmpty,
    checkAge
};
