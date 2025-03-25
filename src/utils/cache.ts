import NodeCache from "node-cache";

interface cacheData {
    phoneNumber: string,
    otp: string
}

const cache = new NodeCache({stdTTL: 120, checkperiod: 10, })
export const saveOtp = (data: cacheData) => {
    cache.set(data.phoneNumber, data)
    
    return true
}

export const loadOtp = (key: string):cacheData => {
    const data:cacheData = cache.get(key)
    return data
}

export const isCached = (key: string):boolean => {
    const data = cache.has(key)
    return data
}