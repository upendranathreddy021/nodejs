let express=require('express')
let {getdet,login,islogin,reg}=require('../controler/usercon')

let route=express.Router()
route.post("/reg",reg)
route.post("/login",login)
route.get("/getdet/:id",islogin,getdet)
module.exports=route