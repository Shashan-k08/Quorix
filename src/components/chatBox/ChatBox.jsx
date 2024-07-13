import React from 'react';
import './ChatBox.css';
import { BiSolidSend } from "react-icons/bi";
import { RiScissorsLine } from "react-icons/ri";
import { TiPin } from "react-icons/ti";
import { IoIosTimer } from "react-icons/io";
import { TiMessage } from "react-icons/ti";
import { AiFillThunderbolt } from "react-icons/ai";

const ChatBox = () => {
  return (
    <div id='chat-box'>
        <div id='text-tools'> <div><AiFillThunderbolt color='red' cursor="pointer" fontSize="18px" /> <RiScissorsLine opacity={.3} id='scir' cursor="pointer" fontSize="18px" /> <TiPin color="gray" cursor="pointer" fontSize="18px"/> </div> <div><IoIosTimer color='gray' cursor="pointer" fontSize="18px"/> <TiMessage color='green' cursor="pointer" fontSize="18px"/> </div></div>
        <textarea id='textArea' placeholder='Type a message...'></textarea>
        <div className='box-icons'>
            <p style={{color:"#0a9ee8" , fontWeight:"600" , fontSize:"15px", margin:"0px",cursor:"pointer",}}>@</p>
            <p id='add-box'> <text style={{color:"#0a9ee8" , fontWeight:"600" , fontSize:"20px" ,cursor:"pointer"}}>+</text> Add Tools</p>
        <BiSolidSend cursor="pointer" className='bt'/> 
        </div>
    </div>
  )
}

export default ChatBox