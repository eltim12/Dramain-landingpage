// src/components/ScrollToHash.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    let retries = 0;

    const scrollToElement = () => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else if (retries < 10) {
        retries++;
        setTimeout(scrollToElement, 100); // Retry up to 10 times
      }
    };

    // Give the page a small delay to render the target element
    setTimeout(scrollToElement, 100);
  }, [hash]);

  return null;
}
