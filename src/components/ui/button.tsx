"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none text-sm font-semibold tracking-widest uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        gold: "bg-gold-gradient text-[#0A0A0A] hover:brightness-110 shadow-lg shadow-gold-900/30",
        outline:
          "border border-gold-500/60 text-gold-500 hover:bg-gold-500/10 hover:border-gold-500",
        ghost: "text-gold-500 hover:bg-gold-500/10",
        white:
          "bg-white text-[#0A0A0A] hover:bg-white/90 shadow-lg shadow-black/20",
        dark: "bg-[#1A1A1A] text-white hover:bg-[#222] border border-white/10",
        whatsapp:
          "bg-[#25D366] text-white hover:bg-[#22c55e] shadow-lg shadow-[#25D366]/30",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        default: "h-12 px-8",
        lg: "h-14 px-10 text-base",
        xl: "h-16 px-12 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "gold",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
