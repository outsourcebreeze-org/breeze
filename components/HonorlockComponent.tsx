
import React, { useEffect } from 'react';

const HonorlockComponent: React.FC = () => {
  useEffect(() => {
    document.addEventListener('HonorlockElements', () => {
      window.HonorlockElements.init({
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1MyIsImp0aSI6IjA0YWVmYzI3NzQ1MmFlYjdkOWQzNmQyM2Y2OTcxMmFjZmVlNzQwNzhjNzA4NzYwZWRiMDdlODcxY2M4Yjc5OGVjMjk4Yzg3YWUwNTAwMTYxIiwiaWF0IjoxNzEwODU1MTQ1LjUwNDM2NCwibmJmIjoxNzEwODU1MTQ1LjUwNDM2NywiZXhwIjoxNzEwOTQxNTQ1LjQ5Mjk5OCwic3ViIjoiNzg0Iiwic2NvcGVzIjpbXX0.Vxshv4UTCzkmNL6Xdv7ljkZ77zodRIFVzTf5inK-WCFHc8Vl4pBfV-6hF54PPunurX6XA081Y9vM4TdHf4bR478VbcQvTxv70mqyS92ADkdYLjQHyHEIs8ig-jabWJOhvdlLan9bn5jOC0KZ13i1GJlI92oOVnxk3adgQuY3y1gXyaxLRXTIW7XxAVAUyRloRmD9NE58ZcesUH0UJ5R8qAZ3Wg-RZ0mFxR4H8VIMu7QkiGssJsct7b6hMz9OxAvninitVuHMQ6g21efaqY8ka8j3AYVYs0fQxXAc9q67jDBbwuyuHrI0lhLOxnwORQmJSuOHmwKNQ7wV3fhSdZk4eKVHehC_jOgMadDBZdWkbcnlenbCRucvfLd2EmsmB4eCIMBgZKR1Ml6Xnb2C0jCRCwwl3ibMVnSEFPwOK31UFanYYPyLdDQ1gFMOasKmguQBFov9mt9kiDOpSGZvEVDXdVznGCpphtI0GzG9oPz5-nMEPNujAZcy5C23taPWymOM36ujpOiZam9lYY7FpLa4krn4m1SLM4VdhVTCQ3CpY_-8nyCdkG0-SOFqvMXWh71TyT0ZeYYuZQmJU0FE3vsdRAumh_hFvRUkWVga8Fn0Rr9DRXpvLhuSamgWFfkVkq7jvJvBV6HgFntyrf5mYxmasytP4WXK0gUdxWCrsUfjMBQ',
        debug: true,
        context: {
          type: 'course',
          id: '101',
        },
      });
    });
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="module" src="https://unpkg.com/@honorlock/elements"></script>
        <title>Honorlock Test</title>
      </head>
      <body>
        <div>
          <h1>Test</h1>
          <p>This is a test page for Honorlock.</p>
        </div>
        <honorlock-elements></honorlock-elements>
        <script type="module" src="js/main.js"></script>
      </body>
    </html>
  );
};

export default HonorlockComponent;