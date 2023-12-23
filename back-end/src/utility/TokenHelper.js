
const jwt=require('jsonwebtoken');
const Encode=async (email,user_id)=>{
    let key="ABC-123-DEF ";
    let Exprire={expiresIn: "24h"};
    let payload={email:email,user_id:user_id}
    return jwt.sign(payload,key,Exprire);
}

const Decode=async (token)=>{
try{
    let Key="ABC-123-DEF ";
    return jwt.verify(token,Key)
}catch (e) {
    return null;
}
}


module.exports={
    Encode,
    Decode,
}