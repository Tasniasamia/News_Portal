import { jwtCreateToken, verifyToken } from "@/Utility/JWTcreate";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const POST=async(req,res)=>{
   
        const data=await req.json();
        const prisma=new PrismaClient();
        const finduser=await prisma.users.findUnique({where:data})
        console.log(finduser);
        if(finduser===0){
            // let token=await jwtCreateToken(finduser['email'],finduser['id'])
           return NextResponse.json({status:"fail", message:"You are not succeded"})
            
        }
        else{
            let token=await jwtCreateToken(finduser['email'],finduser['id'])
            let expiretime=new Date(Date.now()+(24*60*60*1000))
            const cookieString=`token=${token}; expire=${expiretime};path=/`;
            
            return NextResponse.json({
                status:"success",data:"message successfull"
            },{status:200,headers:{'set-cookie':cookieString}})
        }
      
  
}
export const GET = async (req, res) => {
    console.log("Handling GET request Login...");
     return NextResponse.json({ message: "You are success to login" });
  
  };
  