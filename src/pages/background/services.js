import {ajaxGetJSON} from "rxjs/internal-compatibility";
import { map, catchError } from 'rxjs/operators';
export class Services{


    constructor( apiBaseUrl, deviceInfo) {
        this.apiBaseUrl=apiBaseUrl
        this.deviceInfo=deviceInfo;
    }

    setDeviceInfo( deviceInfo) {
        this.deviceInfo=deviceInfo;
    }

    register(data){
       return ajaxGetJSON(this.apiBaseUrl +"/register").pipe(
           map(value=>value.sessionId)
       )
    }

    send(targetDeviceInfo , data) {
        //call targetDevice.sendUrl with Data with headers DeviceInfo
    }

    receiveFrom(receiveUrl) {
        //call receiveUrl with with Headers DeviceInfo
    }
}
