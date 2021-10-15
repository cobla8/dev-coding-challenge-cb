import axios from 'axios'
import { ApiResponse } from '../objects/Types'
import config from '../config.json'

const baseURL = config.apiUrl

async function getList(): Promise<ApiResponse> {
    try {
        const response = await axios.get(`${baseURL}/coins/list`)
        return {
            message: response.data,
            success: response.status === 200,
        }
    } catch (err) {
        return { message: err, success: false }
    }
}

async function getCurrentDataByCoinId(id: string): Promise<ApiResponse> {
    try {
        const response = await axios.get(`${baseURL}/coins/${id}`)
        return {
            message: response.data,
            success: response.status === 200,
        }
    } catch (err) {
        return { message: err, success: false }
    }
}

async function getTrendingResults(): Promise<ApiResponse> {
    try {
        const response = await axios.get(`${baseURL}/search/trending`)
        return {
            message: response.data,
            success: response.status === 200,
        }
    } catch (err) {
        return { message: err, success: false }
    }
}

export { getList, getCurrentDataByCoinId, getTrendingResults }
