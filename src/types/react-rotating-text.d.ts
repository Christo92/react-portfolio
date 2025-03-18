// src/react-rotating-text.d.ts
declare module "react-rotating-text" {
  import * as React from "react";

  interface RotatingTextProps {
    items: string[];
    color?: string;
    pause?: number;
    typingInterval?: number;
    deletingInterval?: number;
    emptyPause?: number;
    className?: string
  }

  const RotatingText: React.FC<RotatingTextProps>;

  export default RotatingText;
}
