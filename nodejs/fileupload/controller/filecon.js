let multer=require('multer')
let filemodel=require('../models/filemodel');
const storage=multer.diskStorage({
    destination:function (req,file,cb){
        cb(null,'../imgupload')
    },
    filename:function(req,file,cb){
        const uniqueSuffix=Date.now()+'-'+Math.round(Math.random()*1E9)
        cb(null,file.originalname+'-'+uniqueSuffix+"."+file.mimetype.split("/")[1])
    }

})
const upload=multer({storage:storage})
let useradd=(req,res)=>{
    let data={...req.body,"pic":req.file.filename}
    let dobj=new filemodel(data)
    dobj.save().then(()=>{
        res.send("details saved successfully")
    }).catch((err)=>console.log(err))
}
module.exports={useradd,upload}
