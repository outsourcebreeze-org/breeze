"use client";
import React, { useEffect, useState } from 'react';
import '@honorlock/elements';

// Déclare un type global pour augmenter le type Window avec HonorlockElements, si nécessaire.
declare global {
  interface Window {
    HonorlockElements: HonorlockElements;
  }
}

const HonorlockComponent: React.FC = () => {
  const [token, setToken] = useState('');
  const [contextType, setContextType] = useState('');
  const [contextId, setContextId] = useState('');

  // Écoutez l'événement 'HonorlockElements' pour initialiser HonorlockElements
  useEffect(() => {
    const initHonorlock = () => {
      if (window.HonorlockElements) {
        window.HonorlockElements.init({
          token,
          debug: true,
          context: {
            type: contextType,
            id: contextId,
          },
        });
        console.log('Honorlock initialisé');
      }
    };

    document.addEventListener('HonorlockElements', initHonorlock);

    // Nettoyez l'événement lorsque le composant est démonté
    return () => {
      document.removeEventListener('HonorlockElements', initHonorlock);
    };
  }, [token, contextType, contextId]);

  return (
    <div>
      <input
        type="text"
        placeholder="Token"
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />
      <input
        type="text"
        placeholder="Context Type"
        value={contextType}
        onChange={(e) => setContextType(e.target.value)}
      />
      <input
        type="text"
        placeholder="Context ID"
        value={contextId}
        onChange={(e) => setContextId(e.target.value)}
      />
      <honorlock-elements style={{ width: '100%', height: '500px' }}></honorlock-elements>
      
    </div>
  );
};

export default HonorlockComponent;
