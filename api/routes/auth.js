 const router = require("express").Router()
 const {register} = require("../controllers/auth")

 router.get("/register",register)

module.exports = router
