const router = require("express").Router()
const {userpage} = require("../controllers/users")


router.get("/",userpage)

module.exports=router
