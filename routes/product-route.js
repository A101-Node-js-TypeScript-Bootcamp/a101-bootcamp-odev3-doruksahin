const router = require("express").Router()
const productService = require("../services/product-service")
const { Response } = require('../responses')

router.get('/', async function (req, res) {
    try {
        const responseEntity = new Response();
        responseEntity.data = await productService.getProducts();
        res.status(responseEntity.statusCode).json(responseEntity.data);
    } catch (e) {
        next(e, req, res);
    }
});

router.get('/:productId', async function (req, res) {
    try {
        const responseEntity = new Response();
        const { productId } = req.params;
        responseEntity.data = await productService.getProduct(productId);
        res.status(responseEntity.statusCode).json(responseEntity.data);
    } catch (e) {
        next(e, req, res);
    }
});

router.get('/', async function (req, res) {
    try {
        const responseEntity = new Response();
        responseEntity.data = await productService.getDiscountedProducts();
        res.status(responseEntity.statusCode).json(responseEntity.data);
    } catch (e) {
        next(e, req, res);
    }
});

router.delete('/:productId', async function (req, res) {
    try {
        const responseEntity = new Response();
        const { productId } = req.params;
        responseEntity.data = await productService.deleteProduct(productId);
        res.status(responseEntity.statusCode).json(responseEntity.data);
    } catch (e) {
        next(e, req, res);
    }
});

router.update('/:productId/stock', async function (req, res) {
    try {
        const responseEntity = new Response();
        const { productId } = req.params;
        const { stock } = req.body;
        responseEntity.data = await productService.updateProductStock(productId, stock);
        res.status(responseEntity.statusCode).json(responseEntity.data);
    } catch (e) {
        next(e, req, res);
    }
});

module.exports = router