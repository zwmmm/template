import axios from 'axios'

const request = axios.create({
    baseURL: '/',
    timeout: 60000,
    validateStatus: status => status < 500,
    withCredentials: true,
})

request.interceptors.request.use(
    options => {
        let { data, url } = options

        options.url = url
        if (options.method === 'GET') {
            options.params = data
        }
    },
    error => Promise.reject(error)
)

request.interceptors.response.use(
    response => {
        const { data, message, statusCode } = response
        return Promise.resolve({
            success: true,
            message: message,
            statusCode: statusCode,
            ...data
        })
    },
    error => {
        const { response, message } = error

        let msg
        let statusCode

        if (response && response instanceof Object) {
            const { data, statusText } = response
            statusCode = response.status
            msg = data.message || statusText
        } else {
            statusCode = 600
            msg = message || 'Network Error'
        }

        return Promise.reject({
            success: false,
            statusCode,
            message: msg
        })
    }
)

export default request
