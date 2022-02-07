const checkEmpty = (req, res, next) => {
    const {name, amount, price, sale} = req.body;
    if (name && amount && price && sale) {
        next();
    } else {
        res.status(500).send('name or level is require')
    }
}
module.exports = {
    checkEmpty,
    checkAge
};
