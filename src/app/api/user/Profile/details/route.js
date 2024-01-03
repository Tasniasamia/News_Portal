import { NextResponse } from "next/server";
import {headers} from 'next/headers'
import { PrismaClient } from "@prisma/client";
export const GET=async(req,res)=>{
    const headerslist=headers();
    let email=headerslist.get('email');
    let id=headerslist.get('id');
    const prisma=new PrismaClient()

    const reqbody=await prisma.users.findUnique({where:{id:parseInt(id)}})
    return NextResponse.json({status:200, data:reqbody})
}