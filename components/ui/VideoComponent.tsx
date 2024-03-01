"use client";

import React, { useState, useRef, useEffect } from 'react';
// Importez Scene depuis le SDK
import { Scene } from '@soulmachines/smwebsdk';

interface VideoConnectionComponentProps {
  apiKey: string;
}

const VideoConnectionComponent: React.FC<VideoConnectionComponentProps> = ({ apiKey }) => {
  const videoEl = useRef<HTMLVideoElement>(null);
  const [scene, setScene] = useState<Scene | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (!videoEl.current) {
      console.error('Video element is not available');
      return;
    }

    try {
      const newScene = new Scene({
        apiKey,
        videoElement: videoEl.current,
        requestedMediaDevices: { microphone: true, camera: true },
        requiredMediaDevices: { microphone: true, camera: true },
      });

      // Votre logique de connexion ici
      setScene(newScene);
    } catch (error: any) {
      console.error('Connection failed:', error);
      setError(error.message);
    }
  }, [apiKey]);

  // Le reste de votre composant...

  return (
    <div>
      <video ref={videoEl} style={{ width: '100%' }} />
      <button onClick={() => {/* logique de connexion */}}>Connect</button>
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default VideoConnectionComponent;
