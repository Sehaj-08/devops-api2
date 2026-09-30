require('dotenv').config();
const express = require("express")
const logger = require("./logger")
const app = express();
const PORT = process.env.PORT || 8000
const healthroute = require("./routes/health.js")
app.use(express.json());
app.get("/" , (req,res) => {
    logger.info({ip : req.ip} , "Root route accessed")
    res.json({
            message : "Dev-api2 is running"
    })
})


app.use("/api" , healthroute)
app.listen(PORT , "127.0.0.1" , ()=>{
    logger.info(`Server is running on port ${PORT}`)
})