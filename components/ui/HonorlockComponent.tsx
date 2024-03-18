"use client";

// components/HonorlockComponent.tsx
import React, { useEffect } from 'react';
import '@honorlock/elements';

interface HonorlockComponentProps {
  token: string;
  contextType: 'course' | 'session' | 'exam_results' | 'exam_settings' | 'search_and_destroy';
  contextId: string;
}

const HonorlockComponent: React.FC<HonorlockComponentProps> = ({ token, contextType, contextId }) => {
useEffect(() => {
  const initHonorlock = () => {
    if (typeof window !== 'undefined' && (window as any).HonorlockElements) {
      (window as any).HonorlockElements.init({
        token,
        debug: true,
        context: {
          type: 'course',
          id: '<course-uuid>',
        },
      });
    }
  };

  document.addEventListener('HonorlockElements', initHonorlock);

  // Cleanup
  return () => {
    document.removeEventListener('HonorlockElements', initHonorlock);
  };
}, [token, contextType, contextId]);


  return <honorlock-elements></honorlock-elements>;
};

export default HonorlockComponent;
