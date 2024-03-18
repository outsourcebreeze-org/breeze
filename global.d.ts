declare namespace JSX {
  interface IntrinsicElements {
    'honorlock-elements': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  }
}
interface HonorlockElements {
  init: (config: { 
    token: string; 
    debug: boolean; 
    context: { 
      type: string; 
      id: string; 
    }; 
    width?: number; 
    height?: number; 
  }) => void;
}

// Etendez l'interface Window pour inclure HonorlockElements avec le type correct
interface Window {
  HonorlockElements: HonorlockElements;
}
