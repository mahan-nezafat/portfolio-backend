import { AppDataSource } from "../../data-source.js"

export const connectToDb = async () => {
    if(!AppDataSource.isInitialized) {

        await AppDataSource.initialize()
        return console.log('connected to db')
    }else return console.log('db is already connected')

}

export const disconnectFromDb = async () => {
    return await AppDataSource.destroy()
}