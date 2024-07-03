// 1st with promise 
const asyncHandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((error)=>{
            next(error)
        })
    }
 
}








// const asyncHandler=()=>{}
    //const asyncHandler=(fun)=>{()=>{}} //return anather fun
    // const asyncHandler=(fun)=>async()=>{}
        
        
        // 2nd with try catch 
        // const asyncHandler=(fn)=>async(req,res,next)=>{
            //     try{
                //         await fn(req,res,next)
                //     }catch(error){
                    //         res.status(error.code || 500)
                    //         .json({
                        //             success:false,
                        //             message:error.message
                        //         })
                        //     }
                        
                        // }
export {asyncHandler}