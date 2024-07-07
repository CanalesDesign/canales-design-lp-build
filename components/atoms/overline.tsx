import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const overline = tv({
  base: "tracking-[2px] uppercase mb-6 font-semibold",
  variants: {
    onBackground: {
      positive: "text-secondary-300",
      inverted: "text-primary-600",
    },
  },
  defaultVariants: {
    onBackground: "positive",
  },
});

interface OverlineProps
  extends ComponentProps<"p">,
    VariantProps<typeof overline> {
  children?: ReactNode;
  text: string;
}

export default function Overline({
  children,
  className,
  onBackground,
  text,
  ...props
}: OverlineProps) {
  return (
    <p className={overline({ onBackground, className })} {...props}>
      {text}
    </p>
  );
}
