import * as React from "react";

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

export function Avatar({ src, alt, className = "rounded-full w-10 h-10 object-cover", ...props }: AvatarProps) {
  return <img src={src} alt={alt} className={className} {...props} />;
} 