let mongoose=require('mongoose')
let detail=new mongoose.Schema({
    "_id":String,"password":String,"name":String
})
module.exports=mongoose.model("regdetails",detail)