// components/HonorlockComponent.tsx
"use client";
// pages/HonorlockComponent.tsx ou components/HonorlockComponent.tsx
import React, { useEffect } from 'react';

// declare global {
//   interface Window {
//     HonorlockElements: any; // Utilisez `any` ou définissez un type plus précis si disponible
//   }
// }

const HonorlockComponent: React.FC = () => {
  useEffect(() => {
    // S'assure que le code s'exécute côté client
    if (typeof window !== "undefined") {
      // Charge dynamiquement @honorlock/elements
      import('@honorlock/elements').then(() => {
        // Initialisation de Honorlock
        document.addEventListener('HonorlockElements', () => {
          if (window.HonorlockElements) {
            window.HonorlockElements.init({
              token: 'votre-token',
              debug: true,
              context: {
                type: 'course',
                id: '38a47339-d8ac-4fe6-8cf1-4404797af444',
              },
            });
            console.log('Honorlock initialisé');
          }
        });
      }).catch(err => console.error("Erreur lors du chargement de @honorlock/elements:", err));
    }
  }, []);

  return (
    <div>
      <p>Ceci est une page de test pour Honorlock.</p>
      <honorlock-elements></honorlock-elements>
    </div>
  );
};

export default HonorlockComponent;

