import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const iconType = tv({
  base: "icon",
  variants: {
    show: {
      true: "inline-block",
      false: "hidden",
    },
    size: {
      sm: "16px",
      md: "24px",
      lg: "32px",
    },
  },
  defaultVariants: {
    show: true,
    size: "md",
  },
});

interface IconProps
  extends ComponentProps<"span">,
    VariantProps<typeof iconType> {
  show?: boolean;
  size?: "sm" | "md" | "lg";
  children?: ReactNode;
  icon?: any;
}

export default function Icon({
  show,
  size,
  icon,
  className,
  ...props
}: IconProps) {
  return (
    <span className={iconType({ show, size, className })} {...props}>
      {icon}
    </span>
  );
}
