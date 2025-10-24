'use client';

import { useEffect } from 'react';

interface CalendlyEmbedProps {
  url: string;
}

const CalendlyEmbed = ({ url }: CalendlyEmbedProps) => {
  useEffect(() => {
    // Carga el script de Calendly de forma dinámica
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    script.async = true;
    if (head) {
      head.appendChild(script);
    }

    return () => {
      // Limpia el script cuando el componente se desmonte
      if (head) {
        head.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url={url}
      style={{ minWidth: '320px', height: '700px' }}
    />
  );
};

export default CalendlyEmbed;