import { useState, useEffect } from "react";

// Image preloading and caching utility
class ImagePreloader {
  private cache: Map<string, Promise<void>>;
  private loaded: Set<string>;

  constructor() {
    this.cache = new Map();
    this.loaded = new Set();
  }

  // Preload a single image
  preloadImage(src: string): Promise<void> {
    // Return cached promise if already loading/loaded
    if (this.cache.has(src)) {
      return this.cache.get(src)!;
    }

    const promise = new Promise<void>((resolve, reject) => {
      const img = new Image();

      img.onload = () => {
        this.loaded.add(src);
        resolve();
      };

      img.onerror = () => {
        reject(new Error(`Failed to load image: ${src}`));
      };

      img.src = src;
    });

    this.cache.set(src, promise);
    return promise;
  }

  // Preload multiple images
  async preloadImages(srcs: string[]): Promise<void[]> {
    return Promise.all(srcs.map((src) => this.preloadImage(src)));
  }

  // Check if image is loaded
  isLoaded(src: string): boolean {
    return this.loaded.has(src);
  }

  // Clear cache
  clear(): void {
    this.cache.clear();
    this.loaded.clear();
  }

  // Get cache size
  getCacheSize(): number {
    return this.cache.size;
  }
}

// Singleton instance
export const imagePreloader = new ImagePreloader();

// Preload critical images on app load
export const preloadCriticalImages = () => {
  const criticalImages = [
    // Add paths to critical images here
    "/logo.png",
    "/hero-bg.jpg",
    // Add more as needed
  ];

  return imagePreloader.preloadImages(criticalImages);
};

// Hook for lazy loading images
export const useLazyImage = (src: string) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    imagePreloader
      .preloadImage(src)
      .then(() => setIsLoaded(true))
      .catch((err) => setError(err));
  }, [src]);

  return { isLoaded, error };
};
