import React, {Fragment} from "react";
import {Devices} from "../devices/Devices";
import {MessagePanel} from "../MessagePanel";

export function Dashboard() {

    return  <div className="light-default-theme">
        <div className="ca-main-wrapper">
   <Devices/>

        <div className="ca-content-wrapper">
            <div className="ca-content">
                <div className="ca-content__chatstab">
                    <div className="ca-content__chatstab--personal">
                        <div className="conversation-wrapper">
                            <div className="conversation-panel">
                                <div className="conversation-panel__head">
                                    <div className="conversation-panel__back-button ">
                                        <i className="mdi mdi-arrow-left"></i>
                                    </div>

                                    <div className="conversation-panel__avatar personalinfo-panel-opener">
                                        <div className="user-avatar user-avatar-rounded">
                                            <img src="../../assets/img/01.jpg" alt=""/>
                                        </div>
                                        <div className="conversation__name">
                                            <div className="conversation__name--title">Jack P. Angulo</div>
                                            <div className="conversation__time">last seen at 07:15 PM</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="conversation-panel__body ps ps--active-y">
                                    <div className="container">
                                        <div className="chatstyle-01">
                                            <div className="chat-date"><span>Monday 16 May</span></div>

                                            <div className="ca-send">
                                                <div className="ca-send__msg-group">
                                                    <div className="ca-send__msgwrapper">
                                                        <div className="ca-msg-actions">
                                                            <div className="iconbox-dropdown dropdown">
                                                                <div className="iconbox btn-hovered-light" id="dropdownMenuButtons1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="iconbox__icon mdi mdi-dots-horizontal"></i>
                                                                </div>
                                                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButtons1">

                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-share-outline"></i></span>
                                                                        <span>Forward</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-content-copy"></i></span>
                                                                        <span>Copy</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-star-outline"></i></span>
                                                                        <span>Add Star</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-trash-can-outline"></i></span>
                                                                        <span>Delete</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ca-send__msg">Hi Marie, welcome to Live Chat! My name is Jason. How can I help you today?</div>
                                                    </div>
                                                    <div className="metadata">
                                                        <span className="time">10:10 AM</span>
                                                        <span className="tick">
                                                                <img src="../../assets/tick-read.svg" alt=""/>
                                                            </span>
                                                    </div>
                                                </div>

                                                <div className="user-avatar user-avatar-sm user-avatar-rounded online">
                                                    <img src="../../assets/02.jpg" alt=""/>
                                                </div>
                                            </div>

                                            <div className="ca-received">
                                                <div className="user-avatar user-avatar-sm user-avatar-rounded online">
                                                    <img src="../../assets/01.jpg" alt=""/>
                                                </div>
                                                <div className="ca-received__msg-group">
                                                    <div className="ca-received__msgwrapper">
                                                        <div className="ca-received__msg">Hi, I wanted to check my order status. My order number is 0009483021 😀</div>
                                                        <div className="ca-msg-actions">
                                                            <div className="iconbox-dropdown dropdown">
                                                                <div className="iconbox btn-hovered-light" id="dropdownMenuButtonsr1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="iconbox__icon mdi mdi-dots-horizontal"></i>
                                                                </div>
                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButtonsr1">

                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-share-outline"></i></span>
                                                                        <span>Forward</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-content-copy"></i></span>
                                                                        <span>Copy</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-star-outline"></i></span>
                                                                        <span>Add Star</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-trash-can-outline"></i></span>
                                                                        <span>Delete</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="metadata">
                                                        <span className="time">10:10 AM</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="ca-send">
                                                <div className="ca-send__msg-group">
                                                    <div className="ca-send__msgwrapper">
                                                        <div className="ca-msg-actions">
                                                            <div className="iconbox-dropdown dropdown">
                                                                <div className="iconbox btn-hovered-light" id="dropdownMenuButtons3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="iconbox__icon mdi mdi-dots-horizontal"></i>
                                                                </div>
                                                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButtons3">

                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-share-outline"></i></span>
                                                                        <span>Forward</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-content-copy"></i></span>
                                                                        <span>Copy</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-star-outline"></i></span>
                                                                        <span>Add Star</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-trash-can-outline"></i></span>
                                                                        <span>Delete</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ca-send__msg">Great, thanks 😀 for the information! Give me one moment please while I check on that for you.</div>
                                                    </div>
                                                    <div className="metadata">
                                                        <span className="time">10:10 AM</span>
                                                        <span className="tick">
                                                                <img src="../../assets/tick-read.svg" alt=""/>
                                                            </span>
                                                    </div>
                                                </div>
                                                <div className="user-avatar user-avatar-sm user-avatar-rounded online">
                                                    <img src="../../assets/02.jpg" alt=""/>
                                                </div>
                                            </div>

                                            <div className="ca-received">
                                                <div className="user-avatar user-avatar-sm user-avatar-rounded online">
                                                    <img src="../../assets/01.jpg" alt=""/>
                                                </div>
                                                <div className="ca-received__msg-group">
                                                    <div className="ca-received__msgwrapper">
                                                        <div className="ca-received__msg">Thanks. I’m worried 😳 it won’t arrive in time ⌚ for my daughter’s birthday🎂  party 🎉🎊🎈this weekend.</div>
                                                        <div className="ca-msg-actions">
                                                            <div className="iconbox-dropdown dropdown">
                                                                <div className="iconbox btn-hovered-light" id="dropdownMenuButtonsr4" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="iconbox__icon mdi mdi-dots-horizontal"></i>
                                                                </div>
                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButtonsr4">

                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-share-outline"></i></span>
                                                                        <span>Forward</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-content-copy"></i></span>
                                                                        <span>Copy</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-star-outline"></i></span>
                                                                        <span>Add Star</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-trash-can-outline"></i></span>
                                                                        <span>Delete</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ca-received__msgwrapper">
                                                        <div className="ca-received__msg">
                                                            <div className="ca-received__msg-media-group">
                                                                <div className="ca-received__msg-media">
                                                                    <img src="../../assets/02(2).jpg" alt=""/>
                                                                </div>
                                                                <div className="ca-received__msg-media">
                                                                    <img src="../../assets/05(2).jpg" alt=""/>
                                                                </div>
                                                                <div className="ca-received__msg-media">
                                                                    <img src="../../assets/04(2).jpg" alt=""/>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="ca-msg-actions">
                                                            <div className="iconbox-dropdown dropdown">
                                                                <div className="iconbox btn-hovered-light" id="dropdownMenuButtonsr6" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="iconbox__icon mdi mdi-dots-horizontal"></i>
                                                                </div>
                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButtonsr6">
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-download-outline"></i></span>
                                                                        <span>Download</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-share-outline"></i></span>
                                                                        <span>Forward</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-content-copy"></i></span>
                                                                        <span>Copy</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-star-outline"></i></span>
                                                                        <span>Add Star</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-trash-can-outline"></i></span>
                                                                        <span>Delete</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="metadata">
                                                        <span className="time">10:10 AM</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="ca-send">
                                                <div className="ca-send__msg-group">
                                                    <div className="ca-send__msgwrapper">
                                                        <div className="ca-msg-actions">
                                                            <div className="iconbox-dropdown dropdown">
                                                                <div className="iconbox btn-hovered-light" id="dropdownMenuButtons5" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="iconbox__icon mdi mdi-dots-horizontal"></i>
                                                                </div>
                                                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButtons5">

                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-share-outline"></i></span>
                                                                        <span>Forward</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-content-copy"></i></span>
                                                                        <span>Copy</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-star-outline"></i></span>
                                                                        <span>Add Star</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-trash-can-outline"></i></span>
                                                                        <span>Delete</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ca-send__msg">I understand your concern… I wouldn’t want my child’s gift to arrive late either. It looks like your order is set to arrive in 2 business days, so it should arrive by Friday, just in time!</div>
                                                    </div>
                                                    <div className="ca-send__msgwrapper">
                                                        <div className="ca-msg-actions">
                                                            <div className="iconbox-dropdown dropdown">
                                                                <div className="iconbox btn-hovered-light" id="dropdownMenuButtons6" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="iconbox__icon mdi mdi-dots-horizontal"></i>
                                                                </div>
                                                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButtons6">

                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-share-outline"></i></span>
                                                                        <span>Forward</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-content-copy"></i></span>
                                                                        <span>Copy</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-star-outline"></i></span>
                                                                        <span>Add Star</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-trash-can-outline"></i></span>
                                                                        <span>Delete</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ca-send__msg">Is there anything else that I can do for you?</div>
                                                    </div>
                                                    <div className="metadata">
                                                        <span className="time">10:10 AM</span>
                                                        <span className="tick">
                                                                <img src="../../assets/tick-read.svg" alt=""/>
                                                            </span>
                                                    </div>
                                                </div>
                                                <div className="user-avatar user-avatar-sm user-avatar-rounded online">
                                                    <img src="../../assets/02.jpg" alt=""/>
                                                </div>
                                            </div>

                                            <div className="ca-received">
                                                <div className="user-avatar user-avatar-sm user-avatar-rounded online">
                                                    <img src="../../assets/01.jpg" alt=""/>
                                                </div>
                                                <div className="ca-received__msg-group">
                                                    <div className="ca-received__msgwrapper">
                                                        <div className="ca-received__msg">
                                                            <div className="ca__file">
                                                                <div className="ca__fileicon">
                                                                    <img src="../../assets/pdf.svg" alt=""/>
                                                                </div>
                                                                <div className="ca__filename">
                                                                    <span className="ca__filename--title">example.pdf</span>
                                                                    <span className="ca__filename--size">21Kb</span>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="ca-msg-actions">
                                                            <div className="iconbox-dropdown dropdown">
                                                                <div className="iconbox btn-hovered-light" id="dropdownMenuButtonsr7" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="iconbox__icon mdi mdi-dots-horizontal"></i>
                                                                </div>
                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButtonsr7">
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-download-outline"></i></span>
                                                                        <span>Download</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-share-outline"></i></span>
                                                                        <span>Forward</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-content-copy"></i></span>
                                                                        <span>Copy</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-star-outline"></i></span>
                                                                        <span>Add Star</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-trash-can-outline"></i></span>
                                                                        <span>Delete</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ca-received__msgwrapper">
                                                        <div className="ca-received__msg">
                                                            <div className="ca__file">
                                                                <div className="ca__fileicon">
                                                                    <img src="../../assets/word.svg" alt=""/>
                                                                </div>
                                                                <div className="ca__filename">
                                                                    <span className="ca__filename--title">example.docs</span>
                                                                    <span className="ca__filename--size">21Kb</span>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="ca-msg-actions">
                                                            <div className="iconbox-dropdown dropdown">
                                                                <div className="iconbox btn-hovered-light" id="dropdownMenuButtonsr8" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="iconbox__icon mdi mdi-dots-horizontal"></i>
                                                                </div>
                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButtonsr8">
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-download-outline"></i></span>
                                                                        <span>Download</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-share-outline"></i></span>
                                                                        <span>Forward</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-content-copy"></i></span>
                                                                        <span>Copy</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-star-outline"></i></span>
                                                                        <span>Add Star</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-trash-can-outline"></i></span>
                                                                        <span>Delete</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ca-received__msgwrapper">
                                                        <div className="ca-received__msg">
                                                            <div className="ca__file">
                                                                <div className="ca__fileicon">
                                                                    <img src="../../assets/powerpoint.svg" alt=""/>
                                                                </div>
                                                                <div className="ca__filename">
                                                                    <span className="ca__filename--title">example.pptx</span>
                                                                    <span className="ca__filename--size">21Kb</span>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="ca-msg-actions">
                                                            <div className="iconbox-dropdown dropdown">
                                                                <div className="iconbox btn-hovered-light" id="dropdownMenuButtonsr9" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="iconbox__icon mdi mdi-dots-horizontal"></i>
                                                                </div>
                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButtonsr9">
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-download-outline"></i></span>
                                                                        <span>Download</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-share-outline"></i></span>
                                                                        <span>Forward</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-content-copy"></i></span>
                                                                        <span>Copy</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-star-outline"></i></span>
                                                                        <span>Add Star</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-trash-can-outline"></i></span>
                                                                        <span>Delete</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ca-received__msgwrapper">
                                                        <div className="ca-received__msg">
                                                            <div className="ca__file">
                                                                <div className="ca__fileicon">
                                                                    <img src="../../assets/excel.svg" alt=""/>
                                                                </div>
                                                                <div className="ca__filename">
                                                                    <span className="ca__filename--title">example.xlxs</span>
                                                                    <span className="ca__filename--size">21Kb</span>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="ca-msg-actions">
                                                            <div className="iconbox-dropdown dropdown">
                                                                <div className="iconbox btn-hovered-light" id="dropdownMenuButtonsr10" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="iconbox__icon mdi mdi-dots-horizontal"></i>
                                                                </div>
                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButtonsr10">

                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-download-outline"></i></span>
                                                                        <span>Download</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-share-outline"></i></span>
                                                                        <span>Forward</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-content-copy"></i></span>
                                                                        <span>Copy</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-star-outline"></i></span>
                                                                        <span>Add Star</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-trash-can-outline"></i></span>
                                                                        <span>Delete</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="metadata">
                                                        <span className="time">10:10 AM</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="ca-send">
                                                <div className="ca-send__msg-group">
                                                    <div className="ca-send__msgwrapper">
                                                        <div className="ca-msg-actions">
                                                            <div className="iconbox-dropdown dropdown">
                                                                <div className="iconbox btn-hovered-light" id="dropdownMenuButtons7" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="iconbox__icon mdi mdi-dots-horizontal"></i>
                                                                </div>
                                                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButtons7">

                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-download-outline"></i></span>
                                                                        <span>Download</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-share-outline"></i></span>
                                                                        <span>Forward</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-content-copy"></i></span>
                                                                        <span>Copy</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-star-outline"></i></span>
                                                                        <span>Add Star</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-trash-can-outline"></i></span>
                                                                        <span>Delete</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ca-send__msg">
                                                            <div className="ca__file">
                                                                <div className="ca__fileicon">
                                                                    <img src="../../assets/pdf.svg" alt=""/>
                                                                </div>
                                                                <div className="ca__filename">
                                                                    <span className="ca__filename--title">example.pdf</span>
                                                                    <span className="ca__filename--size">21Kb</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="ca-send__msgwrapper">
                                                        <div className="ca-msg-actions">
                                                            <div className="iconbox-dropdown dropdown">
                                                                <div className="iconbox btn-hovered-light" id="dropdownMenuButtons8" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="iconbox__icon mdi mdi-dots-horizontal"></i>
                                                                </div>
                                                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButtons8">

                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-download-outline"></i></span>
                                                                        <span>Download</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-share-outline"></i></span>
                                                                        <span>Forward</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-content-copy"></i></span>
                                                                        <span>Copy</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-star-outline"></i></span>
                                                                        <span>Add Star</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-trash-can-outline"></i></span>
                                                                        <span>Delete</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ca-send__msg">
                                                            <div className="ca__file">
                                                                <div className="ca__fileicon">
                                                                    <img src="../../assets/word.svg" alt=""/>
                                                                </div>
                                                                <div className="ca__filename">
                                                                    <span className="ca__filename--title">example.docs</span>
                                                                    <span className="ca__filename--size">21Kb</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="ca-send__msgwrapper">
                                                        <div className="ca-msg-actions">
                                                            <div className="dropdown">
                                                                <div className="iconbox btn-hovered-light" id="dropdownMenuButtons9" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="iconbox__icon mdi mdi-dots-horizontal"></i>
                                                                </div>
                                                                <div className="dropdown-menu dropdown-menu-right" role="menu" aria-labelledby="dropdownMenuButtons9">

                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-download-outline"></i></span>
                                                                        <span>Download</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-share-outline"></i></span>
                                                                        <span>Forward</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-content-copy"></i></span>
                                                                        <span>Copy</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-star-outline"></i></span>
                                                                        <span>Add Star</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-trash-can-outline"></i></span>
                                                                        <span>Delete</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ca-send__msg">
                                                            <div className="ca__file">
                                                                <div className="ca__fileicon">
                                                                    <img src="../../assets/powerpoint.svg" alt=""/>
                                                                </div>
                                                                <div className="ca__filename">
                                                                    <span className="ca__filename--title">example.pptx</span>
                                                                    <span className="ca__filename--size">21Kb</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="ca-send__msgwrapper">
                                                        <div className="ca-msg-actions">
                                                            <div className="iconbox-dropdown dropdown">
                                                                <div className="iconbox btn-hovered-light" id="dropdownMenuButtons10" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="iconbox__icon mdi mdi-dots-horizontal"></i>
                                                                </div>
                                                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButtons10">

                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-download-outline"></i></span>
                                                                        <span>Download</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-share-outline"></i></span>
                                                                        <span>Forward</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-content-copy"></i></span>
                                                                        <span>Copy</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-star-outline"></i></span>
                                                                        <span>Add Star</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-trash-can-outline"></i></span>
                                                                        <span>Delete</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ca-send__msg">
                                                            <div className="ca__file">
                                                                <div className="ca__fileicon">
                                                                    <img src="../../assets/excel.svg" alt=""/>
                                                                </div>
                                                                <div className="ca__filename">
                                                                    <span className="ca__filename--title">example.xlxs</span>
                                                                    <span className="ca__filename--size">21Kb</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="metadata">
                                                        <span className="time">10:10 AM</span>
                                                        <span className="tick">
                                                                <img src="../../assets/tick-read.svg" alt=""/>
                                                            </span>
                                                    </div>
                                                </div>
                                                <div className="user-avatar user-avatar-sm user-avatar-rounded online">
                                                    <img src="../../assets/02.jpg" alt=""/>
                                                </div>
                                            </div>

                                            <div className="ca-received">
                                                <div className="user-avatar user-avatar-sm user-avatar-rounded online">
                                                    <img src="../../assets/01.jpg" alt=""/>
                                                </div>
                                                <div className="ca-received__msg-group">
                                                    <div className="ca-received__msgwrapper">
                                                        <div className="ca-received__msg">
                                                            Great, thank you! Yes, I also wanted to make sure I entered the right shipping address. My address is 12390 Mulberry Ln, Coral Springs, FL 33067. Is that where it’s being shipped to?
                                                        </div>
                                                        <div className="ca-msg-actions">
                                                            <div className="iconbox-dropdown dropdown">
                                                                <div className="iconbox btn-hovered-light" id="dropdownMenuButtonsr11" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="iconbox__icon mdi mdi-dots-horizontal"></i>
                                                                </div>
                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButtonsr11">

                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-share-outline"></i></span>
                                                                        <span>Forward</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-content-copy"></i></span>
                                                                        <span>Copy</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-star-outline"></i></span>
                                                                        <span>Add Star</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-trash-can-outline"></i></span>
                                                                        <span>Delete</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="metadata">
                                                        <span className="time">10:10 AM</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="ca-send">
                                                <div className="ca-send__msg-group">
                                                    <div className="ca-send__msgwrapper">
                                                        <div className="ca-msg-actions">
                                                            <div className="iconbox-dropdown dropdown">
                                                                <div className="iconbox btn-hovered-light" id="dropdownMenuButtons11" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="iconbox__icon mdi mdi-dots-horizontal"></i>
                                                                </div>
                                                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButtons11">

                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-share-outline"></i></span>
                                                                        <span>Forward</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-content-copy"></i></span>
                                                                        <span>Copy</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-star-outline"></i></span>
                                                                        <span>Add Star</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-trash-can-outline"></i></span>
                                                                        <span>Delete</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ca-send__msg">No problem, let me check that for you.</div>
                                                    </div>
                                                    <div className="ca-send__msgwrapper">
                                                        <div className="ca-msg-actions">
                                                            <div className="iconbox-dropdown dropdown">
                                                                <div className="iconbox btn-hovered-light" id="dropdownMenuButtons12" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="iconbox__icon mdi mdi-dots-horizontal"></i>
                                                                </div>
                                                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButtons12">

                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-share-outline"></i></span>
                                                                        <span>Forward</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-content-copy"></i></span>
                                                                        <span>Copy</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-star-outline"></i></span>
                                                                        <span>Add Star</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-trash-can-outline"></i></span>
                                                                        <span>Delete</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ca-send__msg">Yes, I have here the shipping address as 12390 Mulberry Ln, Coral Springs, FL 33067. It looks like you’re good to go!</div>
                                                    </div>
                                                    <div className="ca-send__msgwrapper">
                                                        <div className="ca-msg-actions">
                                                            <div className="iconbox-dropdown dropdown">
                                                                <div className="iconbox btn-hovered-light" id="dropdownMenuButtonsms1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="iconbox__icon mdi mdi-dots-horizontal"></i>
                                                                </div>
                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButtonsms1">
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-download-outline"></i></span>
                                                                        <span>Download</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-share-outline"></i></span>
                                                                        <span>Forward</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-content-copy"></i></span>
                                                                        <span>Copy</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-star-outline"></i></span>
                                                                        <span>Add Star</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-trash-can-outline"></i></span>
                                                                        <span>Delete</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ca-send__msg">
                                                            <div className="ca-send__msg-media-group">
                                                                <div className="ca-send__msg-media">
                                                                    <img src="../../assets/02(2).jpg" alt=""/>
                                                                </div>
                                                                <div className="ca-send__msg-media">
                                                                    <img src="../../assets/05(2).jpg" alt=""/>
                                                                </div>
                                                                <div className="ca-send__msg-media">
                                                                    <img src="../../assets/04(2).jpg" alt=""/>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div className="metadata">
                                                        <span className="time">10:10 AM</span>
                                                        <span className="tick">
                                                                <img src="../../assets/tick-read.svg" alt=""/>
                                                            </span>
                                                    </div>
                                                </div>
                                                <div className="user-avatar user-avatar-sm user-avatar-rounded online">
                                                    <img src="../../assets/02.jpg" alt=""/>
                                                </div>
                                            </div>

                                            <div className="ca-received">
                                                <div className="user-avatar user-avatar-sm user-avatar-rounded online">
                                                    <img src="../../assets/01.jpg" alt=""/>
                                                </div>
                                                <div className="ca-received__msg-group">
                                                    <div className="ca-received__msgwrapper">
                                                        <div className="ca-received__msg">
                                                            Thanks so much!
                                                        </div>
                                                        <div className="ca-msg-actions">
                                                            <div className="iconbox-dropdown dropdown">
                                                                <div className="iconbox btn-hovered-light" id="dropdownMenuButtonsr14" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="iconbox__icon mdi mdi-dots-horizontal"></i>
                                                                </div>
                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButtonsr14">

                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-share-outline"></i></span>
                                                                        <span>Forward</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-content-copy"></i></span>
                                                                        <span>Copy</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-star-outline"></i></span>
                                                                        <span>Add Star</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        <span><i className="mdi mdi-trash-can-outline"></i></span>
                                                                        <span>Delete</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="metadata">
                                                        <span className="time">10:10 AM</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="ca-received">
                                                <div className="user-avatar user-avatar-sm user-avatar-rounded online">
                                                    <img src="../../assets/01.jpg" alt=""/>
                                                </div>
                                                <div className="ca-received__msg-group">
                                                    <div className="ca-received__msgwrapper">
                                                        <div className="ca-received__msg">
                                                            <img src="../../assets/typing-01.svg" alt=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="ps__rail-x" ><div className="ps__thumb-x" tabIndex="0" data-style="left: 0px; width: 0px;"></div></div><div className="ps__rail-y" data-style="top: 0px; height: 725px; right: 0px;"><div className="ps__thumb-y" tabIndex="0" data-style="top: 0px; height: 292px;"></div></div><div className="ps__rail-x" data-style="left: 0px; bottom: 0px;"><div className="ps__thumb-x" tabIndex="0" data-style="left: 0px; width: 0px;"></div></div><div className="ps__rail-y" data-style="top: 0px; height: 757px; right: 0px;"><div className="ps__thumb-y" tabIndex="0" data-style="top: 0px; height: 319px;"></div></div></div>

                                <div className="conversation-panel__footer">
                                    <div className="composer">
                                        <div className="composer__left">
                                            <div className="composer__left--sticker">
                                                <i className="mdi mdi-sticker-emoji"></i>
                                            </div>
                                            <div className="composer__left--emoticon">
                                                <i className="mdi mdi-emoticon-outline"></i>
                                            </div>
                                        </div>

                                        <div className="composer__middle">
                                            <textarea className="form-control" rows="1" placeholder="Type a message..."></textarea>

                                            <div className="composer__middle--microphone">
                                                <i className="mdi mdi-microphone"></i>
                                            </div>
                                            <div className="composer__middle--photo">
                                                <i className="mdi mdi-camera"></i>
                                            </div>
                                            <div className="composer__middle--attachment">
                                                <i className="mdi mdi-attachment"></i>
                                            </div>
                                        </div>

                                        <div className="composer__right">
                                            <div className="composer__right--send">
                                                <i className="mdi mdi-send"></i>
                                            </div>
                                            <div className="composer__right--microphone">
                                                <i className="mdi mdi-microphone"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="information-panel personal-information-panel">
                                <div className="information-panel__head">
                                    <h5>Contact info</h5>
                                    <div className="information-panel__closer">
                                        <i className="mdi mdi-close"></i>
                                    </div>
                                </div>

                                <div className="information-panel__body ps">
                                    <div className="userprofile-avatar">
                                        <img className="img-fluid" src="../../assets/01.jpg" alt=""/>
                                    </div>

                                    <div className="userprofile-name">
                                        <h4>Jack P. Angulo</h4>
                                        <span>Product Manager</span>
                                        <div className="social-icon-box">
                                            <div className="social-icon">
                                                <i className="mdi mdi-facebook"></i>
                                            </div>
                                            <div className="social-icon">
                                                <i className="mdi mdi-linkedin"></i>
                                            </div>
                                            <div className="social-icon">
                                                <i className="mdi mdi-twitter"></i>
                                            </div>
                                            <div className="social-icon">
                                                <i className="mdi mdi-youtube"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <hr/>

                                        <table className="table table-sm table-borderless user-table-info">
                                            <tbody><tr>
                                                <td><i className="mdi mdi-cellphone-android"></i></td>
                                                <td>+91 99041-99041</td>
                                            </tr>
                                            <tr>
                                                <td><i className="mdi mdi-web"></i></td>
                                                <td>www.jackangulo.com</td>
                                            </tr>
                                            <tr>
                                                <td><i className="mdi mdi-map-marker"></i></td>
                                                <td>2519  Burnside Court, HORICON, WI, 53032</td>
                                            </tr>
                                            </tbody></table>

                                        <hr/>

                                            <div className="accordion accordion-ungrouped mb-3" id="accordionExample">
                                                <div className="card">
                                                    <div className="card-header" id="headingOne">
                                                        <div className="card-title" data-toggle="collapse" role="button" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            <div className="acpanel__heading">
                                                                <div className="acpanel__left">
                                                                    <span><i className="mdi mdi-camera-outline"></i></span>
                                                                    <span>Photos &amp; Media</span>
                                                                </div>
                                                                <div className="acpanel__right">
                                                                    <span className="badge badge-info">26</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <div className="owl-carousel owl-loaded owl-drag">






                                                                <div className="owl-stage-outer"><div className="owl-stage" data-style="transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s; width: 3px;"><div className="owl-item active" data-style="width: 0px; margin-right: 2px;"><div className="item">
                                                                    <img className="img-fluid" src="../../assets/01(2).jpg" alt=""/>
                                                                </div></div><div className="owl-item active" data-style="width: 0px; margin-right: 2px;"><div className="item">
                                                                    <img className="img-fluid" src="../../assets/02(2).jpg" alt=""/>
                                                                </div></div><div className="owl-item active" data-style="width: 0px; margin-right: 2px;"><div className="item">
                                                                    <img className="img-fluid" src="../../assets/03(1).jpg" alt=""/>
                                                                </div></div><div className="owl-item active" data-style="width: 0px; margin-right: 2px;"><div className="item">
                                                                    <img className="img-fluid" src="../../assets/04(2).jpg" alt=""/>
                                                                </div></div><div className="owl-item" data-style="width: 0px; margin-right: 2px;"><div className="item">
                                                                    <img className="img-fluid" src="../../assets/05(2).jpg" alt=""/>
                                                                </div></div><div className="owl-item" data-style="width: 0px; margin-right: 2px;"><div className="item">
                                                                    <img className="img-fluid" src="../../assets/06(1).jpg" alt=""/>
                                                                </div></div></div></div><div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button></div><div className="owl-dots"><button role="button" className="owl-dot active"><span></span></button><button role="button" className="owl-dot"><span></span></button></div><div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button></div><div className="owl-dots"><button role="button" className="owl-dot active"><span></span></button><button role="button" className="owl-dot"><span></span></button></div></div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card">
                                                    <div className="card-header" id="headingTwo">
                                                        <div className="card-title collapsed d-flex justify-content-between align-items-center" role="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                            <div className="acpanel__heading">
                                                                <div className="acpanel__left">
                                                                    <span><i className="mdi mdi-file-document-outline"></i></span>
                                                                    <span>Documents</span>
                                                                </div>
                                                                <div className="acpanel__right">
                                                                    <span className="badge badge-info">16</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <ul className="list-unstyled documentlist-wrapper">
                                                                <li>
                                                                    <div className="doclist">
                                                                        <div className="docicon">
                                                                            <img src="../../assets/pdf.svg" alt=""/>
                                                                        </div>
                                                                        <div className="doctitle">
                                                                            <div className="docname">example-file.pdf</div>
                                                                            <div className="docsize">217kb</div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="doclist">
                                                                        <div className="docicon">
                                                                            <img src="../../assets/word.svg" alt=""/>
                                                                        </div>
                                                                        <div className="doctitle">
                                                                            <div className="docname">example-file.docs</div>
                                                                            <div className="docsize">217kb</div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="doclist">
                                                                        <div className="docicon">
                                                                            <img src="../../assets/excel.svg" alt=""/>
                                                                        </div>
                                                                        <div className="doctitle">
                                                                            <div className="docname">example-file.xlxs</div>
                                                                            <div className="docsize">217kb</div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="doclist">
                                                                        <div className="docicon">
                                                                            <img src="../../assets/powerpoint.svg" alt=""/>
                                                                        </div>
                                                                        <div className="doctitle">
                                                                            <div className="docname">example-file.pptx</div>
                                                                            <div className="docsize">217kb</div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="doclistall">View All</div>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card">
                                                    <div className="card-header" id="headingFour">
                                                        <div className="card-title collapsed  d-flex justify-content-between align-items-center" role="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                            <div className="acpanel__heading">
                                                                <div className="acpanel__left">
                                                                    <span><i className="mdi mdi-settings-outline"></i></span>
                                                                    <span>Settings</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                                        <div className="card-body">

                                                            <ul className="list-unstyled">
                                                                <li>
                                                                    <div className="setting-list">
                                                                        <div className="setting-list-name">Media Auto Download</div>
                                                                        <div className="setting-list-switch">
                                                                            <label className="material-switch">
                                                                                <input type="checkbox"/>
                                                                                    <span></span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="setting-list">
                                                                        <div className="setting-list-name">Mute Conversation</div>
                                                                        <div className="setting-list-switch">
                                                                            <label className="material-switch">
                                                                                <input type="checkbox"/>
                                                                                    <span></span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="setting-list">
                                                                        <div className="setting-list-name">Notifications</div>
                                                                        <div className="setting-list-switch">
                                                                            <label className="material-switch">
                                                                                <input type="checkbox"/>
                                                                                    <span></span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="setting-list">
                                                                        <div className="setting-list-name">Block</div>
                                                                        <div className="setting-list-switch">
                                                                            <label className="material-switch">
                                                                                <input type="checkbox"/>
                                                                                    <span></span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                            <div className="ps__rail-x" data-style="left: 0px; bottom: 0px;"><div className="ps__thumb-x" tabIndex="0" data-style="left: 0px; width: 0px;"></div></div><div className="ps__rail-y" data-style="top: 0px; right: 0px;"><div className="ps__thumb-y" tabIndex="0" data-style="top: 0px; height: 0px;"></div></div><div className="ps__rail-x" data-style="left: 0px; bottom: 0px;"><div className="ps__thumb-x" tabIndex="0" data-style="left: 0px; width: 0px;"></div></div><div className="ps__rail-y" data-style="top: 0px; right: 0px;"><div className="ps__thumb-y" tabIndex="0" data-style="top: 0px; height: 0px;"></div></div></div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

        <div className="backdrop-overlay hidden"></div>
    </div></div>
}
