// @ts-nocheck
import {
    S3Client,
    PutObjectCommand,
    GetObjectCommand,
    ListObjectsV2Command,
    DeleteObjectCommand,
    ListBucketsCommand,
    PutObjectCommandInput,
    ListObjectsV2CommandInput,
    
} from "@aws-sdk/client-s3";
import AWS from 'aws-sdk';
import multer from "multer";
import { getSignedUrl }  from "@aws-sdk/s3-request-presigner";
import * as dotenv from "dotenv";
import fs from 'fs'
import multerS3 from 'multer-s3'
dotenv.config({path: '../.env'})

const config = {
    endpoint: process.env.LIARA_ENDPOINT,
    accessKeyId: process.env.LIARA_BUCKET_ACCESS_KEY,
    secretAccessKey: process.env.LIARA_BUCKET_SECRET_KEY,
    region: "default",
    
  };


const client = new AWS.S3(config)

const s3Client = new S3Client({
    region: 'default',
    endpoint: process.env.LIARA_ENDPOINT,
    credentials: {
        accessKeyId: process.env.LIARA_BUCKET_ACCESS_KEY,
        secretAccessKey: process.env.LIARA_BUCKET_SECRET_KEY
    }
})

// const fileName = 'typescript.png'
// const fileContent = fs.readFileSync(`./${fileName}`)

// const sendParams = {
//     Body: fileContent,
//     Bucket: process.env.BUCKET_NAME,
//     Key: fileName
// }

// const recieveParams = {
//     Bucket: process.env.BUCKET_NAME,
//     Key: fileName
// }

// const listParams = {
//     Bucket: process.env.BUCKET_NAME,
// }

export const uploadToBucket = async (params: PutObjectCommandInput) => {
    try {
        const data = await s3Client.send(new PutObjectCommand(params))
        return data
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const downloadFromBucket = async (params: PutObjectCommandInput) => {
    try {
        const data = await s3Client.send(new GetObjectCommand(params))
        return data
        console.log((data.Body))
    } catch (error) {
        console.log(error)
    }
}

export const getFileUrl = async  (fileName) => {
    try {
        const url = await getSignedUrl(s3Client, new GetObjectCommand({ Bucket: process.env.BUCKET_NAME, Key: fileName}))
        console.log(url)
        return url
    } catch (error) {
        console.log(error)
    }
}

export const deleteFromBucket = async (params: PutObjectCommandInput) => {
    try {
        const data = await s3Client.send(new DeleteObjectCommand(params))
        return data
        console.log((data))
    } catch (error) {
        console.log(error)
    }
}

export const ListAllFiles = async (params: ListObjectsV2CommandInput) => {
    try {
        const data = await s3Client.send(new ListObjectsV2Command(params))
        return data
        console.log((data.Contents))
    } catch (error) {
        console.log(error)
    }
}


export const upload = multer({
    storage: multerS3({
      s3: client,
      bucket: process.env.BUCKET_NAME,
      key: function (req, file, cb) {
        // console.log(file);
        cb(null, file.originalname);
      },
    }),
  });

// downloadFromBucket(recieveParams)
// getFileUrl(client, new GetObjectCommand(recieveParams))
// ListAllFiles(listParams)
// deleteFromBucket(recieveParams)
// uploadToBucket(sendParams)
// console.log(process.env.LIARA_ENDPOINT)
