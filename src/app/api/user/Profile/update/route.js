import { NextResponse } from "next/server";
import {headers} from 'next/headers'
import { PrismaClient } from "@prisma/client";
export const PUT=async(req,res)=>{
    const updatesdata=await req.json()
    const headerslist=headers();
    let email=headerslist.get('email');
    let id=headerslist.get('id');
    const prisma=new PrismaClient()

    const reqbody=await prisma.users.findUnique({where:{id:parseInt(id)}})
    if(reqbody){
        let updateResult=await prisma.users.update({where:{id:parseInt(id)},data:updatesdata})
        return NextResponse.json({status:200, data:updateResult})

    }
    else{
        return NextResponse.json({status:400, data:"You are Failed"})

    }
}