const express = require("express")
const routes = require("./routes")
const dotenv = require("dotenv")
const cors = require('cors')
const db = require('./config/db')
const bodyParser = require("body-parser")
var cookieParser = require('cookie-parser')
dotenv.config()


const app = express() 
const port = process.env.PORT || 3001

 
app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())

routes(app);

db.connect();

app.listen(port, ()=>{
    console.log('Server is running in port: ', +port)
})
