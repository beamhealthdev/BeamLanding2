import React, { useState } from "react";


async function blobToAudioBuffer(blob) {
  const arrayBuffer = await blob.arrayBuffer();
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  return new Promise((resolve, reject) => {
    audioContext.decodeAudioData(arrayBuffer, resolve, reject);
  });
}

const toWav = require('audiobuffer-to-wav');

async function sendAudioToServer(audioBlob) {
    console.log("Sending audio to server...", audioBlob)
    const audioBuffer = await blobToAudioBuffer(audioBlob);


    // Convert the AudioBuffer to a WAV Blob
    const wavBuffer = toWav(audioBuffer);
    const wavBlob = new Blob([wavBuffer], { type: 'audio/wav' });
    const formData = new FormData();
    formData.append("file", wavBlob, "audio.wav");
    formData.append("model", "whisper-1");
    const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
        method: 'POST',
        headers: {
          "Authorization": 'Bearer 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',
        },
        body: formData,
    });
    if(response.ok) {
      const data = await response.json();
      console.log("Data: ", data['text']);
      return data['text'];
    }
    
}  

function AudioRecorder(props) {
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);

  const handleButtonClick = async () => {
    if (!recording) {
      // Start recording
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      recorder.start();

      setMediaRecorder(recorder);
      setRecording(true);
    } else {
      // Stop recording
      mediaRecorder.stop();
      mediaRecorder.ondataavailable = async (e) => {
        const audioBlob = e.data;
        // Send the audio blob to the server for transcription
        const transcription = await sendAudioToServer(audioBlob);
        console.log("Transcription:", transcription);
        props.onTranscription(transcription)
      };
      setRecording(false);
    }
  };

  return (
    <div onClick={handleButtonClick}>
      <i className={recording ? "fas fa-microphone-slash" : "fas fa-microphone"}></i>
      {recording ? "Stop Recording" : "Start Recording"}
    </div>
  );
}

export default AudioRecorder;