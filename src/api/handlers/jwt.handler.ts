import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { readFileSync } from "node:fs";

// import { generateKeyPair } from "node:crypto";

const secretKey = readFileSync("secret.pem", "utf-8");
const publicKey = readFileSync("public.pem", "utf-8");



const payload = {
    phoneNumber: "09053217299",
    name: "mahan",
};

const signOption = {

}

export const signToken = (payload: object) => {  
    const token = jwt.sign(payload, secretKey, {
        algorithm: "RS256",
        expiresIn: "1h",
    });
    console.log(token)
    return token;
}
export const verifyToken = (token) => {
    const verified = jwt.verify(token, publicKey)
    return verified
}

export const decodeToken = (token) => {
    const decoded = jwt.decode(token)
    return decoded
}

