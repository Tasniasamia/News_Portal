import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const GET=async(req,res)=>{
    const {searchParams}=new URL(req.url);
    const category_id=searchParams.get('keyword');
    const prisma=new PrismaClient();
    const reqbody=await prisma.news_list.findMany({where:{  title:{contains:category_id}}})
    return NextResponse.json({status:200,data:reqbody});
}