import React, { useEffect, useRef, useState } from "react";

interface ViewportCacheOptions {
  rootMargin?: string;
  threshold?: number;
  cacheTime?: number; // Time to keep components cached in ms
}

export const useViewportCache = (options: ViewportCacheOptions = {}) => {
  const {
    rootMargin = "50px",
    threshold = 0.1,
    cacheTime = Infinity, // Default to infinite cache
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const cacheTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isCurrentlyVisible = entry.isIntersecting;
        setIsVisible(isCurrentlyVisible);

        if (isCurrentlyVisible) {
          setHasBeenVisible(true);
          setShouldRender(true);

          // Clear any pending cache timeout
          if (cacheTimeoutRef.current) {
            clearTimeout(cacheTimeoutRef.current);
            cacheTimeoutRef.current = undefined;
          }
        } else if (hasBeenVisible && cacheTime !== Infinity) {
          // Set timeout to stop rendering after cache time
          cacheTimeoutRef.current = setTimeout(() => {
            setShouldRender(false);
          }, cacheTime);
        }
      },
      {
        rootMargin,
        threshold,
      }
    );

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
      if (cacheTimeoutRef.current) {
        clearTimeout(cacheTimeoutRef.current);
      }
    };
  }, [rootMargin, threshold, hasBeenVisible, cacheTime]);

  return {
    ref: elementRef,
    isVisible,
    hasBeenVisible,
    shouldRender: shouldRender || isVisible, // Always render if visible
  };
};

// HOC for viewport cached components
export const withViewportCache = <P extends object>(
  Component: React.ComponentType<P>,
  options?: ViewportCacheOptions
) => {
  const CachedComponent = (props: P) => {
    const { ref: cacheRef, shouldRender } = useViewportCache(options);

    return (
      <div ref={cacheRef}>{shouldRender ? <Component {...props} /> : null}</div>
    );
  };

  return CachedComponent;
};
