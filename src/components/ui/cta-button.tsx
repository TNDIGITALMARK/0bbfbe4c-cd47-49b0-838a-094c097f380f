"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface CTAButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
}

const CTAButton = React.forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, variant = "gold", size = "md", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md font-semibold font-source-sans transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "btn-gold-gradient shadow-lg hover:shadow-xl": variant === "gold",
            "border border-gemstone-gold text-gemstone-gold bg-transparent hover:bg-gemstone-gold hover:text-gemstone-charcoal":
              variant === "outline",
            "text-gemstone-white hover:bg-gemstone-dark-gray": variant === "ghost",
          },
          {
            "h-8 px-3 text-sm": size === "sm",
            "h-10 px-4 text-base": size === "md",
            "h-12 px-6 text-lg": size === "lg",
            "h-14 px-8 text-xl": size === "xl",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

CTAButton.displayName = "CTAButton";

export { CTAButton };