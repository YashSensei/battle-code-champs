import { useEffect, useRef } from "react";

interface PerformanceMetrics {
  renderTime: number;
  componentName: string;
  timestamp: number;
}

// Performance monitoring hook
export const usePerformanceMonitor = (componentName: string) => {
  const renderStartTime = useRef<number>(performance.now());
  const renderCount = useRef<number>(0);

  useEffect(() => {
    const renderEndTime = performance.now();
    const renderTime = renderEndTime - renderStartTime.current;
    renderCount.current += 1;

    // Log performance metrics in development
    if (process.env.NODE_ENV === "development") {
      const metrics: PerformanceMetrics = {
        renderTime,
        componentName,
        timestamp: Date.now(),
      };

      // Store in session storage for analysis
      const existingMetrics = JSON.parse(
        sessionStorage.getItem("performanceMetrics") || "[]"
      );
      existingMetrics.push(metrics);

      // Keep only last 100 metrics to prevent memory issues
      if (existingMetrics.length > 100) {
        existingMetrics.shift();
      }

      sessionStorage.setItem(
        "performanceMetrics",
        JSON.stringify(existingMetrics)
      );

      // Log slow renders (> 16ms)
      if (renderTime > 16) {
        console.warn(
          `Slow render detected in ${componentName}: ${renderTime.toFixed(2)}ms`
        );
      }
    }

    // Update start time for next render
    renderStartTime.current = performance.now();
  });

  return {
    renderCount: renderCount.current,
    componentName,
  };
};

// Get performance report
export const getPerformanceReport = () => {
  const metrics = JSON.parse(
    sessionStorage.getItem("performanceMetrics") || "[]"
  ) as PerformanceMetrics[];

  const componentStats = metrics.reduce((acc, metric) => {
    if (!acc[metric.componentName]) {
      acc[metric.componentName] = {
        count: 0,
        totalTime: 0,
        avgTime: 0,
        maxTime: 0,
      };
    }

    const stats = acc[metric.componentName];
    stats.count += 1;
    stats.totalTime += metric.renderTime;
    stats.avgTime = stats.totalTime / stats.count;
    stats.maxTime = Math.max(stats.maxTime, metric.renderTime);

    return acc;
  }, {} as Record<string, any>);

  return {
    componentStats,
    totalRenders: metrics.length,
    slowRenders: metrics.filter((m) => m.renderTime > 16).length,
  };
};
