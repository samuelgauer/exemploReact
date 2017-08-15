import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api'

export function getCount() {
    const request = axios.get(`${BASE_URL}/specs/count`)
    return {
        type: 'SPEC_COUNT_FETCHED', 
        payload: request
    }
}