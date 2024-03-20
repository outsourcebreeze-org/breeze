// components/HonorlockComponent.tsx
"use client";
import React, { useEffect } from 'react';

const HonorlockComponent: React.FC = () => {
  useEffect(() => {
    // Vérifie si le script de Honorlock a déjà été ajouté
    const scriptId = 'honorlock-script';
    if (document.getElementById(scriptId)) {
      console.log("Script Honorlock déjà ajouté.");
      return;
    }

    // Crée et ajoute le script de Honorlock à la page
    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'module';
    script.innerHTML = `
      import '@honorlock/elements';
      document.addEventListener('HonorlockElements', () => {
          window.HonorlockElements.init({
              token: 'votre-token',
              debug: true,
              context: {
                  type: 'course',
                  id: '38a47339-d8ac-4fe6-8cf1-4404797af444',
              },
          });
      });
    `;
    document.body.appendChild(script);

    return () => {
      // Nettoie le script lors du démontage du composant
      script && document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <p>This is a test page for Honorlock.</p>
      <honorlock-elements></honorlock-elements>
    </div>
  );
};

export default HonorlockComponent;
