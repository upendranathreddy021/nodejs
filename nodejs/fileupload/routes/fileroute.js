let express=require('express')
let {upload,useradd}=require('../controller/filecon')
let route=new express.Router()
route.post("/add",upload.single('img'),useradd)
module.exports=route