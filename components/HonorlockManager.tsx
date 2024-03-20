"use client";
// components/HonorlockManager.tsx
import React, { useEffect, useState } from 'react';

declare global {
  interface Window { HonorlockElements: HonorlockElements; }
}

const HonorlockManager: React.FC = () => {
  const [token, setToken] = useState<string>('eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2IiwianRpIjoiNDI2MTBhMmFiMDc4NGVjZDJmOWU2M2Q2ZWY5NGFiZjkxYjMxZTlhMmNiMDRjNDdhMTU5YjBlN2RhNGZkZTVkZDdmYjE2ZTIzZjQ4MDcwMzYiLCJpYXQiOjE3MTA5NTA1OTAuODA2MzIsIm5iZiI6MTcxMDk1MDU5MC44MDYzMjMsImV4cCI6MTcxMDk1MjM5MC43OTU3NDIsInN1YiI6IjcxMjM1Iiwic2NvcGVzIjpbXX0.owB0eo2pU3I5MwD27QNkfFAXiOvU-OhuMO6txT0-BgBtgZ1ltb7YRHOV8tei6-rc20h3379uDAPe5FPDP_jgOi_wDzpKHJcQfYMo0RqsV5xh2oWsFpcovaAuL87OdUfmP4XemQUw3v4QfRoB-kUthwrWpbIoX7BpqUfYk210FNyUuW5wfjqeCzPfwpsaBku7zPwn8tiP1FVRpxIcaAJf6EvPtCsmMiUB1gAVhpLL_H_o5cVptXSeDIghQvjuMIJZOGRV18Co3NeUKAAiI-2zRSyRck7dYqMBk6NswXCuneQ6e8CjMI60CYiI80WjJdI8pCCeNLvBZ1ydQ-Cmww4rvLiCmykUNvJfjvXGMHyduKJ2yn9kqT7TK3kuq90Jzno3c7ZA9vjBHZyL2TBbsvzFcz3WPXGCDnC732qh2TfiVpX0pWCa26kG4TCy17RAzws7zc3wDvX1iCQGUJjFddIkKp9iG2ko_7IFlbYhsY20r_7F9mTOMUwMaDk2v9V90Y1DHpp4-O_0qzKA-JS3rj4NRWIx7CnGg5n44TOEruxHOE4VemO36a924iANdys9KGBmNzfsG8dcikX2UmdU54RrrOqgUMMoYUy1CxKaHi3QZGNQTKL7AXhiZHIKqid02J3N7k7Q9w8VwGB0Jx6gU-kmBEIrIs3Urox2bSVDdBb3ExA');
  const [contextType, setContextType] = useState<string>('course');
  const [contextId, setContextId] = useState<string>('38a47339-d8ac-4fe6-8cf1-4404797af444');
  const [width, setWidth] = useState<number>(500);
  const [height, setHeight] = useState<number>(500);
  const contextOptions = ['course', 'session', 'exam_results', 'exam_settings', 'search_and_destroy'];
  const idOptions = {
    'course': ['default_course_uuid', 'another_course_uuid'],
    'session': ['default_session_uuid', 'another_session_uuid'],
    'exam_results': ['default_exam_results_uuid', 'another_exam_results_uuid'],
    'exam_settings': ['default_exam_settings_uuid', 'another_exam_settings_uuid'],
    'search_and_destroy': ['default_search_and_destroy_uuid', 'another_search_and_destroy_uuid'],
  };

  useEffect(() => {
    // Dynamically import @honorlock/elements to ensure compatibility with SSR
    import("@honorlock/elements").then(() => {
      // Initialize Honorlock when HonorlockElements event is available
      document.addEventListener('HonorlockElements', () => {
        window.HonorlockElements?.init({
          token,
          debug: true,
          context: {
            type: contextType,
            id: contextId,
          },
          width,
          height,
        });
        console.log("HonorlockElements initialized");
      });
    }).catch(err => console.error("Failed to load @honorlock/elements", err));
  }, [token, contextType, contextId, width, height]);

  return (
    <div>
      <select value={contextType} onChange={(e) => setContextType(e.target.value)}>
        {contextOptions.map((type) => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>

      <select value={contextId} onChange={(e) => setContextId(e.target.value)}>
        {(idOptions[contextType as keyof typeof idOptions] as string[]).map((id) => (
          <option key={id} value={id}>{id}</option>
        ))}
      </select>

      <honorlock-elements style={{ width: `${width}px`, height: `${height}px` }}></honorlock-elements>
    </div>
  );
};

export default HonorlockManager;
