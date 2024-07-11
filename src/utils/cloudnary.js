import { v2 as cloudinary } from 'cloudinary';
import {fs} from "fs"
cloudinary.config({ 
             cloud_name: process.env.CLAUDNARY_API_NAME, 
             api_key:process.env.CLAUDNARY_API_KEY , 
             api_secret: process.env.CLAUDNARY_API_SECRET // Click 'View Credentials' below to copy your API secret
     });

     const uploadOnClaudnary =async (localFilePath)=>{
        try{
            if(!localFilePath)return null
            //upload the file on claudnary
           const response= await cloudinary.uploader.upload(localFilePath,{
                resource_type:"auto"
            })
            //filehas been uploaded successfull
            console.log("file is uploadded on cloudnary",response.url)
            return response;

        } catch(error){
            fs.unlinkSync(localFilePath) //remove the locally saved temporary file as the uploaded operation got failed
            return null;
        }
     }
// cloudinary.v2.uploader.upload(
//            'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
//                public_id: 'shoes',
//            },
//            function(error,result ){console.log(result)}
//        )





// (async function() {

//     // Configuration
//     cloudinary.config({ 
//         cloud_name: 'doceteniy', 
//         api_key: '895718229399437', 
//         api_secret: '<your_api_secret>' // Click 'View Credentials' below to copy your API secret
//     });
    
//     // Upload an image
//      const uploadResult = await cloudinary.uploader
//        .upload(
//            'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
//                public_id: 'shoes',
//            }
//        )
//        .catch((error) => {
//            console.log(error);
//        });
    
//     console.log(uploadResult);
    
//     // Optimize delivery by resizing and applying auto-format and auto-quality
//     const optimizeUrl = cloudinary.url('shoes', {
//         fetch_format: 'auto',
//         quality: 'auto'
//     });
    
//     console.log(optimizeUrl);
    
//     // Transform the image: auto-crop to square aspect_ratio
//     const autoCropUrl = cloudinary.url('shoes', {
//         crop: 'auto',
//         gravity: 'auto',
//         width: 500,
//         height: 500,
//     });
    
//     console.log(autoCropUrl);    
// })();