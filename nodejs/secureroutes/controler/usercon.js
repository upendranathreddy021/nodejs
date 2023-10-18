let express=require('express')
let bcrypt=require('bcrypt')
let regmodel=require('../model/detailmodel')
let jwt=require('jsonwebtoken')

let reg= async (req,res)=>{
let hcode=await bcrypt.hash(req.body.password,10)
let data={...req.body,"password":hcode}
let detail=new regmodel(data)
detail.save().then(()=>res.send("registration successfull")).catch((err)=>console.log(err))

}

let login= async (req,res)=>{
let mail=await regmodel.findById({"_id":req.body._id})

if(mail){
let hcode= await bcrypt.compare(req.body.password,mail.password)
if(hcode){
    let token=await jwt.sign({"_id":req.body._id},"abcd")
    res.send(token)
}
else{
    res.send("password is invalid")
}

}
else{
    res.send("email invalid")
}
}

let islogin= async(req,res,next)=>{
  try{
    await jwt.verify(req.headers.authorization,"abcd")
    next()
  }
  catch(err){
res.send("invalid token")
  }

}
let getdet= async(req,res)=>{
    let id=req.params.id
    let data= await regmodel.findById({"_id":id})
    if(data!=0){
        res.send(data)
        console.log(req.params.id)
    }
    else{
        res.send("invalid id")
    }
}
module.exports={getdet,reg,login,islogin}