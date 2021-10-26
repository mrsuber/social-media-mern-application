const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan = require("morgan")
const userRoutes = require("./routes/users")
const authRoutes = require("./routes/auth")
//initializing app
const app = express()


//using .dotenv
dotenv.config()

//connecting mongose database
mongoose.connect(process.env.MONGO_URI)
.then(console.log("MongoDB connected"))

//middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

//routes

app.use("/api/users",userRoutes)
app.use("/api/auth",authRoutes)

app.listen(8800,()=>{
  console.log("Backend server is running")
})
