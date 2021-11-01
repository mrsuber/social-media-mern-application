const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan = require("morgan")
const userRoutes = require("./routes/users")
const authRoutes = require("./routes/auth")
const postRoutes = require("./routes/posts")
const multer = require("multer")
const path = require("path")
//initializing app
const app = express()


//using .dotenv
dotenv.config()

//connecting mongose database
mongoose.connect(process.env.MONGO_URI)
.then(console.log("MongoDB connected"))

app.use("/images",express.static(path.join(__dirname,"public/images")))

//middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))
let name
const storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,"public/images")
  },
  filename:(req,file,cb)=>{
     name = Date.now()+file.originalname
    cb(null,name)
  }
})
const upload = multer({storage});
app.post("/api/upload",upload.single("file"),(req,res)=>{
  try{
    return res.status(200).json(name)
  }catch(err){console.log(err)}
})

//routes

app.use("/api/users",userRoutes)
app.use("/api/auth",authRoutes)
app.use("/api/posts",postRoutes)

app.listen(8800,()=>{
  console.log("Backend server is running")
})
