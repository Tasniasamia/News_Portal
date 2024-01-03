import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const POST=async(req,res)=>{
    const reqbody=await req.json();
    const prisma=new PrismaClient();
    const counts = await prisma.users.count({
        where: {
          email: reqbody.email, // Assuming 'email' is a field in your User model
          otp: reqbody.otp // Assuming 'otp' is a field in your User model
        }
      });
      
    if(counts!==0){
        return NextResponse.json({status:"success",message:"Valid OTP"})
    }
    else{
        return NextResponse.json({status:"Failed",message:"Invalid OTP"})

    }
}