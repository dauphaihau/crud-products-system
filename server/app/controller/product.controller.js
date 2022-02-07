const {create, getDetail, getList, update, deleteById} = require("../services/product.services");

const getProductList = async (req, res) => {
    const studentList = await getList();
    if (studentList) {
        res.status(200).send(studentList)
    } else {
        res.status(404).send('Not Found!')
    }
}

const getDetailProduct = async (req, res) => {
    const product = await getDetail(req.params.id)
    if (product) {
        res.status(200).send(product)
    } else {
        res.status(404).send('not found')
    }
}

const createProduct = async (req, res) => {
    let product = req.body;
    await create(product);
    res.status(201).send('add product successfully')
}

const updateProduct = async (req, res) => {
    const product = await update(req.params.id, req.body);
    if (product) {
        res.status(200).send('updated product successfully')
    } else {
        res.status(404).send('not found!')
    }
};

const deleteProduct = async ({params}, res) => {
    const studentDeleted = await deleteById(params.id)
    if (studentDeleted) {
        res.status(200).send(`Product ${params.id} has been deleted `)
    } else {
        res.status(404).send('Not Found!')
    }
};

module.exports = {
    getProductList,
    getDetailProduct,
    createProduct,
    updateProduct,
    deleteProduct
};
