import React, { useState } from 'react';
import "./App.css"
import "regenerator-runtime"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const App = () => {
  const [listening, setListening] = useState(false);

  const startListening = () => {
    setListening(true);
    SpeechRecognition.startListening({ continuous: true });
  }

  const stopListening = () => {
    setListening(false);
    SpeechRecognition.stopListening();
  }

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className='container'>
      <h2>Speech to Text Converter</h2>
      <br />
      <p>A React hook that converts speech from the microphone to text and makes it available to your React components.</p>

      <div className='main-content text-green-400'>
        {transcript}
      </div>

      <div className='flex justify-between'>
        
        <button className='btn btn-primary' onClick={() => navigator.clipboard.writeText(transcript)} disabled={!transcript}>Copy</button>
        <button className='btn btn-primary' onClick={startListening} disabled={listening}>Start Listening</button>
        <button className='btn btn-primary' onClick={stopListening} disabled={!listening}>Stop Listening</button>
      </div>
    </div>
  );
};

export default App;
