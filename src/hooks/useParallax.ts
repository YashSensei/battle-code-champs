import { useEffect, useState, useRef, RefObject } from "react";

export const useParallax = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollY;
};

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setProgress(Math.min(currentProgress, 100));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return progress;
};

export const useIntersectionObserver = (
  threshold: number = 0.1,
  rootMargin: string = "0px"
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin, hasIntersected]);

  return { ref, isIntersecting, hasIntersected };
};

export const useScrollTransform = (
  elementRef: RefObject<HTMLElement>,
  transformConfig: {
    translateY?: number;
    translateX?: number;
    scale?: number;
    rotate?: number;
    opacity?: number;
  } = {}
) => {
  const [transform, setTransform] = useState("");
  const scrollY = useParallax();

  useEffect(() => {
    if (!elementRef.current) return;

    const rect = elementRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const elementTop = rect.top + scrollY;
    const elementHeight = rect.height;

    // Calculate scroll progress for this element (0 to 1)
    const scrollProgress = Math.max(
      0,
      Math.min(
        1,
        (scrollY - elementTop + windowHeight) / (windowHeight + elementHeight)
      )
    );

    const transforms = [];

    if (transformConfig.translateY !== undefined) {
      const translateY = transformConfig.translateY * scrollProgress;
      transforms.push(`translateY(${translateY}px)`);
    }

    if (transformConfig.translateX !== undefined) {
      const translateX = transformConfig.translateX * scrollProgress;
      transforms.push(`translateX(${translateX}px)`);
    }

    if (transformConfig.scale !== undefined) {
      const scale = 1 + (transformConfig.scale - 1) * scrollProgress;
      transforms.push(`scale(${scale})`);
    }

    if (transformConfig.rotate !== undefined) {
      const rotate = transformConfig.rotate * scrollProgress;
      transforms.push(`rotate(${rotate}deg)`);
    }

    setTransform(transforms.join(" "));
  }, [scrollY, elementRef, transformConfig]);

  return transform;
};

export const useMouseParallax = (intensity: number = 0.5) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [transform, setTransform] = useState("");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) * intensity;
      const y = (e.clientY - window.innerHeight / 2) * intensity;
      setMousePosition({ x, y });
      setTransform(`translate(${x * 0.05}px, ${y * 0.05}px)`);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [intensity]);

  return { mousePosition, transform };
};

export const useScrollVelocity = () => {
  const [velocity, setVelocity] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [lastTime, setLastTime] = useState(Date.now());

  useEffect(() => {
    const handleScroll = () => {
      const currentTime = Date.now();
      const currentScrollY = window.scrollY;

      const timeDiff = currentTime - lastTime;
      const scrollDiff = currentScrollY - lastScrollY;

      if (timeDiff > 0) {
        const currentVelocity = Math.abs(scrollDiff) / timeDiff;
        setVelocity(currentVelocity);
      }

      setLastScrollY(currentScrollY);
      setLastTime(currentTime);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, lastTime]);

  return velocity;
};
