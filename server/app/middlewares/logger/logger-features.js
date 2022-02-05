const logFeature = (req, res, next) => {
    console.log('adore to God');
    next();
};

module.exports = {
    logFeature
};
