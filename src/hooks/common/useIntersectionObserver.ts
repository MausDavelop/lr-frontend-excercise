import { useEffect } from 'react';

export const useIntersectionObserver = (
  elementToObserve: HTMLElement | null,
  callback: () => void
) => {
  useEffect(() => {
    if (elementToObserve) {
      const options = {
        root: document.body,
        treshold: 0.4
      };

      const observer = new IntersectionObserver(callback, options);

      observer.observe(elementToObserve);

      return observer.disconnect;
    }
  }, [callback, elementToObserve]);
};
