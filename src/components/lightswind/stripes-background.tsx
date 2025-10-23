// components/ui/StripesBackground.tsx
import React from "react";
import clsx from "clsx";

interface StripesBackgroundProps {
  className?: string;
  position?: "left" | "right" | "top" | "bottom" | "full";
  width?: string;
  height?: string;
  opacity?: string;
}

const StripesBackground: React.FC<StripesBackgroundProps> = ({
  className,
  position = "right",
  width = "w-full",
  height = "h-full",
  opacity = "opacity-30", // This opacity applies to the div itself
}) => {
  const positionStyles = {
    right: "absolute top-0 right-0",
    left: "absolute top-0 left-0",
    top: "absolute top-0 left-0 w-full h-32",
    bottom: "absolute bottom-0 left-0 w-full h-32",
    full: "absolute inset-0",
  };

  return (
    <div
      className={clsx(
        "pointer-events-none z-10",
        "bg-[repeating-linear-gradient(45deg,_#00000066_0px,_#00000066_1px,_transparent_1px,_transparent_6px)]",
        "dark:bg-[repeating-linear-gradient(45deg,_#ffffff66_0px,_#ffffff66_1px,_transparent_1px,_transparent_6px)]",
        positionStyles[position],
        width,
        height,
        opacity,
        className
      )}
    />
  );
};

export default StripesBackground;
