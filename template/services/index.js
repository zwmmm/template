import request from './request'
import apis from './apis'

const gen = params => {
    let url = params
    let method = 'GET'

    const paramsArray = params.split(' ')
    if (paramsArray.length === 2) {
        method = paramsArray[0]
        url = paramsArray[1]
    }

    return function(data) {
        return request({ url, data, method })
    }
}

const APIFunction = {}

for (const key in apis) {
    if ({}.hasOwnProperty.call(apis, key)) {
        APIFunction[key] = gen(apis[key])
    }
}

export default APIFunction