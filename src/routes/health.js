const express = require("express")

const router = express.Router();

router.get("/health" , (req,res) => {
    res.json({
        message :"Helath chekc for dev-api2"
    })
})

module.exports = router