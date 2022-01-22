const router = require("express").Router()
const userRouter = require("./user-route")
const trendyolRouter = require("./trendyol-route")
router.use('/user', userRouter);
router.use('/trendyol', trendyolRouter);

module.exports = router;