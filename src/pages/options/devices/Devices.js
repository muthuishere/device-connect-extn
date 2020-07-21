import React from "react";
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import deviceconfig, {getRegisteredDevices} from "./device-store";
import {Conversation} from "../messages/Conversation";

//
// const counter = useSelector(state => state.counter)
// return <div>{counter}</div>
//https://react-redux.js.org/api/hooks
//
// const dispatch = useDispatch()
//
// return (
//     <div>
//         <span>{value}</span>
//         <button onClick={() => dispatch({ type: 'increment-counter' })}>
//             Increment counter
//         </button>
//     </div>
// )

export function Devices(props) {
    // <li className="nav-item active">
    //     <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
    // </li>
    const dispatch = useDispatch()

    getRegisteredDevices(dispatch)

    const deviceconfig = useSelector(state => state.deviceconfig.devices)





    return         <div className="ca-sidebar-wrapper">
        <div className="ca-sidebar">
            <div className="ca-sidebar__header">
                <div className="ca-userprofile" data-toggle="modal" data-target="#viewProfileModal">
                    <a href="#" className="user-avatar user-avatar-rounded">
                        <img src="../../../assets/img/face-01.jpg" />
                    </a>
                </div>

            </div>

            <div className="ca-sidebar__body">
                <div className="ca-navigation-tabs">
                    <div className="nav-style-1">

                        <div className="tab-content" id="caMainTabContent">

                            <div className="tab-pane fade show active" id="caChats" role="tabpanel" aria-labelledby="caChatsTab">
                                <div className="nav-style-2">

                                    <div className="tab-content" id="caChatsTabInsideContent">
                                        <div className="tab-pane fade show active" id="personal-chat" role="tabpanel" aria-labelledby="personal-chat-tab">
                                            <div className="sidebar-userlist ps ps--active-y">
                                                <ul className="list-unstyled">
                                                    <Conversation/>
                                                </ul>
                                                <div className="ps__rail-x" data-style="left: 0px; bottom: 0px;"><div className="ps__thumb-x" tabIndex="0" data-style="left: 0px; width: 0px;"></div></div><div className="ps__rail-y" data-style="top: 0px; height: 672px; right: 0px;"><div className="ps__thumb-y" tabIndex="0" data-style="top: 0px; height: 454px;"></div></div><div className="ps__rail-x" data-style="left: 0px; bottom: 0px;"><div className="ps__thumb-x" tabIndex="0" data-style="left: 0px; width: 0px;"></div></div><div className="ps__rail-y" data-style="top: 0px; height: 704px; right: 0px;"><div className="ps__thumb-y" tabIndex="0" data-style="top: 0px; height: 498px;"></div></div></div>
                                        </div>
                                        <div className="tab-pane fade" id="groups-chat" role="tabpanel" aria-labelledby="groups-chat-tab">
                                            <div className="sidebar-userlist ps">

                                                <ul className="list-unstyled">
                                                    <li>
                                                        <div className="conversation status-hidden active">
                                                            <div className="user-avatar user-avatar-rounded">
                                                                <img src="../../../assets/img/friends.jpg" alt=""/>
                                                            </div>
                                                            <div className="conversation__details">
                                                                <div className="conversation__name">
                                                                    <div className="conversation__name--title">Friends Forever</div>
                                                                    <div className="conversation__time">00:21 PM</div>
                                                                </div>
                                                                <div className="conversation__message">
                                                                    <div className="conversation__message-preview">
                                                                                <span>
                                                                                    <a href="#">Eva :</a>
                                                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta consequuntur accusantium tempora. Ad officiis voluptate neque, deleniti porro necessitatibus aut!
                                                                                </span>
                                                                    </div>

                                                                    <span>
                                                                                <i className="mdi mdi-pin"></i>
                                                                            </span>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="conversation status-hidden unread">
                                                            <div className="user-avatar user-avatar-rounded avatar-primary">
                                                                <span><i className="mdi mdi-account-group"></i></span>
                                                            </div>

                                                            <div className="conversation__details">
                                                                <div className="conversation__name">
                                                                    <div className="conversation__name--title">The Public Square</div>
                                                                    <div className="conversation__time">02:47 PM</div>
                                                                </div>
                                                                <div className="conversation__message">
                                                                    <div className="conversation__message-preview">
                                                                                <span className="tick">
                                                                                <img src="../../../assets/img/tick-delivered.svg" alt=""/>
                                                                                </span>An example of un-read message.
                                                                    </div>

                                                                    <span><i className="mdi mdi-pin"></i></span>
                                                                    <span className="badge badge-primary badge-rounded">2</span>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="conversation status-hidden unread">
                                                            <div className="user-avatar user-avatar-rounded">
                                                                <img src="../../../assets/img/family.jpg" alt=""/>
                                                            </div>
                                                            <div className="conversation__details">
                                                                <div className="conversation__name">
                                                                    <div className="conversation__name--title">Best Family Ever</div>
                                                                    <div className="conversation__time">07:15 PM</div>
                                                                </div>
                                                                <div className="conversation__message">
                                                                    <div className="conversation__message-preview">
                                                                                <span className="tick">
                                                                                    <img src="../../../assets/img/tick-send.svg" alt=""/>
                                                                                </span>
                                                                        Hello! Are you free today?
                                                                    </div>

                                                                    <span><i className="mdi mdi-volume-mute"></i></span>
                                                                    <span className="badge badge-primary badge-rounded">12</span>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="conversation status-hidden">
                                                            <div className="user-avatar user-avatar-rounded">
                                                                <img src="../../../assets/img/happy.svg" alt=""/>
                                                            </div>
                                                            <div className="conversation__details">
                                                                <div className="conversation__name">
                                                                    <div className="conversation__name--title">Live life like there is no tomorrow</div>
                                                                    <div className="conversation__time">02:47 PM</div>
                                                                </div>
                                                                <div className="conversation__message">
                                                                    <div className="conversation__message-preview">
                                                                                <span className="tick">
                                                                                <img src="../../../assets/img/tick-delivered.svg" alt=""/>
                                                                                </span>Hey! I received your email. Thank you :)
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="conversation status-hidden">
                                                            <div className="user-avatar user-avatar-rounded avatar-warning">
                                                                <span><i className="mdi mdi-account-group"></i></span>
                                                            </div>
                                                            <div className="conversation__details">
                                                                <div className="conversation__name">
                                                                    <div className="conversation__name--title">We are unique</div>
                                                                    <div className="conversation__time">yesterday</div>
                                                                </div>
                                                                <div className="conversation__message">
                                                                    <div className="conversation__message-preview">
                                                                                <span className="tick">
                                                                                    <img src="../../../assets/img/tick-send.svg" alt=""/>
                                                                                </span>
                                                                        Hello! Are you free today?
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                </ul>
                                                <div className="ps__rail-x" data-style="left: 0px; bottom: 0px;"><div className="ps__thumb-x" tabIndex="0" data-style="left: 0px; width: 0px;"></div></div><div className="ps__rail-y" data-style="top: 0px; right: 0px;"><div className="ps__thumb-y" tabIndex="0" data-style="top: 0px; height: 0px;"></div></div><div className="ps__rail-x" data-style="left: 0px; bottom: 0px;"><div className="ps__thumb-x" tabIndex="0" data-style="left: 0px; width: 0px;"></div></div><div className="ps__rail-y" data-style="top: 0px; right: 0px;"><div className="ps__thumb-y" tabIndex="0" data-style="top: 0px; height: 0px;"></div></div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="caCalls" role="tabpanel" aria-labelledby="caCallsTab">
                                <div className="nav-style-2">
                                    <ul className="nav nav-pills my-3" id="caCallsTabInside" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="all-calls-tab" data-toggle="pill" href="http://www.cetaceanstechlab.com/theme/flingo/tf-demo/index.html#all-calls" role="tab" aria-controls="all-calls" aria-selected="true">All</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="missed-calls-tab" data-toggle="pill" href="http://www.cetaceanstechlab.com/theme/flingo/tf-demo/index.html#missed-calls" role="tab" aria-controls="missed-calls" aria-selected="false">Missed</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="caCallsTabInsideContent">
                                        <div className="tab-pane fade show active" id="all-calls" role="tabpanel" aria-labelledby="all-calls-tab">
                                            <div className="sidebar-userlist ps">
                                                <ul className="list-unstyled">
                                                    <li>
                                                        <div className="calllist">
                                                            <div className="user-avatar user-avatar-rounded online">
                                                                <img src="../../../assets/img/01.jpg" alt=""/>
                                                            </div>
                                                            <div className="calllist__details">
                                                                <div className="calllist__details--name">Jack P. Angulo</div>
                                                                <div className="calllist__details--info">
                                                                    <span><i className="mdi mdi-call-made"></i></span>
                                                                    <span>Today at 10:02AM</span>
                                                                </div>
                                                            </div>

                                                            <div className="calllist__actions">
                                                                <div className="iconbox btn-hovered-light">
                                                                    <i className="iconbox__icon mdi mdi-phone"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="calllist active">
                                                            <div className="user-avatar user-avatar-rounded online">
                                                                <img src="../../../assets/img/02.jpg" alt=""/>
                                                            </div>
                                                            <div className="calllist__details">
                                                                <div className="calllist__details--name">Earnest Clements</div>
                                                                <div className="calllist__details--info">
                                                                    <span><i className="mdi mdi-call-received"></i></span>
                                                                    <span>Today at 07:25AM</span>
                                                                </div>
                                                            </div>
                                                            <div className="calllist__actions">
                                                                <div className="iconbox btn-hovered-light">
                                                                    <i className="iconbox__icon mdi mdi-video-outline"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="calllist">
                                                            <div className="user-avatar user-avatar-rounded online">
                                                                <img src="../../../assets/img/03.jpg" alt=""/>
                                                            </div>
                                                            <div className="calllist__details">
                                                                <div className="calllist__details--name">Willie McLaughlin</div>
                                                                <div className="calllist__details--info text-danger">
                                                                    <span><i className="mdi mdi-call-missed"></i></span>
                                                                    <span>Today at 07:25AM</span>
                                                                </div>
                                                            </div>
                                                            <div className="calllist__actions">
                                                                <div className="iconbox btn-hovered-light">
                                                                    <i className="iconbox__icon mdi mdi-video-outline"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="calllist">
                                                            <div className="user-avatar user-avatar-rounded online">
                                                                <img src="../../../assets/img/04.jpg" alt=""/>
                                                            </div>
                                                            <div className="calllist__details">
                                                                <div className="calllist__details--name">Andrew Showalter</div>
                                                                <div className="calllist__details--info text-danger">
                                                                    <span><i className="mdi mdi-call-missed"></i></span>
                                                                    <span>Today at 07:25AM</span>
                                                                </div>
                                                            </div>
                                                            <div className="calllist__actions">
                                                                <div className="iconbox btn-hovered-light">
                                                                    <i className="iconbox__icon mdi mdi-phone"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="calllist">
                                                            <div className="user-avatar user-avatar-rounded online">
                                                                <img src="../../../assets/img/05.jpg" alt=""/>
                                                            </div>
                                                            <div className="calllist__details">
                                                                <div className="calllist__details--name">Jack P. Angulo</div>
                                                                <div className="calllist__details--info">
                                                                    <span><i className="mdi mdi-call-made"></i></span>
                                                                    <span>Today at 10:02AM</span>
                                                                </div>
                                                            </div>

                                                            <div className="calllist__actions">
                                                                <div className="iconbox btn-hovered-light">
                                                                    <i className="iconbox__icon mdi mdi-phone"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="calllist">
                                                            <div className="user-avatar user-avatar-rounded online">
                                                                <img src="../../../assets/img/09.jpg" alt=""/>
                                                            </div>
                                                            <div className="calllist__details">
                                                                <div className="calllist__details--name">Earnest Clements</div>
                                                                <div className="calllist__details--info">
                                                                    <span><i className="mdi mdi-call-received"></i></span>
                                                                    <span>Today at 07:25AM</span>
                                                                </div>
                                                            </div>
                                                            <div className="calllist__actions">
                                                                <div className="iconbox btn-hovered-light">
                                                                    <i className="iconbox__icon mdi mdi-video-outline"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="ps__rail-x" data-style="left: 0px; bottom: 0px;"><div className="ps__thumb-x" tabIndex="0" data-style="left: 0px; width: 0px;"></div></div><div className="ps__rail-y" data-style="top: 0px; right: 0px;"><div className="ps__thumb-y" tabIndex="0" data-style="top: 0px; height: 0px;"></div></div><div className="ps__rail-x" data-style="left: 0px; bottom: 0px;"><div className="ps__thumb-x" tabIndex="0" data-style="left: 0px; width: 0px;"></div></div><div className="ps__rail-y" data-style="top: 0px; right: 0px;"><div className="ps__thumb-y" tabIndex="0" data-style="top: 0px; height: 0px;"></div></div></div>
                                        </div>
                                        <div className="tab-pane fade" id="missed-calls" role="tabpanel" aria-labelledby="missed-calls-tab">
                                            <div className="sidebar-userlist ps">
                                                <ul className="list-unstyled">
                                                    <li>
                                                        <div className="calllist active">
                                                            <div className="user-avatar user-avatar-rounded online">
                                                                <img src="../../../assets/img/03.jpg" alt=""/>
                                                            </div>
                                                            <div className="calllist__details">
                                                                <div className="calllist__details--name">Willie McLaughlin</div>
                                                                <div className="calllist__details--info text-danger">
                                                                    <span><i className="mdi mdi-call-missed"></i></span>
                                                                    <span>Today at 07:25AM</span>
                                                                </div>
                                                            </div>
                                                            <div className="calllist__actions">
                                                                <div className="iconbox btn-hovered-light">
                                                                    <i className="iconbox__icon mdi mdi-phone"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="calllist">
                                                            <div className="user-avatar user-avatar-rounded online">
                                                                <img src="../../../assets/img/04.jpg" alt=""/>
                                                            </div>
                                                            <div className="calllist__details">
                                                                <div className="calllist__details--name">Andrew Showalter</div>
                                                                <div className="calllist__details--info text-danger">
                                                                    <span><i className="mdi mdi-call-missed"></i></span>
                                                                    <span>Today at 07:25AM</span>
                                                                </div>
                                                            </div>
                                                            <div className="calllist__actions">
                                                                <div className="iconbox btn-hovered-light">
                                                                    <i className="iconbox__icon mdi mdi-video-outline"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="ps__rail-x" data-style="left: 0px; bottom: 0px;"><div className="ps__thumb-x" tabIndex="0" data-style="left: 0px; width: 0px;"></div></div><div className="ps__rail-y" data-style="top: 0px; right: 0px;"><div className="ps__thumb-y" tabIndex="0" data-style="top: 0px; height: 0px;"></div></div><div className="ps__rail-x" data-style="left: 0px; bottom: 0px;"><div className="ps__thumb-x" tabIndex="0" data-style="left: 0px; width: 0px;"></div></div><div className="ps__rail-y" data-style="top: 0px; right: 0px;"><div className="ps__thumb-y" tabIndex="0" data-style="top: 0px; height: 0px;"></div></div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade position-relative" id="caContacts" role="tabpanel" aria-labelledby="caContactsTab">
                                <div className="sidebar-contactlist ps">
                                    <ul className="list-unstyled">
                                        <li>
                                            <div className="contactlist-heading">
                                                <span>Favourite</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contactlist">
                                                <div className="user-avatar user-avatar-rounded online">
                                                    <img src="../../../assets/img/01.jpg" alt=""/>
                                                </div>
                                                <div className="contactlist__details">
                                                    <div className="contactlist__details--name">Jack P. Angulo</div>
                                                    <div className="calllist__details--info">
                                                        <span><i className="mdi mdi-tag-outline"></i></span>
                                                        <span>Co-Workers</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contactlist active">
                                                <div className="user-avatar user-avatar-rounded online">
                                                    <img src="../../../assets/img/09.jpg" alt=""/>
                                                </div>
                                                <div className="contactlist__details">
                                                    <div className="contactlist__details--name">Pearl Villarreal</div>
                                                    <div className="calllist__details--info">
                                                        <span><i className="mdi mdi-tag-outline"></i></span>
                                                        <span>Family members</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contactlist">
                                                <div className="user-avatar user-avatar-rounded online">
                                                    <img src="../../../assets/img/04(1).jpg" alt=""/>
                                                </div>
                                                <div className="contactlist__details">
                                                    <div className="contactlist__details--name">Marguerite E. Hutchings</div>
                                                    <div className="calllist__details--info">
                                                        <span><i className="mdi mdi-tag-outline"></i></span>
                                                        <span>Friends</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contactlist">
                                                <div className="user-avatar user-avatar-rounded online">
                                                    <img src="../../../assets/img/06.jpg" alt=""/>
                                                </div>
                                                <div className="contactlist__details">
                                                    <div className="contactlist__details--name">Chuck McCann</div>
                                                    <div className="calllist__details--info">
                                                        <span><i className="mdi mdi-tag-outline"></i></span>
                                                        <span>Friends</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contactlist-heading">
                                                <span>A</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contactlist">
                                                <div className="user-avatar user-avatar-rounded online">
                                                    <img src="../../../assets/img/04.jpg" alt=""/>
                                                </div>
                                                <div className="contactlist__details">
                                                    <div className="contactlist__details--name">Andrew Showalter</div>
                                                    <div className="calllist__details--info">
                                                        <span><i className="mdi mdi-tag-outline"></i></span>
                                                        <span>Co-Workers</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contactlist">
                                                <div className="user-avatar user-avatar-rounded online">
                                                    <img src="../../../assets/img/05.jpg" alt=""/>
                                                </div>
                                                <div className="contactlist__details">
                                                    <div className="contactlist__details--name">Amanda Sinquefield</div>
                                                    <div className="calllist__details--info">
                                                        <span><i className="mdi mdi-tag-outline"></i></span>
                                                        <span>Co-Workers</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contactlist-heading">
                                                <span>B</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contactlist">
                                                <div className="user-avatar user-avatar-rounded online">
                                                    <img src="../../../assets/img/04.jpg" alt=""/>
                                                </div>
                                                <div className="contactlist__details">
                                                    <div className="contactlist__details--name">Andrew Showalter</div>
                                                    <div className="calllist__details--info">
                                                        <span><i className="mdi mdi-tag-outline"></i></span>
                                                        <span>Co-Workers</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contactlist">
                                                <div className="user-avatar user-avatar-rounded online">
                                                    <img src="../../../assets/img/05.jpg" alt=""/>
                                                </div>
                                                <div className="contactlist__details">
                                                    <div className="contactlist__details--name">Amanda Sinquefield</div>
                                                    <div className="calllist__details--info">
                                                        <span><i className="mdi mdi-tag-outline"></i></span>
                                                        <span>Co-Workers</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contactlist-heading">
                                                <span>C</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contactlist">
                                                <div className="user-avatar user-avatar-rounded online">
                                                    <img src="../../../assets/img/04.jpg" alt=""/>
                                                </div>
                                                <div className="contactlist__details">
                                                    <div className="contactlist__details--name">Andrew Showalter</div>
                                                    <div className="calllist__details--info">
                                                        <span><i className="mdi mdi-tag-outline"></i></span>
                                                        <span>Co-Workers</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contactlist">
                                                <div className="user-avatar user-avatar-rounded online">
                                                    <img src="../../../assets/img/05.jpg" alt=""/>
                                                </div>
                                                <div className="contactlist__details">
                                                    <div className="contactlist__details--name">Amanda Sinquefield</div>
                                                    <div className="calllist__details--info">
                                                        <span><i className="mdi mdi-tag-outline"></i></span>
                                                        <span>Co-Workers</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contactlist-heading">
                                                <span>E</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contactlist">
                                                <div className="user-avatar user-avatar-rounded online">
                                                    <img src="../../../assets/img/04.jpg" alt=""/>
                                                </div>
                                                <div className="contactlist__details">
                                                    <div className="contactlist__details--name">Andrew Showalter</div>
                                                    <div className="calllist__details--info">
                                                        <span><i className="mdi mdi-tag-outline"></i></span>
                                                        <span>Co-Workers</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contactlist">
                                                <div className="user-avatar user-avatar-rounded online">
                                                    <img src="../../../assets/img/05.jpg" alt=""/>
                                                </div>
                                                <div className="contactlist__details">
                                                    <div className="contactlist__details--name">Amanda Sinquefield</div>
                                                    <div className="calllist__details--info">
                                                        <span><i className="mdi mdi-tag-outline"></i></span>
                                                        <span>Co-Workers</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contactlist-heading">
                                                <span>M</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contactlist">
                                                <div className="user-avatar user-avatar-rounded online">
                                                    <img src="../../../assets/img/04.jpg" alt=""/>
                                                </div>
                                                <div className="contactlist__details">
                                                    <div className="contactlist__details--name">Andrew Showalter</div>
                                                    <div className="calllist__details--info">
                                                        <span><i className="mdi mdi-tag-outline"></i></span>
                                                        <span>Co-Workers</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contactlist">
                                                <div className="user-avatar user-avatar-rounded online">
                                                    <img src="../../../assets/img/05.jpg" alt=""/>
                                                </div>
                                                <div className="contactlist__details">
                                                    <div className="contactlist__details--name">Amanda Sinquefield</div>
                                                    <div className="calllist__details--info">
                                                        <span><i className="mdi mdi-tag-outline"></i></span>
                                                        <span>Co-Workers</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contactlist-heading">
                                                <span>S</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contactlist">
                                                <div className="user-avatar user-avatar-rounded online">
                                                    <img src="../../../assets/img/04.jpg" alt=""/>
                                                </div>
                                                <div className="contactlist__details">
                                                    <div className="contactlist__details--name">Andrew Showalter</div>
                                                    <div className="calllist__details--info">
                                                        <span><i className="mdi mdi-tag-outline"></i></span>
                                                        <span>Co-Workers</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contactlist">
                                                <div className="user-avatar user-avatar-rounded online">
                                                    <img src="../../../assets/img/05.jpg" alt=""/>
                                                </div>
                                                <div className="contactlist__details">
                                                    <div className="contactlist__details--name">Amanda Sinquefield</div>
                                                    <div className="calllist__details--info">
                                                        <span><i className="mdi mdi-tag-outline"></i></span>
                                                        <span>Co-Workers</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contactlist-heading">
                                                <span>#</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contactlist">
                                                <div className="user-avatar user-avatar-rounded online">
                                                    <img src="../../../assets/img/04.jpg" alt=""/>
                                                </div>
                                                <div className="contactlist__details">
                                                    <div className="contactlist__details--name">♥ My Love ♥</div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contactlist">
                                                <div className="user-avatar user-avatar-rounded online">
                                                    <img src="../../../assets/img/05.jpg" alt=""/>
                                                </div>
                                                <div className="contactlist__details">
                                                    <div className="contactlist__details--name">~ Eva 	~</div>
                                                    <div className="calllist__details--info">
                                                        <span><i className="mdi mdi-tag-outline"></i></span>
                                                        <span>Co-Workers</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="ps__rail-x" data-style="left: 0px; bottom: 0px;"><div className="ps__thumb-x" tabIndex="0" data-style="left: 0px; width: 0px;"></div></div><div className="ps__rail-y" data-style="top: 0px; right: 0px;"><div className="ps__thumb-y" tabIndex="0" data-style="top: 0px; height: 0px;"></div></div><div className="ps__rail-x" data-style="left: 0px; bottom: 0px;"><div className="ps__thumb-x" tabIndex="0" data-style="left: 0px; width: 0px;"></div></div><div className="ps__rail-y" data-style="top: 0px; right: 0px;"><div className="ps__thumb-y" tabIndex="0" data-style="top: 0px; height: 0px;"></div></div></div>
                                <div className="alphabet-series">
                                    <span><i className="mdi mdi-star"></i></span>
                                    <span>A</span>
                                    <span>B</span>
                                    <span>D</span>
                                    <span>E</span>
                                    <span>F</span>
                                    <span>G</span>
                                    <span>H</span>
                                    <span>I</span>
                                    <span>J</span>
                                    <span>K</span>
                                    <span>L</span>
                                    <span>M</span>
                                    <span>N</span>
                                    <span>O</span>
                                    <span>P</span>
                                    <span>Q</span>
                                    <span>R</span>
                                    <span>S</span>
                                    <span>T</span>
                                    <span>U</span>
                                    <span>V</span>
                                    <span>W</span>
                                    <span>X</span>
                                    <span>Y</span>
                                    <span>Z</span>
                                    <span>#</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ul id="mfbMenu" className="mfb-component--br mfb-slidein" data-mfb-toggle="click">
                        <li className="mfb-component__wrap">
                            <a href="http://www.cetaceanstechlab.com/theme/flingo/tf-demo/index.html#" className="mfb-component__button--main">
                                <i className="mfb-component__main-icon--resting mdi mdi-plus ion-plus-round"></i>
                                <i className="mfb-component__main-icon--active mdi mdi-close ion-close-round"></i>
                            </a>
                            <ul className="mfb-component__list">
                                <li>
                                    <a href="#" data-mfb-label="Theme" className="mfb-component__button--child">
                                        <i className="mfb-component__child-icon mdi mdi-palette"></i>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" data-toggle="modal" data-target="#newGroupModal" data-mfb-label="Create Group" className="mfb-component__button--child">
                                        <i className="mfb-component__child-icon mdi mdi-account-group"></i>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" data-toggle="modal" data-target="#newCallModal" data-mfb-label="New Call" className="mfb-component__button--child">
                                        <i className="mfb-component__child-icon mdi mdi-phone"></i>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" data-toggle="modal" data-target="#newMsgModal" data-mfb-label="New Chat" className="mfb-component__button--child">
                                        <i className="mfb-component__child-icon mdi mdi-android-messages"></i>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>;
}
