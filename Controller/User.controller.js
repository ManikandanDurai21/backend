
const signup =async(req,res)=>{
  try {
const {name,email,moblie,password}=req.body
let data={
  name,
  email,
  moblie,
  password
}
const saveUser= await User.create (data)
 
if(!saveuser){
 return  res.json({status:0,message:"user not created"})
}
res.json({stauts:1,message:"user created successfully"})
    

 } catch (err) {
    console.log('user.controller.js/signUp'/err)
  }

}
module.exports={signup}