import { Subject } from 'rxjs';
import {OPTIONS} from "./constants";






export  function optionsTunnel() {


    const subject = new Subject();

    chrome.runtime.onConnect.addListener(function(port) {

        console.assert(port.name == OPTIONS);


        port.onMessage.addListener(function(message) {
            subject.next({sender:port,message})
        });




    });

    return {subscription:subject.asObservable()}


}
