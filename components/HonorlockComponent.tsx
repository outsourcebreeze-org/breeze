"use client";
import React, { useEffect } from 'react';

declare global {
  interface Window { HonorlockElements: HonorlockElements; }
}

const HonorlockComponent: React.FC = () => {
  useEffect(() => {
    // Charge dynamiquement @honorlock/elements
    import("@honorlock/elements")
      .then(() => {
        // Écoute l'événement HonorlockElements pour initialiser Honorlock
        document.addEventListener('HonorlockElements', () => {
          if (window.HonorlockElements) {
            // Remplacez 'votre-token', 'votre-type-de-contexte', et 'votre-id-de-contexte'
            // par les valeurs appropriées pour votre utilisation.
            window.HonorlockElements.init({
              token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2IiwianRpIjoiNDI2MTBhMmFiMDc4NGVjZDJmOWU2M2Q2ZWY5NGFiZjkxYjMxZTlhMmNiMDRjNDdhMTU5YjBlN2RhNGZkZTVkZDdmYjE2ZTIzZjQ4MDcwMzYiLCJpYXQiOjE3MTA5NTA1OTAuODA2MzIsIm5iZiI6MTcxMDk1MDU5MC44MDYzMjMsImV4cCI6MTcxMDk1MjM5MC43OTU3NDIsInN1YiI6IjcxMjM1Iiwic2NvcGVzIjpbXX0.owB0eo2pU3I5MwD27QNkfFAXiOvU-OhuMO6txT0-BgBtgZ1ltb7YRHOV8tei6-rc20h3379uDAPe5FPDP_jgOi_wDzpKHJcQfYMo0RqsV5xh2oWsFpcovaAuL87OdUfmP4XemQUw3v4QfRoB-kUthwrWpbIoX7BpqUfYk210FNyUuW5wfjqeCzPfwpsaBku7zPwn8tiP1FVRpxIcaAJf6EvPtCsmMiUB1gAVhpLL_H_o5cVptXSeDIghQvjuMIJZOGRV18Co3NeUKAAiI-2zRSyRck7dYqMBk6NswXCuneQ6e8CjMI60CYiI80WjJdI8pCCeNLvBZ1ydQ-Cmww4rvLiCmykUNvJfjvXGMHyduKJ2yn9kqT7TK3kuq90Jzno3c7ZA9vjBHZyL2TBbsvzFcz3WPXGCDnC732qh2TfiVpX0pWCa26kG4TCy17RAzws7zc3wDvX1iCQGUJjFddIkKp9iG2ko_7IFlbYhsY20r_7F9mTOMUwMaDk2v9V90Y1DHpp4-O_0qzKA-JS3rj4NRWIx7CnGg5n44TOEruxHOE4VemO36a924iANdys9KGBmNzfsG8dcikX2UmdU54RrrOqgUMMoYUy1CxKaHi3QZGNQTKL7AXhiZHIKqid02J3N7k7Q9w8VwGB0Jx6gU-kmBEIrIs3Urox2bSVDdBb3ExA',
              debug: true,
              context: {
                type: 'course', // exemple : 'course'
                id: '38a47339-d8ac-4fe6-8cf1-4404797af444', // exemple : '12345'
              },
            });
            console.log('Honorlock initialisé');
          }
        });
      })
      .catch(err => console.error("Erreur lors du chargement de @honorlock/elements: ", err));
  }, []);

  return (
    <div>
      <h1>Intégration d'Honorlock</h1>
      {/* Le composant honorlock-elements sera rempli par le script Honorlock */}
      <honorlock-elements></honorlock-elements>
    </div>
  );
};

export default HonorlockComponent;
