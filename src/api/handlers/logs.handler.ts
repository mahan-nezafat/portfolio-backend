import * as rfs from 'rotating-file-stream'
import path from 'path'
export const accessLogStream = rfs.createStream("requests.log", {
    interval: "1d",
    path: path.join(".", "logs")
})