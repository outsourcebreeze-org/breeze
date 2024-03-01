// VideoComponent.tsx

// The first line should be "use client" to mark this component as a Client Component.
"use client";

// Import necessary libraries
import React, { useState, useEffect, useRef } from 'react';

// Define types for your props here if you have any, for example:
interface VideoComponentProps {
  apiKey: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ apiKey }) => {
  const videoEl = useRef<HTMLVideoElement>(null);
  const [scene, setScene] = useState<any>(null);
  const [connectionError, setConnectionError] = useState<string>('');

  useEffect(() => {
    if (scene) {
      scene.startVideo().then((videoState: any) => {
        console.info('Started video with state:', videoState);
      }).catch((error: any) => {
        console.warn('Could not start video:', error);
      });
    }
  }, [scene]);

  const connect = async () => {
    if (!videoEl.current) return;

    try {
      const newScene: any = new (window as any).Scene({
        apiKey,
        videoElement: videoEl.current,
        requestedMediaDevices: { microphone: true, camera: true },
        requiredMediaDevices: { microphone: true, camera: true },
      });

      const sessionId = await newScene.connect();
      console.info('Success! Session ID:', sessionId);
      setScene(newScene);
    } catch (error: any) {
      console.warn('Connection error:', error);
      setConnectionError(error.name);
    }
  };

  return (
    <div>
      <video id="sm-video" ref={videoEl} style={{ width: '100%' }} />
      <button onClick={connect}>Connect</button>
      {connectionError && <p>Error connecting: {connectionError}</p>}
    </div>
  );
};

export default VideoComponent;
