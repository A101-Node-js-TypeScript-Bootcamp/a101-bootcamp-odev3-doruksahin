const router = require("express").Router()
const userRouter = require("./user-route")
const trendyolRouter = require("./trendyol-route")
const productRouter = require("./product-route")

router.use('/user', userRouter);
router.use('/trendyol', trendyolRouter);
router.use('/product', productRouter);


module.exports = router;