const { Product } = require('../models/product');

async function getProducts() {
    const result = await Product.find({});
    return result
}

async function getProduct(productId) {
    const result = await Product.findOne({ 'productId': productId }).exec();
    return result;
}

async function getDiscountedProducts() {
    const result = await Product.find({ 'isDiscount': true });
    return result
}

async function deleteProduct(productId) {
    const result = await Product.find({ 'productId': productId, 'isDiscount': true });
    return result
}

async function updateProductStock(productId, stock) {
    const result = await Product.findOneAndUpdate({ 'productId': productId }, { 'stock': stock });
    return result
}

module.exports = {
    getProducts,
    getProduct,
    getDiscountedProducts,
    deleteProduct,
    updateProductStock
}