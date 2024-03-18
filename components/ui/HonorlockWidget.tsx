"use client";
// components/HonorlockWidget.tsx
import React, { useEffect } from 'react';
import '@honorlock/elements';

declare global {
    interface Window {
        HonorlockElements: HonorlockElements;
    }
}

interface HonorlockWidgetProps {
    token: string;
    contextType: 'course' | 'session' | 'exam_results' | 'exam_settings' | 'search_and_destroy';
    contextId: string;
    width?: number;
    height?: number;
}

const HonorlockWidget: React.FC<HonorlockWidgetProps> = ({
  token,
  contextType,
  contextId,
  width = 500, // default width
  height = 500, // default height
}) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "js/main.js";
    script.type = "module";
    script.onload = () => {
      document.addEventListener('HonorlockElements', () => {
        if(window.HonorlockElements) {
          window.HonorlockElements.init({
            token,
            debug: true,
            context: {
              type: contextType,
              id: contextId,
            },
            width,
            height,
          });
        }
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [token, contextType, contextId, width, height]);

  return <honorlock-elements style={{ width: `${width}px`, height: `${height}px` }}></honorlock-elements>;
};

export default HonorlockWidget;
