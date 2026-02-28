import * as React from "react";
import { cn } from "@/lib/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          type={type}
          className={cn(
            "flex h-12 w-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 transition-colors",
            "focus:border-gold-500/60 focus:outline-none focus:ring-1 focus:ring-gold-500/40",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-red-500/60 focus:border-red-500/60 focus:ring-red-500/40",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1 text-xs text-red-400" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
