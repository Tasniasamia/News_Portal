import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server";

export const GET=async(req,res)=>{
    const prisma=new PrismaClient();
    const reqbody=await prisma.socials.findMany()
    return NextResponse.json({status:202,data:reqbody})
}