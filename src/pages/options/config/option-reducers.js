import { combineReducers } from 'redux';
import deviceconfig from '../devices/device-store'
import messageconfig from '../messages/message-store'


export default combineReducers({
    deviceconfig,
    messageconfig
})


