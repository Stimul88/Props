import React from 'react'
import {ChatTypes} from "../types";

export default function MessageHistory(props): any {
    const {list} = props;

    if(list.length == 0) return;

    return (
        <ul >
            {list.map((item:ChatTypes) =>
            <li className="clearfix"
                key={item.id}
            >
                <div className="message-data align-right">
                    <span className="message-data-time">{item.time}</span> &nbsp; &nbsp;
                    <span className="message-data-name">{item.from.name}</span>
                    <i className="fa fa-circle me"></i>
                </div>
                <div className="message other-message float-right">
                    {item.text}
                </div>
            </li>
            )}
        </ul>
    )
}

MessageHistory.defaultProps = {
    list: [],
};
