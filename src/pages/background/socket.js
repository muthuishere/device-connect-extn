
import { webSocket } from "rxjs/webSocket";
import {getWebsocketUrl} from "../common/constants";
import {getRegisteredId, saveIdInStorage} from "./storage";

function handleSocketMessage(data){
    console.log('message received: ' , data)
}
function onSocketClose(){

    console.log('Socket closed ')
}
function connectWith(id){

    console.log(id)
    let s = getWebsocketUrl() + `/${id}`;
    console.log(s);
    const subject = webSocket(s);

    subject.subscribe(
        msg => handleSocketMessage( msg), // Called whenever there is a message from the server.
        err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
        () => onSocketClose() // Called when connection is closed (for whatever reason).
    );

}

export function initializeSocket(services) {

    const id = getRegisteredId();
    if(id)
        connectWith(id);
    else
        services.register().subscribe(value => {
            console.log(value)
            saveIdInStorage(value)
            connectWith(value)
        })


}
