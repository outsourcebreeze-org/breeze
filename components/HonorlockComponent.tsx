"use client";
import React, { useEffect, useState } from 'react';
import '@honorlock/elements'; // Assurez-vous que cela ne cause pas d'erreurs lors du rendu côté serveur

declare global {
  interface Window {
    HonorlockElements: {
      init: (config: {
        token: string;
        debug: boolean;
        context: { type: string; id: string };
      }) => void;
    };
  }
}

const HonorlockComponent: React.FC = () => {
  const [token, setToken] = useState('');
  const [contextType, setContextType] = useState('');
  const [contextId, setContextId] = useState('');
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.HonorlockElements && token && contextType && contextId && !initialized) {
      window.HonorlockElements.init({
        token,
        debug: true,
        context: {
          type: contextType,
          id: contextId,
        },
      });
      console.log('Honorlock initialized');
      setInitialized(true);
    }
  }, [token, contextType, contextId, initialized]);

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
      {typeof window !== 'undefined' && <honorlock-elements />}
    </div>
  );
};

export default HonorlockComponent;
