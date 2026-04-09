import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  wide?: boolean;
  className?: string;
}

export function Container({ children, wide, className = "" }: ContainerProps) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: wide ? "1200px" : "900px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "clamp(1.5rem, 6vw, 4rem)",
        paddingRight: "clamp(1.5rem, 6vw, 4rem)",
      }}
      className={className}
    >
      {children}
    </div>
  );
}
