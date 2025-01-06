import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  hasBorder: boolean;
}

export function Avatar({ hasBorder, ...props }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatar : styles.avatarBorderNone}
      {...props}
    />
  );
}
