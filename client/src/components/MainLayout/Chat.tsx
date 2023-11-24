import React from 'react';
import ChatStyles from './Chat.module.css';

const Chat: React.FC = () => {
    return (
        <div className={ChatStyles.chat}>
            <i className="bi bi-chat-quote-fill"></i>
        </div>
    )
}

export default Chat;