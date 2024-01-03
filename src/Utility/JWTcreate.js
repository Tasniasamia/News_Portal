import * as jose from 'jose'

export const jwtCreateToken=async(email,id)=>{
    const payload={email:email, id:id}
    let secret=new TextEncoder().encode(process.env.JWT_SECRET);
    const token = await new jose.SignJWT(payload)
    .setProtectedHeader({ alg :"HS256"})
    .setIssuedAt()
    .setIssuer(process.env.JWT_ISSER)
    .setAudience()
    .setExpirationTime(process.env.JWT_EXPIRE)
    .sign(secret)
    console.log(token);
    return token
}


export const verifyToken=async(tokens)=>{
    const secret=new TextEncoder().encode(process.env.JWT_SECRET);
    let tokendata = await jose.jwtVerify(tokens, secret);
    console.log(tokendata);
    return tokendata;
}
