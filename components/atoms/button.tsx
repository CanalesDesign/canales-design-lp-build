"use client";
import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  base: "py-3 px-4 uppercase text-sm font-semibold text-secondary tracking-wide mt-6 md:mt-8 flex items-center justify-center gap-6 transition-all ease-in-out duration-300",
  variants: {
    intent: {
      primary: "bg-accent hover:bg-accent-hover hover:translate-y-[1px]",
      secondary: "",
      link: "",
    },
    size: {
      sm: "9",
      lg: "",
    },
    fullWidth: {
      true: "w-full",
      false: "w-content",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "lg",
    fullWidth: false,
  },
});

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof button> {
  children?: ReactNode;
  label?: string;
  icon?: any;
  path?: string;
  target?: string;
}
export default function Button({
  className,
  label,
  intent,
  size,
  icon,
  path,
  target,
  fullWidth,
  ...props
}: ButtonProps) {
  return (
    <button
      onClick={() => window.open(path, target)}
      className={button({ intent, size, fullWidth, className })}
      {...props}>
      {label}
      {icon}
      {props.children}
    </button>
  );
}
