import { verifyToken } from "./Utility/JWTcreate";

export const middleware=async(req,res)=>{
    let cookievalue=req.cookies.get('token');
    let tokenvalue=await verifyToken(cookievalue['value'])
    console.log(tokenvalue)
    
    
}