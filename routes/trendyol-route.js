const router = require("express").Router()
const trendyolService = require("../services/trendyol-service")
const ensureToken = require("../middleware/jwt")
const { Response } = require('../responses')

router.get('/getCategoryAttributes/:categoryId', async function (req, res) {
    try {
        const responseEntity = new Response();
        const { categoryId } = req.params;
        responseEntity.data = await trendyolService.getCategory(categoryId);
        res.status(responseEntity.statusCode).json(responseEntity.data);
    } catch {
        next(e, req, res)
    }
});

router.get('/categories', async function (req, res) {
    try {
        const responseEntity = new Response();
        responseEntity.data = await trendyolService.getCategories();
        res.status(responseEntity.statusCode).json(responseEntity.data);
    } catch (e) {
        next(e, req, res);
    }
});

router.get('/brand/:brandName', async function (req, res) {
    try {
        const responseEntity = new Response();
        const { brandName } = req.params;
        responseEntity.data = await trendyolService.getBrand(brandName);
        res.status(responseEntity.statusCode).json(responseEntity.data);
    } catch (e) {
        next(e, req, res);
    }

});

router.get('/brands', async function (req, res) {
    try {
        const responseEntity = new Response();
        responseEntity.data = await trendyolService.getBrands();
        res.status(responseEntity.statusCode).json(responseEntity.data);
    } catch (e) {
        next(e, req, res);
    }
});

module.exports = router