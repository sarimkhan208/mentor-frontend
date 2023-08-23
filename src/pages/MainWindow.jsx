import React, { useState } from "react";
import Webcam from 'react-webcam';
import "./MainWindow.css"

const MainWindow = () => {
    const webcamRef = React.useRef(null);
    const mediaRecorderRef = React.useRef(null);
    const [capturing, setCapturing] = React.useState(false);
    const [recordedChunks, setRecordedChunks] = React.useState([]);
    const [isRecording, setIsRecording] = useState(false);

    const startRecording = async () => {
        setCapturing(true);

        try {
            const videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
            const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });

            const mediaStream = new MediaStream();
            const videoTrack = videoStream.getVideoTracks()[0];
            const audioTrack = audioStream.getAudioTracks()[0];

            mediaStream.addTrack(videoTrack);
            mediaStream.addTrack(audioTrack);

            webcamRef.current.stream = mediaStream;

            mediaRecorderRef.current = new MediaRecorder(mediaStream, {
                mimeType: "video/webm"
            });

            mediaRecorderRef.current.addEventListener("dataavailable", handleDataAvailable);

            mediaRecorderRef.current.start();

            setIsRecording(true);
        } catch (error) {
            console.error("Error starting recording:", error);
        }
    };

    const stopRecording = () => {
        mediaRecorderRef.current.stop();
        webcamRef.current.stream.getTracks().forEach(track => track.stop()); // Stop all tracks
        setIsRecording(false);
        setCapturing(false);
    };

    const handleDataAvailable = ({ data }) => {
        if (data.size > 0) {
            setRecordedChunks(prev => prev.concat(data));
        }
    };

    const handleDownload = () => {
        if (recordedChunks.length) {
            const blob = new Blob(recordedChunks, {
                type: "video/webm"
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";
            a.href = url;
            a.download = "react-webcam-stream-capture.webm";
            a.click();
            window.URL.revokeObjectURL(url);
            setRecordedChunks([]);
        }
    };

    return (
        <div className="main">
            <h1>Video Recorder Application</h1>
            <div className="web-window"><Webcam audio={false} ref={webcamRef} /></div>
            <div className="buttons-div">
                {isRecording ? (
                    <button onClick={stopRecording}>Stop Capture</button>
                ) : (
                    <button onClick={startRecording}>Start Capture</button>
                )}
                {recordedChunks.length > 0 && (
                    <button onClick={handleDownload} style={{ backgroundColor: '#66BB6A' }}>Download</button>
                )}
            </div>
        </div>
    );
};

export default MainWindow;
