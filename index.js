const express = require( 'express' );
const mongooes = require('mongoose');
const cors =  require('cors')
const UserRoutes=require('./Routes/user.routes.js')

const PORT = 8000
const app = express()
app.use(express.json())
app.use(cors())
app.use('/',UserRoutes)

const URL ="mongodb+srv://Manikandan:Manikandan@cluster0.3rt9lpr.mongodb.net/"
mongooes.connect(URL).then(()=>{
    app.listen(PORT,()=>{
console.log(`server is running in ${PORT}`)
console.log('MongoDB connected')
    })
}).catch((err)=>{
    console.log("error")
})