import React, { useState } from "react";

async function sendAudioToServer(audioBlob) {
    console.log("Sending audio to server...", audioBlob)
    const formData = new FormData();
    formData.append("audio", audioBlob);
    console.log("formData", formData)
  
    const { Configuration, OpenAIApi } = require('openai');
    const configuration = new Configuration({
        apiKey: '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',
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        temperature: 0,
        max_tokens: 7,
    }, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer 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',
        }
    });
    console.log("Response: ", response.data.choices[0].text);
}  

function AudioRecorder() {
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
      };
      setRecording(false);
    }
  };

  return (
    <div onClick={handleButtonClick}>
      {recording ? "Stop Recording" : "Start Recording"}
    </div>
  );
}

export default AudioRecorder;