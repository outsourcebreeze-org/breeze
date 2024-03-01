// Use client directive for Next.js 13.4 to ensure this component is treated as a Client Component
"use client";

import React, { useState, useRef, useEffect } from 'react';

// Assuming Scene is a globally available type, you might need to adjust this based on your actual implementation.
// If Scene is part of an SDK you're using, ensure to import it and its types correctly.
declare global {
  interface Window {
    Scene: any; // Adjust this type according to the actual API of the Scene object.
  }
}

interface VideoConnectionComponentProps {
  apiKey: string;
}

const VideoConnectionComponent: React.FC<VideoConnectionComponentProps> = ({ apiKey }) => {
  const videoEl = useRef<HTMLVideoElement>(null);
  const [scene, setScene] = useState<any>(null); // Consider using a more specific type for the scene.
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (!scene) return;

    // Automatically start the video upon successful connection.
    const startVideo = async () => {
      try {
        await scene.startVideo();
        console.info('Video started successfully.');
      } catch (error: any) {
        console.error('Could not start video:', error);
        setError(error.message);
      }
    };

    startVideo();
  }, [scene]);

  const connect = async () => {
    if (!videoEl.current) {
      console.error('Video element is not available');
      return;
    }

    try {
      const newScene = new window.Scene({
        apiKey,
        videoElement: videoEl.current,
        requestedMediaDevices: { microphone: true, camera: true },
        requiredMediaDevices: { microphone: true, camera: true },
      });

      const sessionId = await newScene.connect();
      console.info('Connection successful, session ID:', sessionId);
      setScene(newScene);
    } catch (error: any) {
      console.error('Connection failed:', error);
      setError(error.message);
    }
  };

  return (
    <div>
      <video ref={videoEl} style={{ width: '100%' }} />
      <button onClick={connect}>Connect</button>
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default VideoConnectionComponent;
