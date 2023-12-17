import { dirname } from "path";
import { fileURLToPath } from "url";
import { objConfigEnv } from "./config/config.js";
import  bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const __dirname= dirname(fileURLToPath(import.meta.url))


const SECRETJWT = objConfigEnv.secret_jwt;

const hashData= async (data)=>{

    return bcrypt.hash(data,10);

}

const compareData= async (data,hashedData)=>{

    return bcrypt.compare(data,hashedData);

}

const generateToken = (user)=>{

    return jwt.sign(user, SECRETJWT, {expiresIn: 200})


}


export{__dirname,hashData,compareData,generateToken}