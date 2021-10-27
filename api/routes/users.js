const router = require("express").Router()
const {updateuser} = require("../controllers/users")


router.put("/:id",updateuser)

module.exports=router
