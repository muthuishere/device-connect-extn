import {Devices} from "../devices/Devices";
import {MessagePanel} from "../MessagePanel";
import React, {Fragment} from "react";
import {NavBar} from "../NavBar";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import {Dashboard} from "./Dashboard";
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {initMessageListener} from "../messages/message-store";
import {getSystem} from "../../common/runtime";

export function Layout(props) {

    const dispatch = useDispatch()
    initMessageListener(getSystem(),dispatch)
    //Initialize message listener


    return    <Fragment>
        <header>
            <NavBar/>
        </header>


        <main role="main" className=" mt-5 flex-shrink-0">

            <HashRouter>
                <Switch>
                    <Route path="/dashboard" render={props => <Dashboard {...props} />} />
                    <Redirect from="/" to="/dashboard" />
                </Switch>
            </HashRouter>


        </main>

    </Fragment>
}
