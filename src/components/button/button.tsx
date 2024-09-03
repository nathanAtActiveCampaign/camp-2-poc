import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import styles from "./button.module.css";

const button = cva(styles.base, {
  variants: {
    intent: {
      primary: styles.primary,
      secondary: styles.secondary,
      fill: [styles.reset, styles.default, styles.fill],
    },
    size: {
      small: styles.small,
      medium: styles.medium,
    },
  },
  compoundVariants: [
    { intent: "primary", size: "medium", className: styles.primaryMedium },
  ],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => <button className={button({ intent, size, className })} {...props} />;

const newButton = cva([styles.reset, styles.default], {
  variants: {
    variant: {
      "fill-action": [styles["fill-base"], styles.fill],
      "fill-destructive": [styles["fill-base"], styles["fill--destructive"]],
    },
  },
  defaultVariants: {
    variant: "fill-action",
  },
});

export interface NewButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof newButton> {}

export const NewButton: React.FC<NewButtonProps> = ({
  className,
  variant,
  // intent,
  // size,
  ...props
}) => <button className={newButton({ variant, className })} {...props} />;

/**
 * FILL
 */

// import React from "react";
// import { Core } from "@activecampaign/camp-core-typings";
// import styled from "@activecampaign/camp-core-styled";
// import BaseButton, { BaseButtonProps } from "./BaseButton";
// import {
//   cssTransformDefaults,
//   cssDefaults,
//   cssReset,
//   reserveProps,
// } from "./Button.styles";

// const transformProps = {
//   ...cssTransformDefaults,
//   appearance(value) {
//     if (value === "destructive") {
//       return {
//         backgroundColor: "strawberry500",
//         ":hover:enabled": {
//           backgroundColor: "strawberry600",
//         },
//         ":focus:enabled": {
//           backgroundColor: "strawberry600",
//           borderColor: "white",
//           outlineColor: "strawberry600",
//           boxShadow: "0 0 0 b300 strawberry200",
//         },
//         ":active:enabled": {
//           backgroundColor: "strawberry700",
//         },
//       };
//     }
//   },
// };

// const FillButtonStyled = styled(BaseButton, {
//   cssReset,
//   reserveProps,
//   transformProps,
// })(cssDefaults, {
//   backgroundColor: "ocean500",
//   color: "white",
//   fill: "white",
//   ":hover:enabled": {
//     backgroundColor: "ocean600",
//   },
//   " :focus:enabled": {
//     backgroundColor: "ocean600",
//     borderColor: "white",
//     outlineStyle: "bSolid",
//     outlineColor: "ocean600",
//     outlineWidth: "b100",
//     boxShadow: "0 0 0 b300 ocean200",
//   },
//   ":active:enabled": {
//     backgroundColor: "ocean700",
//   },
//   ":disabled": {
//     opacity: 0.35,
//   },
// });

// const FillButton = React.forwardRef(({ ...props }: BaseButtonProps, ref) => {
//   props.ref = ref;
//   return <FillButtonStyled loadingIndicatorAppearance="inverse" {...props} />;
// });

// export interface StyledFillButtonProps
//   extends Core.Styled.Component<BaseButtonProps> {}

// export default FillButton as StyledFillButtonProps;
