const {Product} = require('../model');

const getList = async () => {
    const productList = await Product.findAll();
    if (productList) {
        return productList;
    } else {
        return false;
    }
}

const getDetail = async (id) => {
    const product = await Product.findOne({
        where: {
            id
        }
    });
    if (product) {
        return product;
    } else {
        return false;
    }
};

const create = async (product) => {
    await Product.create(product);
}

const update = async (id, product) => {
    const productUpdate = await getDetail(id);
    console.log(productUpdate);
    if (productUpdate) {
        productUpdate.name = product.name;
        productUpdate.amount = product.amount;
        productUpdate.price = product.price;
        productUpdate.sale = product.sale;
        await productUpdate.save();
        return true;
    } else {
        return false;
    }
};

const deleteById = async (id) => {
    const productDelete = await getDetail(id);
    if (productDelete) {
        await Product.destroy({
            where: {
                id
            }
        });
        return true;
    } else {
        return false;
    }
}

module.exports = {
    getList,
    getDetail,
    create,
    update,
    deleteById
};
