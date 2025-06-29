"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = exports.ListAllFiles = exports.deleteFromBucket = exports.getFileUrl = exports.downloadFromBucket = exports.uploadToBucket = void 0;
// @ts-nocheck
var client_s3_1 = require("@aws-sdk/client-s3");
var aws_sdk_1 = __importDefault(require("aws-sdk"));
var multer_1 = __importDefault(require("multer"));
var s3_request_presigner_1 = require("@aws-sdk/s3-request-presigner");
var dotenv = __importStar(require("dotenv"));
var multer_s3_1 = __importDefault(require("multer-s3"));
dotenv.config({ path: '../.env' });
var config = {
    endpoint: process.env.LIARA_ENDPOINT,
    accessKeyId: process.env.LIARA_BUCKET_ACCESS_KEY,
    secretAccessKey: process.env.LIARA_BUCKET_SECRET_KEY,
    region: "default",
};
var client = new aws_sdk_1.default.S3(config);
var s3Client = new client_s3_1.S3Client({
    region: 'default',
    endpoint: process.env.LIARA_ENDPOINT,
    credentials: {
        accessKeyId: process.env.LIARA_BUCKET_ACCESS_KEY,
        secretAccessKey: process.env.LIARA_BUCKET_SECRET_KEY
    }
});
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
var uploadToBucket = function (params) { return __awaiter(void 0, void 0, void 0, function () {
    var data, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, s3Client.send(new client_s3_1.PutObjectCommand(params))];
            case 1:
                data = _a.sent();
                return [2 /*return*/, data];
            case 2:
                error_1 = _a.sent();
                console.log(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.uploadToBucket = uploadToBucket;
var downloadFromBucket = function (params) { return __awaiter(void 0, void 0, void 0, function () {
    var data, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, s3Client.send(new client_s3_1.GetObjectCommand(params))];
            case 1:
                data = _a.sent();
                return [2 /*return*/, data];
            case 2:
                error_2 = _a.sent();
                console.log(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.downloadFromBucket = downloadFromBucket;
var getFileUrl = function (fileName) { return __awaiter(void 0, void 0, void 0, function () {
    var url, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, s3_request_presigner_1.getSignedUrl)(s3Client, new client_s3_1.GetObjectCommand({ Bucket: process.env.BUCKET_NAME, Key: fileName }))];
            case 1:
                url = _a.sent();
                console.log(url);
                return [2 /*return*/, url];
            case 2:
                error_3 = _a.sent();
                console.log(error_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getFileUrl = getFileUrl;
var deleteFromBucket = function (params) { return __awaiter(void 0, void 0, void 0, function () {
    var data, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, s3Client.send(new client_s3_1.DeleteObjectCommand(params))];
            case 1:
                data = _a.sent();
                return [2 /*return*/, data];
            case 2:
                error_4 = _a.sent();
                console.log(error_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteFromBucket = deleteFromBucket;
var ListAllFiles = function (params) { return __awaiter(void 0, void 0, void 0, function () {
    var data, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, s3Client.send(new client_s3_1.ListObjectsV2Command(params))];
            case 1:
                data = _a.sent();
                return [2 /*return*/, data];
            case 2:
                error_5 = _a.sent();
                console.log(error_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.ListAllFiles = ListAllFiles;
exports.upload = (0, multer_1.default)({
    storage: (0, multer_s3_1.default)({
        s3: client,
        bucket: process.env.BUCKET_NAME,
        key: function (req, file, cb) {
            console.log(file);
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
