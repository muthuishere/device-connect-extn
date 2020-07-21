export const OPTIONS="options"

const domain = '127.0.0.1:8090'
const protocol = 'http'

export function  getApiUrl(){
    return protocol + "://" + domain ;
}
export function  getWebsocketUrl(){
    return  "ws://" + domain +"/websocket" ;
}
