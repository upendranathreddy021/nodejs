let mongoose=require('mongoose')
let filemodel=new mongoose.Schema({
    "_id":String,"name":String,"pic":String,"dob":String
})
module.exports=mongoose.model("fileuploads",filemodel)