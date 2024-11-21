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
import multer from "multer";
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
import * as dotenv from "dotenv";
import fs from 'fs'
dotenv.config({path: '../.env'})
const client = new S3Client({
    region: 'default',
    endpoint: process.env.LIARA_ENDPOINT,
    credentials: {
        accessKeyId: process.env.LIARA_BUCKET_ACCESS_KEY,
        secretAccessKey: process.env.LIARA_BUCKET_SECRET_KEY
    }
})

const fileName = 'typescript.png'
const fileContent = fs.readFileSync(`./${fileName}`)

const sendParams = {
    Body: fileContent,
    Bucket: process.env.BUCKET_NAME,
    Key: fileName
}

const recieveParams = {
    Bucket: process.env.BUCKET_NAME,
    Key: fileName
}

const listParams = {
    Bucket: process.env.BUCKET_NAME,
}

export const uploadToBucket = async (params: PutObjectCommandInput) => {
    try {
        const data = await client.send(new PutObjectCommand(params))
        return data
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const downloadFromBucket = async (params: PutObjectCommandInput) => {
    try {
        const data = await client.send(new GetObjectCommand(params))
        return data
        console.log((data.Body))
    } catch (error) {
        console.log(error)
    }
}

export const getFileUrl = async  (client, command) => {
    try {
        const url = await getSignedUrl(client, command)
        return url
        console.log(await JSON.stringify(url))
    } catch (error) {
        console.log(error)
    }
}

export const deleteFromBucket = async (params: PutObjectCommandInput) => {
    try {
        const data = await client.send(new DeleteObjectCommand(params))
        return data
        console.log((data))
    } catch (error) {
        console.log(error)
    }
}

export const ListAllFiles = async (params: ListObjectsV2CommandInput) => {
    try {
        const data = await client.send(new ListObjectsV2Command(params))
        return data
        console.log((data.Contents))
    } catch (error) {
        console.log(error)
    }
}

// downloadFromBucket(recieveParams)
// getFileUrl(client, new GetObjectCommand(recieveParams))
// ListAllFiles(listParams)
// deleteFromBucket(recieveParams)
// uploadToBucket(sendParams)
// console.log(process.env.LIARA_ENDPOINT)
