const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const colors = require('colors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

//dotenv config
dotenv.config() //dotenv file are in root otherwise to dotenv.config({path:'file_path'})

//router import
const userRoutes = require('./routes/userRoutes')
const blogRoutes = require('./routes/blogRoutes')

//mongodb connection
connectDB();

//rest object
const app = express()

//middelwares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


//routes
app.use('/api/v1/user', userRoutes)
app.use('/api/v1/blog', blogRoutes)

//port 
const PORT = process.env.PORT || 8080
//listen
app.listen(PORT, () => {
    console.log(`Server running on ${process.env.DEV_MODE} port no ${PORT}`.bgCyan.white)
})