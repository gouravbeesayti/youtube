import mongoose,{Schema} from "mongoose";

const videoSchema = new Schema(
    {
        videoFile:{
            type:String, // cloudinary url
            required:true,
        },
        thumbnail:{
            type:String, 
            required:true,
        },
        title:{
            type:String, 
            required:true,
        },
        discription:{
            type:String, 
            required:true,
        },
        time:{
            type:Number, 
            required:true,
        },
        duration:{
            type:Number, 
            required:true,
        },
 
    },
    {
        timestamps:true
    }
)

export const Video = mongoose.model("Video",videoSchema)