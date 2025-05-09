import React, { useContext } from 'react';
import { CiMicrophoneOn } from "react-icons/ci";
import "./App.css";
import va from "./assets/ai.png";
import aigif from "./assets/aiVoice.gif";
import speakimg from "./assets/speak.gif";
import { datacontext } from './context/UserContext';
function App() {
  let { recognition, speaking, setSpeaking, prompt, response, setPrompt, setResponse } = useContext(datacontext)


  return (
    <div className='main'>
      <img src={va} alt="" id="shifra" />
      <span>I'm Shivam2.0, Order kariye guru</span>
      {!speaking ?
        <button onClick={() => {
          setPrompt("listening...")
          setSpeaking(true)
          setResponse(false)
          recognition.start()
        }}>Click here <CiMicrophoneOn /></button>
        :
        <div className='response'>
          {!response ?
            <img src={speakimg} alt="" id="speak" />
            :
            <img src={aigif} alt="" id="aigif" />}
          <p>{prompt}</p>
        </div>

      }

    </div>
  )
}

export default App
