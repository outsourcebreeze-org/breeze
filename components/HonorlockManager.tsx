"use client";
// components/HonorlockManager.tsx
import React, { useEffect, useState } from 'react';

declare global {
  interface Window { HonorlockElements: HonorlockElements; }
}

const HonorlockManager: React.FC = () => {
  const [token, setToken] = useState<string>('your_access_token');
  const [contextType, setContextType] = useState<string>('course');
  const [contextId, setContextId] = useState<string>('default_course_uuid');
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
