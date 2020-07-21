import {OPTIONS} from "../common/constants";

export function addOptionsListener(port){

    port.onMessage.addListener(function(message) {

        console.log("message",message)
    });

}


export function initOptionListeners(system) {
    system.runtime.onConnect.addListener((port) =>{
        console.assert(port.name == OPTIONS);
        addOptionsListener(port)
    });
}
