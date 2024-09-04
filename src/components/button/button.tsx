import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import styles from "./button.module.css";

const button = cva([styles.reset, styles.default], {
  variants: {
    variant: {
      "fill-primary": [styles.fill, styles["fill--primary"]],
      "fill-destructive": [styles.fill, styles["fill--destructive"]],
      outline: [styles.outline],
      "text-primary": [styles.text, styles["text--primary"]],
      "text-destructive": [styles.text, styles["text--destructive"]],
    },
    size: {
      small: styles.small,
      medium: styles.medium,
    },
  },
  defaultVariants: {
    variant: "fill-primary",
    size: "medium",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  ...props
}) => <button className={button({ variant, size, className })} {...props} />;
