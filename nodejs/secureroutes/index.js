let express=require('express')
let cors=require('cors')
let app=express()
app.use(express.json())
app.use(cors())
const route=require('./route/route')

let mongoose=require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/regdetails").then(()=>{
    console.log("connected to database")
})
app.use("/",route)
app.listen(5000,()=>console.log("server started"))

