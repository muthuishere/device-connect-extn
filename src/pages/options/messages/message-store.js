import {createReducer} from "../../config/create-reducer";
import {optionsClient} from "../../common/options-client";
import { OPTIONS } from '../../common/constants';
import {getSystem} from "../../common/runtime";

export const SET_CURRENT_MESSAGE = "messages/setcurrentmessage";
export const UPDATE_SENDER = "messages/updatesender";
export const SEND_TO_BACKGROUND = "messages/sendToBackGround";



const initialState = {
    sender:null,
    currentMessage:null,
    lastSentMessage:null

};




const setCurrentMessage =(state,action)=>{

    return { ...state,   currentMessage: action.payload }


};
const updateSender =(state,action)=>{

    return { ...state,   sender: action.payload }


};
const sendToBackGround =(state,action)=>{


    state.sender.postMessage(action.payload)

    return { ...state,   lastSentMessage: action.payload };


};





const MessageReducer = createReducer(initialState, {
    [SET_CURRENT_MESSAGE]: setCurrentMessage,
    [UPDATE_SENDER]: updateSender,
    [SEND_TO_BACKGROUND]: sendToBackGround


})
export default MessageReducer;




export const initMessageListener = (system,dispatch)  => {



    const port = system.runtime.connect({name: OPTIONS});
    handleBackgroundMessages(port,dispatch);
    dispatch({ type: UPDATE_SENDER,payload:optionsClient.port });

};



export const handleBackgroundMessages = (port,dispatch)  => {

    port.onMessage.addListener((message) =>{


        console.log("initMessageListener",message)
        dispatch({ type: SET_CURRENT_MESSAGE,payload:message });

    });


}
export const sendMessageToBackground = (dispatch,msg)  => {

    dispatch({ type: SEND_TO_BACKGROUND,payload:msg });
}
