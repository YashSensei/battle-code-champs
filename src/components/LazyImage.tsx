import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholder?: string;
  threshold?: number;
  rootMargin?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export const LazyImage = ({
  src,
  alt,
  placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect width="100%25" height="100%25" fill="%23ddd"/%3E%3C/svg%3E',
  threshold = 0.1,
  rootMargin = "50px",
  onLoad,
  onError,
  className,
  ...props
}: LazyImageProps) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    // Use IntersectionObserver for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start loading the image
            const tempImg = new Image();

            tempImg.onload = () => {
              setImageSrc(src);
              setIsLoaded(true);
              onLoad?.();
            };

            tempImg.onerror = () => {
              setIsError(true);
              onError?.();
            };

            tempImg.src = src;
            observer.unobserve(img);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(img);

    return () => {
      observer.unobserve(img);
    };
  }, [src, threshold, rootMargin, onLoad, onError]);

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={cn(
        "transition-opacity duration-300",
        isLoaded ? "opacity-100" : "opacity-0",
        isError && "opacity-50",
        className
      )}
      {...props}
    />
  );
};
