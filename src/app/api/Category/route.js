import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const GET=async(req,res)=>{
    const {searchParams}=new URL(req.url);
    const category_id=searchParams.get('id');
    const prisma=new PrismaClient();
    const reqbody=await prisma.category.findMany({where:{  id:parseInt(category_id)},include:{news_list:{include:{comments:true}}}})
    return NextResponse.json({status:200,data:reqbody});
}