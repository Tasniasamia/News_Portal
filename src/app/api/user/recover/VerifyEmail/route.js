import { SendEmail } from "@/Utility/SendMail";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const POST=async(req,res)=>{
const reqbody=await req.json();
const prisma=new PrismaClient();
const counts=await prisma.users.count({where:reqbody})
 if(counts===1){
let otp=Math.floor(100000+(Math.random()*900000))
await prisma.users.update({
    where:{email:reqbody['email']},
    data:{otp:`${otp}`}
})
let emailto=reqbody['email'];
let emailtext=`Your OTP is ${otp}`;
let emailsubject="Your verification code "
SendEmail(emailto,emailtext,emailsubject)

return NextResponse.json({status:"success",message:"Vaild Email"})



 }
 else{
    
    return NextResponse.json({status:"fail",message:"Invalid email"})

 }
}