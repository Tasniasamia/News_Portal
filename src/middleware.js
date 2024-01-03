import { NextResponse } from "next/server";
import { verifyToken } from "./Utility/JWTcreate";

export const middleware = async (req, res) => {
  let cookievalue = req.cookies.get('token');

  if (cookievalue) {
    let tokenvalue = await verifyToken(cookievalue['value']);
    
    if (tokenvalue) {
      console.log(tokenvalue.payload);
      const headerslist = new Headers(req.headers);
      headerslist.set('email', tokenvalue?.payload['email']);
      headerslist.set('id', tokenvalue?.payload['id']);

      return NextResponse.next({ status: "200", message: "successful", request: { headers: headerslist } });
    } else {
      return NextResponse.next({ status: "401", message: "Invalid token" });
    }
  } else {
    return NextResponse.next({ status: "401", message: "Token not found in cookies" });
  }
};
