"use client";
// components/HonorlockComponent.tsx
import React, { useEffect } from 'react';

// Assurez-vous que le type de fenêtre est étendu pour inclure HonorlockElements
declare global {
    interface Window {
        HonorlockElements: HonorlockElements;
    }
}

const HonorlockComponent: React.FC = () => {
  useEffect(() => {
    // Importe dynamiquement @honorlock/elements pour assurer la compatibilité avec SSR
    import("@honorlock/elements").then(() => {
      // Attendez que l'événement HonorlockElements soit disponible
      document.addEventListener('HonorlockElements', () => {
        // Initialisez Honorlock une fois que le composant est chargé
        if (window.HonorlockElements) {
          window.HonorlockElements.init({
            token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1MyIsImp0aSI6IjA0YWVmYzI3NzQ1MmFlYjdkOWQzNmQyM2Y2OTcxMmFjZmVlNzQwNzhjNzA4NzYwZWRiMDdlODcxY2M4Yjc5OGVjMjk4Yzg3YWUwNTAwMTYxIiwiaWF0IjoxNzEwODU1MTQ1LjUwNDM2NCwibmJmIjoxNzEwODU1MTQ1LjUwNDM2NywiZXhwIjoxNzEwOTQxNTQ1LjQ5Mjk5OCwic3ViIjoiNzg0Iiwic2NvcGVzIjpbXX0.Vxshv4UTCzkmNL6Xdv7ljkZ77zodRIFVzTf5inK-WCFHc8Vl4pBfV-6hF54PPunurX6XA081Y9vM4TdHf4bR478VbcQvTxv70mqyS92ADkdYLjQHyHEIs8ig-jabWJOhvdlLan9bn5jOC0KZ13i1GJlI92oOVnxk3adgQuY3y1gXyaxLRXTIW7XxAVAUyRloRmD9NE58ZcesUH0UJ5R8qAZ3Wg-RZ0mFxR4H8VIMu7QkiGssJsct7b6hMz9OxAvninitVuHMQ6g21efaqY8ka8j3AYVYs0fQxXAc9q67jDBbwuyuHrI0lhLOxnwORQmJSuOHmwKNQ7wV3fhSdZk4eKVHehC_jOgMadDBZdWkbcnlenbCRucvfLd2EmsmB4eCIMBgZKR1Ml6Xnb2C0jCRCwwl3ibMVnSEFPwOK31UFanYYPyLdDQ1gFMOasKmguQBFov9mt9kiDOpSGZvEVDXdVznGCpphtI0GzG9oPz5-nMEPNujAZcy5C23taPWymOM36ujpOiZam9lYY7FpLa4krn4m1SLM4VdhVTCQ3CpY_-8nyCdkG0-SOFqvMXWh71TyT0ZeYYuZQmJU0FE3vsdRAumh_hFvRUkWVga8Fn0Rr9DRXpvLhuSamgWFfkVkq7jvJvBV6HgFntyrf5mYxmasytP4WXK0gUdxWCrsUfjMBQ', // Remplacez par votre token réel
            debug: true,
            context: {
              type: 'course',
              id: '101', // Adaptez selon vos besoins
            },
          });
        }
      });
    });
  }, []);

  return (
    <div>
      <honorlock-elements></honorlock-elements>
    </div>
  );
};

export default HonorlockComponent;
