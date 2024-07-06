import mongoose ,{Schema}from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
const userSchema = new Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            
        },
        fullname:{
            type:String,
            required:true,
            trim:true,
            index:true
        },
        avatar:{
            type:String,  //cloudinary url
            required:true,
        },
        coverImage:{
            type:String,
        },
        watchHistory:[
            {
                type:Schema.Types.ObjectId,
                ref:"Video"
            }
        ],
        password:{
            type:String,
            reuired:[true,'Password is required'],
        },
        refreshTokens:{
            type:String
        }
        
    },
    {
        timestamps:true
    }
)

// password encryppt using bcrypt 
userSchema.pre("save",async function(next){
    if(!this.isModified("password"))return next() //kya password modify hua hein

    this.password = bcrypt.hash(this.password,10)
    next()

})
userSchema.methods.isPasswordCorrect= async function(password){ //for check password is same or not
   return await bcrypt.compare(password,this.password)
}

// jwt token 
userSchema.method.generateAccessToken=function(){
    return jwt.sign(
        {
            _id:this._id,   // _id alredy saved in the database(mongodb) so we access by this keyword
            email:this.email,
            username:this.username,
            fullname:this.fullname

    },
    process.env.ACCESS_TOKEN_SECRET,{
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }

)
}
// only id is store in the refresh token becuse it will refresh agin ang again 
userSchema.method.generateRefreshToken=function(){
    return jwt(
        {
            _id:this._id,   // _id alredy saved in the database(mongodb) so we access by this keyword
    },
    process.env.REFRESH_TOKEN_SECRET,{
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    })
}
export const User = mongoose.model("User",userSchema) 

