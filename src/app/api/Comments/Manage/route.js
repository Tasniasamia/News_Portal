import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export const POST=async(req,res)=>{
    const reqbody=await req.json();
    const headerlist=new headers();
    let id=headerlist.get('id');
    reqbody.user_id=parseInt(id);
    const prisma=new PrismaClient();
    const createData=await prisma.comments.create({
        data:reqbody
    });

    return NextResponse.json({status:200,data:createData});
}
//Have to send comments id
export const DELETE=async(req,res)=>{
    const {searchParams}=new URL(req.url);
    let id=searchParams.get('id');

    const prisma=new PrismaClient();
    const deleteData=await prisma.comments.delete({where:{id:parseInt(id)}})
   return NextResponse.json({status:206,data:deleteData})
}
//Have to send users id
export const GET=async(req,res)=>{
    const {searchParams}=new URL(req.url);
    const id =searchParams.get('id');
    const prisma=new PrismaClient();
    const reqData=await prisma.comments.findMany({where:{user_id:parseInt(id)},include:{users:true,news_list:true}
    })

return NextResponse.json({status:204,data:reqData})
}