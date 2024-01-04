import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server"

export const GET=async(req,res)=>{
    const {searchParams}=new URL(req.url);
    const news_id=searchParams.get('news_list_id');
    const prisma=new PrismaClient();
    const reqbody=await prisma.comments.findMany({where:{news_list_id:parseInt(news_id)},include:{news_list:true}})
    return NextResponse.json({status:208,data:reqbody})
}