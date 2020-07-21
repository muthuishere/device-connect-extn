import {createReducer} from "../../config/create-reducer";



export const SET_DEVICES = "devices/set";
export const ADD_DEVICE = "devices/add";
export const SET_DEVICE_LOAD_IN_PROGRESS = "devices/inprogress";


const initialState = {
    devices: [],
    inProgress:false,
    error:""

};




const setDevices =(state,action)=>{


    return { ...state,    inProgress: false, devices: action.payload}


};

const addDevice =(state,action)=>{

    return { ...state,   inProgress: false,serverStarted: false }


};
const setProgress =(state,action)=>{

    return { ...state,   inProgress: true }


};

const DeviceReducer = createReducer(initialState, {
    [SET_DEVICES]: setDevices,
    [ADD_DEVICE]: addDevice,
    [SET_DEVICE_LOAD_IN_PROGRESS]: setProgress


})
export default DeviceReducer;




export const getRegisteredDevices = (dispatch)  => {
    dispatch({ type: SET_DEVICE_LOAD_IN_PROGRESS });

    //TODO
    //
    // const optionsChannel = createOptionsChannel();
    //
    // optionsChannel.listener.subscribe(({sender,message})=>handleOptions(sender,message))
    //
    //
    //  const port = chrome.runtime.connect({name: "knockknock"});
    // port.postMessage({joke: "Knock knock"});
    // port.onMessage.addListener((msg) =>{
    //
    //     console.log("popup" , msg)
    // });




};

