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
   // if (typeof window !== "undefined") {
      // Charge dynamiquement @honorlock/elements
      import('@honorlock/elements').then(() => {
        // Initialisation de Honorlock
         console.log('Honorlock initialisé');
        document.addEventListener('HonorlockElements', () => {
         // if (window.HonorlockElements) {
            window.HonorlockElements.init({
              token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2IiwianRpIjoiYjAyNmU3ODFjNGMzNjMwODc4YTBhMjkxMmQyNDIxMTA3MTM4OWU5MDUzNGMyZGE5MDZlZjFhNjI4N2E0NjEwMjQzNDFkY2Y2MWZmMjUwNTMiLCJpYXQiOjE3MTA5NjA0MjYuOTg3NjM4LCJuYmYiOjE3MTA5NjA0MjYuOTg3NjQyLCJleHAiOjE3MTA5NjIyMjYuOTcwMzIyLCJzdWIiOiI3MTIzNSIsInNjb3BlcyI6W119.EntwH1Rkmk_wP838bDTZGfraLrPc8DlAEDEJ1BmlrhT7VS1TWSCymDhptCpXoYW15QNX0xvVtYJLwkQgp5kcbyxCAfta7RZ-1FBcAZf0HTVF3CwIFLodSnDPDd2iosnvG7a8ykD4Sh2Xq25A1QGlJ7jz9dl6TLjcAyUzHbRq_TbXp9i1MddR6kajBPBQKqwkee_T7DebOvvWKSoxyYw8McAzYVV9PtrJ1qB8JTftU2GLT818zh61TesON_XU542vHXMtrxrZTeVUCv62k0Nwck7XlnZsuNkY2RIeU2idZtMxobTBDtZf82gAU7jyC-pft8ztUa7m02SP9gm5htLigEM1wFfO7O2u9KMr6H4KJgPwAZZMiH4WZirmbUIIPIeFBf2ZdUKW73lOqxLR8Aw1liOK1ymSMeak8umttd3A89o35Oa1u5w2P-Lw-pRiWt7Zc8wJx6spCkJB12I5HMu5atulRkLDaVgxkEUwKn9IaMCuEt6W0dQT9B7RvA6lPeTZqHfj0Ng5QLPC1_s3gmgsgO8w9NDIiofkOi1rjGULBzh3Moqan9k-RLVEQBzRRdU03zA20YvxH-8k_xKktk9ghEo6taEfAuQB7fptMkHY8eVSjyEapfhyFTqADrze-uwBzy9kcxV6un_nhEzIaZTSXtCsu9dIpF8xJeq6sLKz7AA',
              debug: true,
              context: {
                type: 'course',
                id: '38a47339-d8ac-4fe6-8cf1-4404797af444',
              },
            });
            console.log('Honorlock initialisé');
         // }
        
        }
          
        );

         console.log('Honorlock initialisé');
      }).catch(err => console.error("Erreur lors du chargement de @honorlock/elements:", err));
   // }
  }, []);

  return (
    <div>
      <p>Ceci est une page de test pour Honorlock.</p>
      <honorlock-elements></honorlock-elements>
    </div>
  );
};

export default HonorlockComponent;

