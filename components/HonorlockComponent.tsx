"use client";
import React, { useEffect, useState } from 'react';

// Déclare un type global si @honorlock/elements n'a pas de types TypeScript
declare global {
  interface Window {
    HonorlockElements: HonorlockElements;
  }
}

const HonorlockComponent: React.FC = () => {
  const [token, setToken] = useState('');
  const [contextType, setContextType] = useState('');
  const [contextId, setContextId] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    if (isClient && token && contextType && contextId) {
      import('@honorlock/elements')
        .then(() => {
          document.addEventListener('HonorlockElements', () => {
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
          });
        })
        .catch((err) => console.error('Erreur lors du chargement de @honorlock/elements:', err));
    }
  }, [isClient, token, contextType, contextId]);

  const handleInitClick = () => {
    if (window.HonorlockElements && token && contextType && contextId) {
      window.HonorlockElements.init({
        token,
        debug: true,
        context: {
          type: contextType,
          id: contextId,
        },
      });
      console.log('Honorlock initialisé manuellement');
    }
  };

  if (!isClient) {
    return null; // Ne rien rendre lors du rendu côté serveur
  }

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
      <button onClick={handleInitClick}>Initialiser Honorlock</button>
      <honorlock-elements></honorlock-elements>
    </div>
  );
};

export default HonorlockComponent;
