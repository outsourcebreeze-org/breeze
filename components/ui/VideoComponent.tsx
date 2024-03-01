"use client";

// VideoConnection.tsx
import React, { useRef, useState, useEffect } from 'react';
import { Scene } from '@soulmachines/smwebsdk'; // Assurez-vous que l'importation correspond à l'exportation du SDK

interface VideoConnectionProps {
  apiKey: string;
}

const VideoConnection: React.FC<VideoConnectionProps> = ({ apiKey }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const connect = async () => {
      if (!videoRef.current) {
        console.error('Video element is not available');
        return;
      }

      try {
        const scene = new Scene({
          apiKey: apiKey,
          videoElement: videoRef.current,
          requestedMediaDevices: { microphone: true, camera: true },
          requiredMediaDevices: { microphone: true, camera: true },
        });

        await scene.connect().then((sessionId: string | undefined) => {
          if (!sessionId) {
            throw new Error('Session ID is undefined');
          }
          console.info('Connection successful, session ID:', sessionId);
          return scene.startVideo();
        }).then(() => {
          console.info('Video started successfully.');
        }).catch((error: any) => {
          console.error('Error starting video:', error);
          setError(error.message);
        });
      } catch (error: any) {
        console.error('Connection failed:', error);
        setError(error.message);
      }
    };

    connect();
  }, [apiKey]);

  return (
    <div>
      <video ref={videoRef} style={{ width: '100%' }} autoPlay playsInline />
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default VideoConnection;
