import { AppDataSource } from "../../data-source.js"

export const connectToDb = async () => {
    return await AppDataSource.initialize()

}

export const disconnectFromDb = async () => {
    return await AppDataSource.destroy()
}