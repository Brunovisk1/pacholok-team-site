"use client";

import { useEffect, useRef } from "react";

/**
 * Triggers an anime.js animation once when the element enters the viewport.
 * Returns a ref to attach to the container element.
 */
export function useScrollAnimate<T extends HTMLElement = HTMLElement>(
  fn: (el: T) => void,
  threshold = 0.15
) {
  const ref = useRef<T>(null);
  const fnRef = useRef(fn);
  fnRef.current = fn;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fnRef.current(el);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
