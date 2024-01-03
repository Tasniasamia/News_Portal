 import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const POST=async(req,res)=>{
    try{
        const data=await req.json();
        data.otp="0"
        const prisma=new PrismaClient();
        const result=await prisma.users.create({
            data:data
        });
        return NextResponse.json({
            status:200,data:result
        })
    }
    catch(e){
        return NextResponse.json({success:"failed",message:e})
    }
  
}
export const GET = async (req, res) => {
    console.log("Handling GET request...");
     return NextResponse.json({ message: "You are success" });
  
  };
  