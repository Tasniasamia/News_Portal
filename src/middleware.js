import { NextResponse } from "next/server";
import { verifyToken } from "./Utility/JWTcreate";

export const middleware=async(req,res)=>{
    let cookievalue=req.cookies.get('token');
    let tokenvalue=await verifyToken(cookievalue['value'])
    console.log(tokenvalue.payload)
    const headerslist=new Headers(req.headers)
    headerslist.set('email',tokenvalue.payload['email'])
    headerslist.set('id',tokenvalue.payload['id'])

    return NextResponse.next({status:"200",message:"successfull",request:{headers:headerslist}})
}