
import axios from 'axios';
import React from 'react'
import { useState, useContext } from 'react';
import { AuthContext } from "../context/auth.context"
function Conversation() {
  const [message, setMessage] = useState("");
  const { user } = useContext(AuthContext);
  const handleMessage = (e) => setMessage(e.target.value)

  const createMessage = async () => {
    try {
      const storedToken = localStorage.getItem('authToken');
      let response = await axios.post(`${process.env.REACT_APP_API_URL}/chat/create/`, {
        headers: {
          Authorization: `Bearer ${storedToken}`
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1 className="text-white font-bold"> Conversation</h1>
      {user && (
        <input
          type="text"
          value={message}
          onChange={handleMessage}
          placeholder="Type your message here"
          className="bg-white" />
      )}
    </div>
  )
}

export default Conversation;