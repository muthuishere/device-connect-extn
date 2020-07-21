import React, {Fragment} from "react";
import {Layout} from "./components/Layout";
import {Provider, useDispatch} from "react-redux";


import {PersistGate} from 'redux-persist/integration/react'
import {persistor, store} from '../config/store'
import reducers from './config/option-reducers'
import {NavBar} from "./NavBar";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import {Dashboard} from "./components/Dashboard";
import {initMessageListener} from "./messages/message-store";
import {getSystem} from "../common/runtime";


const optionStore = store(reducers);



export function OptionsApp() {

    const persistorResponse = persistor(reducers);



    return    <Provider store={optionStore}>
        <PersistGate loading={null} persistor={persistorResponse}>
            <Layout/>
        </PersistGate>
    </Provider>


}
