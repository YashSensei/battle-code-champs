import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "card" | "text" | "circular";
}

function Skeleton({ className, variant = "default", ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse",
        {
          "bg-white/5 rounded-md": variant === "default",
          "bg-white/5 rounded-2xl": variant === "card",
          "bg-white/5 rounded-md h-4 w-full": variant === "text",
          "bg-white/5 rounded-full": variant === "circular",
        },
        className
      )}
      {...props}
    />
  );
}

// Card skeleton loader
function CardSkeleton() {
  return (
    <div className="glass-dark rounded-2xl p-6 shadow-depth-lg">
      <Skeleton className="h-12 w-12 rounded-xl mb-4" />
      <Skeleton variant="text" className="mb-2" />
      <Skeleton variant="text" className="w-3/4 mb-4" />
      <Skeleton variant="text" className="h-3" />
      <Skeleton variant="text" className="h-3 w-5/6" />
    </div>
  );
}

export { Skeleton, CardSkeleton };
