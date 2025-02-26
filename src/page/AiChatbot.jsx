import React from "react";
import Navbar from "../components/Header/Navbar";
import ChatBot from "../components/AiChatbot/ChatBot";

const AiChatbot = () => {
    return (
        <div>
            <Navbar />
            <ChatBot />
        </div>
    );
}

export default AiChatbot;