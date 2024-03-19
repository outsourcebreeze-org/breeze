"use client";
// components/HonorlockComponent.tsx
import React, { useEffect } from 'react';

const HonorlockComponent: React.FC = () => {
  useEffect(() => {
    // S'assure que le code s'exécute uniquement côté client
    if (typeof window !== "undefined") {
      // Ecoute l'événement HonorlockElements pour initialiser Honorlock
      document.addEventListener('HonorlockElements', () => {
        if (window.HonorlockElements) {
          window.HonorlockElements.init({
            token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1MyIsImp0aSI6IjA0YWVmYzI3NzQ1MmFlYjdkOWQzNmQyM2Y2OTcxMmFjZmVlNzQwNzhjNzA4NzYwZWRiMDdlODcxY2M4Yjc5OGVjMjk4Yzg3YWUwNTAwMTYxIiwiaWF0IjoxNzEwODU1MTQ1LjUwNDM2NCwibmJmIjoxNzEwODU1MTQ1LjUwNDM2NywiZXhwIjoxNzEwOTQxNTQ1LjQ5Mjk5OCwic3ViIjoiNzg0Iiwic2NvcGVzIjpbXX0.Vxshv4UTCzkmNL6Xdv7ljkZ77zodRIFVzTf5inK-WCFHc8Vl4pBfV-6hF54PPunurX6XA081Y9vM4TdHf4bR478VbcQvTxv70mqyS92ADkdYLjQHyHEIs8ig-jabWJOhvdlLan9bn5jOC0KZ13i1GJlI92oOVnxk3adgQuY3y1gXyaxLRXTIW7XxAVAUyRloRmD9NE58ZcesUH0UJ5R8qAZ3Wg-RZ0mFxR4H8VIMu7QkiGssJsct7b6hMz9OxAvninitVuHMQ6g21efaqY8ka8j3AYVYs0fQxXAc9q67jDBbwuyuHrI0lhLOxnwORQmJSuOHmwKNQ7wV3fhSdZk4eKVHehC_jOgMadDBZdWkbcnlenbCRucvfLd2EmsmB4eCIMBgZKR1Ml6Xnb2C0jCRCwwl3ibMVnSEFPwOK31UFanYYPyLdDQ1gFMOasKmguQBFov9mt9kiDOpSGZvEVDXdVznGCpphtI0GzG9oPz5-nMEPNujAZcy5C23taPWymOM36ujpOiZam9lYY7FpLa4krn4m1SLM4VdhVTCQ3CpY_-8nyCdkG0-SOFqvMXWh71TyT0ZeYYuZQmJU0FE3vsdRAumh_hFvRUkWVga8Fn0Rr9DRXpvLhuSamgWFfkVkq7jvJvBV6HgFntyrf5mYxmasytP4WXK0gUdxWCrsUfjMBQ', // Remplacez 'votre-token-ici' par votre token réel
            debug: true,
            context: {
              type: 'course',
              id: '101', // Remplacez '101' par votre ID de cours
            },
          });
        }
      });

      // Importe @honorlock/elements
      const script = document.createElement('script');
      script.src = '@honorlock/elements'; // Assurez-vous que ce chemin est correct
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <div>
      <honorlock-elements style={{ width: '100%', height: 'auto' }}></honorlock-elements>
    </div>
  );
};

export default HonorlockComponent;
