const express = require("express")
const logger = require("../logger")
const router = express.Router();

router.get("/health" , (req,res) => {
    logger.info({ip:req.ip} , "Health route of devapi2 accessed")
    res.json({
        message :"Helath chekc for dev-api2"
    })
})

module.exports = router