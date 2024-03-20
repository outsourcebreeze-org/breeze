"use client";
// components/HonorlockComponent.tsx
import React, { useEffect } from 'react';

declare global {
  interface Window {
    HonorlockElements: HonorlockElements;
  }
}

const HonorlockComponent: React.FC = () => {
  useEffect(() => {
    // S'assure que le code s'exécute uniquement côté client
    if (typeof window !== "undefined") {
      // Charge Honorlock si disponible
      const honorlockScript = document.createElement("script");
      honorlockScript.src = "/path/to/honorlock/elements/script.js"; // Remplacez par le chemin correct vers honorlock elements si nécessaire
      honorlockScript.async = true;
      honorlockScript.onload = () => {
        document.addEventListener('HonorlockElements', () => {
          if (window.HonorlockElements) {
            window.HonorlockElements.init({
              token: 'votre-token',
              debug: true,
              context: {
                type: 'votre-type-de-contexte',
                id: 'votre-id-de-contexte',
              },
            });
            console.log('Honorlock initialisé');
          }
        });
      };
      document.body.appendChild(honorlockScript);
    }
  }, []);

  return (
    <div>
      <h1>Intégration d'Honorlock</h1>
      <honorlock-elements></honorlock-elements>
    </div>
  );
};

export default HonorlockComponent;

