import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

/**
 *
 * Reset + Base
 *
 */

const _reset =
  "appearance-none box-border inline-block m-0 overflow-visible normal-case";

const _defaultBox =
  "cursor-pointer inline-flex justify-center items-center gap-1";
const _defaultBorder = "border border-solid rounded"; // should be able to set border here;
const _defaultTypography = "family-sans font-medium text-sm ";
const _defaultTransition =
  "duration-[400ms] ease-camp-out transition-[background] transition-[border]";
const _defaultDisabled = "cursor-not-allowed";

/**
 *
 * Variants
 *
 */

// Fill
const _fill =
  "text-text-on-emphasis fill-icon-decorative-on-emphasis border-transparent disabled:opacity-35";
const _fillPrimary =
  "bg-bg-primary-emphasis hover:bg-bg-primary-emphasis-hover active:bg-bg-primary-emphasis-active";
const _fillDestructive =
  "bg-bg-destructive-emphasis hover:bg-bg-destructive-emphasis-hover active:bg-bg-destructive-emphasis-active";

// Outline
const _outline =
  "border-border-supportive text-text-default bg-bg-default hover:bg-bg-primary-hover active:bg-bg-active disabled:opacity-5";

// Text
const _text = "bg-transparent border-transparent disabled:opacity-5";
const _textPrimary =
  "text-text-primary hover:bg-bg-primary-hover active:bg-bg-primary-active";
const _textDestructive =
  "text-text-destructive hover:bg-bg-destructive-hover active:bg-bg-destructive-active";

const _small = "py-1 px-2 h-[28px]";
const _medium = "py-2 px-3 h-[36px]";

const button = cva(
  [
    "button",
    _reset,
    _defaultBox,
    _defaultBorder,
    _defaultTypography,
    _defaultTransition,
    _defaultDisabled,
  ],
  {
    variants: {
      variant: {
        "fill-primary": [_fill, _fillPrimary],
        "fill-destructive": [_fill, _fillDestructive],
        outline: _outline,
        "text-primary": [_text, _textPrimary],
        "text-destructive": [_text, _textDestructive],
      },
      size: {
        small: _small,
        medium: _medium,
      },
    },
    defaultVariants: {
      variant: "fill-primary",
      size: "medium",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  ...props
}) => <button className={button({ variant, size, className })} {...props} />;
