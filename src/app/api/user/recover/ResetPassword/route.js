import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const POST=async(req,res)=>{
    const reqbody=await req.json();
    const prisma=new PrismaClient();
    const counts=await prisma.users.count({where:{email:reqbody['email'],otp:reqbody['otp']}})
    if(counts === 1){
        const updateData=await prisma.users.update({where:{email:reqbody['email']},data:{otp:"0",password:reqbody['password']}})
        return NextResponse.json({status:"success",message:updateData})
    }
    else{
        return NextResponse.json({status:"failed",message:"Password is not Reset"})

    }
}