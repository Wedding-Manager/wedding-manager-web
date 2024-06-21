import { useState, useEffect, useRef, MutableRefObject } from "react";

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

const useIntersectionObserver = (
  options: IntersectionObserverOptions
): [
  MutableRefObject<HTMLDivElement | null>,
  IntersectionObserverEntry | null
] => {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const nodeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setEntry(entry);
    }, options);

    const node = nodeRef.current;
    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [nodeRef, options]);

  return [nodeRef, entry];
};

export default useIntersectionObserver;
