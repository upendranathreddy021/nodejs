let express=require('express')
let mongoose=require('mongoose')
let bodyparser=require('body-parser')
const route=require('./routes/fileroute')

let app=express()
mongoose.connect("mongodb://127.0.0.1:27017/filesupload").then(()=>{
    console.log("connected to database")
}).catch((err)=>console.log(err))
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.json())
app.use('/',route)

app.listen(5000,()=>console.log("server started"))