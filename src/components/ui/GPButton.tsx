"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GPButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const variantStyles: Record<string, string> = {
  primary:
    "bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:ring-indigo-500 shadow-sm",
  secondary:
    "bg-gray-900 text-white hover:bg-gray-800 focus-visible:ring-gray-500 shadow-sm",
  outline:
    "border border-gray-300 text-gray-700 bg-transparent hover:bg-gray-100 focus-visible:ring-gray-400",
  ghost:
    "text-gray-700 bg-transparent hover:bg-gray-100 focus-visible:ring-gray-300",
  danger:
    "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500 shadow-sm",
};

const sizeStyles: Record<string, string> = {
  sm: "h-8 px-3 text-xs gap-1.5",
  md: "h-10 px-5 text-sm gap-2",
  lg: "h-12 px-6 text-base gap-2.5",
};

// Spinner border color per variant — avoids hardcoded white
const spinnerStyles: Record<string, string> = {
  primary: "border-white/40 border-t-white",
  secondary: "border-white/40 border-t-white",
  outline: "border-gray-400/40 border-t-gray-600",
  ghost: "border-gray-400/40 border-t-gray-600",
  danger: "border-white/40 border-t-white",
};

const iconSizeStyles: Record<string, string> = {
  sm: "size-3.5",
  md: "size-4",
  lg: "size-5",
};

const GPButton = ({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  leftIcon,
  rightIcon,
  className,
  disabled,
  ...props
}: GPButtonProps) => {
  const isDisabled = loading || disabled;

  return (
    <button
      disabled={isDisabled}
      aria-busy={loading}
      className={cn(
        // Base
        "relative inline-flex items-center justify-center rounded-none font-medium",
        "cursor-pointer select-none whitespace-nowrap",
        // Transition
        "transition-all duration-150 ease-in-out",
        // Focus ring
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        // Disabled
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {/* Overlay spinner — no layout shift */}
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span
            className={cn(
              "animate-spin rounded-full border-2",
              iconSizeStyles[size],
              spinnerStyles[variant],
            )}
          />
        </span>
      )}

      {/* Content — kept in DOM, just invisible while loading */}
      <span
        className={cn(
          "inline-flex items-center justify-center",
          sizeStyles[size].split(" ").find((c) => c.startsWith("gap")),
          loading && "invisible",
        )}
      >
        {leftIcon && (
          <span className={cn("shrink-0", iconSizeStyles[size])}>
            {leftIcon}
          </span>
        )}
        {children}
        {rightIcon && (
          <span className={cn("shrink-0", iconSizeStyles[size])}>
            {rightIcon}
          </span>
        )}
      </span>
    </button>
  );
};

export default GPButton;
