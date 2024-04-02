const mongooes =require('mongooes')

const Userschema = mongooes.Schema({
  userName: { type : String , required : true },
  password :{type :String,required:true},
  Mobile:{type:Number,require:true},
  email:{type:String,require:true}


}
)
const User = mongooes.model("User",Userschema);
module.exports=User;