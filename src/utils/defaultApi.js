import axios from "axios";

const defaultApi = async (url, method, payload) => {
    const api = axios.create({
        baseURL: 'http://127.0.0.1:8000/',
        headers: {
            "Content-Type": 'application/json'
        }
    })
    let res = ''
    
    try {
        switch (method) {
            case 'GET':
                res = await api.get(url)
                return res.data
    
            case 'POST':
                res = await api.post(url, payload)
                return res.data
    
            case 'PUT':
                res = await api.put(url, payload)
                return res.data
    
            case 'DELETE':
                res = await api.delete(url)
                break;
            default:
                console.log('default case');
        }
    } catch (err) {
        return res.err
    } 
}

export default defaultApi