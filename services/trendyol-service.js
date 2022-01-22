const axios = require('axios');

async function getCategoryAttributes(categoryId) {
    const categoryAttributes = axios.get(`https://api.trendyol.com/sapigw/product-categories/${categoryId}/attributes`)
        .catch(error => {
            return error;
        })
    return categoryAttributes.data;
}

async function getCategories() {
    const categories = axios.get(`https://api.trendyol.com/sapigw/product-categories`)
        .catch(error => {
            return error;
        })
    return categories.data;
}

async function getBrand(brandName) {
    const encodedURL = encodeURI(`https://api.trendyol.com/sapigw/brands/by-name?name=${brandName}`);
    const brand = await axios.get(encodedURL)
        .catch(error => {
            return error;
        })
    return brand.data;
}

async function getBrands() {
    const brands = await axios.get(`https://api.trendyol.com/sapigw/brands`)
        .catch(error => {
            return error;
        })
    return brands.data;
}

module.exports = {
    getCategoryAttributes,
    getCategories,
    getBrand,
    getBrands
}