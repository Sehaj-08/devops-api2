const express = require("express")
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 8000
const healthroute = require("./routes/health.js")
app.use(express.json());
app.get("/" , (req,res) => {
    res.json({
            message : "Dev-api2 is running"
    })
})


app.use("/api" , healthroute)
app.listen(PORT , "127.0.0.1" , ()=>{
    console.log(`Server is running on port ${PORT}`)
})