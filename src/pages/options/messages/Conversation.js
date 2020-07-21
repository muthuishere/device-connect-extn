import React, {Fragment} from "react";

export function Conversation(props) {

    const activeClass = 'conversation active'
    const unreadClass = 'conversation unread'

    return <li>
        <div className="conversation">
            <div className="user-avatar user-avatar-rounded online">
                <img src="../../../assets/img/01.jpg" alt=""/>
            </div>
            <div className="conversation__details">
                <div className="conversation__name">
                    <div className="conversation__name--title">Jack P. Angulo</div>
                    <div className="conversation__time">00:21 PM</div>
                </div>
                <div className="conversation__message">
                    <div className="conversation__message-preview">
                                                                                <span className="tick">
                                                                                    <img src="../../../assets/img/tick-read.svg" alt=""/>
                                                                                </span>
                        <span>
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
}

export function StaticConversation() {

    return    <Fragment>
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
                                                                                    <a href="javascript:;">Eva :</a>
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

    </Fragment>
}
