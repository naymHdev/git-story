import clsx from "clsx";
import React from "react";

interface GPContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "7xl";
  padding?: "sm" | "md" | "lg" | "xl";
}

const GPContainer = ({
  children,
  className = "",
  maxWidth = "7xl",
  padding = "lg",
}: GPContainerProps) => {
  const paddingMap: Record<string, string> = {
    sm: "px-4 py-4",
    md: "px-6 py-6",
    lg: "px-8 py-8",
    xl: "px-12 py-12",
  };

  return (
    <div
      className={clsx(
        `w-full mx-auto ${paddingMap[padding]} max-w-${maxWidth}`,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default GPContainer;
