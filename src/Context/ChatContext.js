import React, {useState,createContext} from 'react'

const ChatContext= createContext()
const ChatProvider =(props)=>{


// states here

const [chatOpen, setChatOpen]=useState(false)


// methods here
const showChat=()=>{
    setChatOpen(true)
}






return (
        <ChatContext.Provider value={{chatOpen,showChat}}>
            {props.children}
        </ChatContext.Provider>
    )
 }

const ChatConsumer = ChatContext.Consumer;
export {ChatProvider,ChatConsumer, ChatContext}
