import { Subject } from 'rxjs';
import {OPTIONS} from "./constants";




export  function optionsClient() {


    if (!this.subject) {
        console.log("initializing client")
        this.subject = new Subject();

        const port = chrome.runtime.connect({name: OPTIONS});
        this.port =port
        port.onMessage.addListener((message) =>{

            this.subject.next({sender:port,message})
        });
    }


    return {
        channel:this.subject.asObservable(),
        sender:this.port
    }

}

