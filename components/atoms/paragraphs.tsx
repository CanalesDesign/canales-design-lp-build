import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const paragraph = tv({
  base: "text-secondary",
  variants: {
    bodySize: {
      "body-4xl": "text-4xl font-medium tracking-tight",
      "body-3xl": "text-3xl",
      "body-xl": "text-lg md:text-xl leading-[1.65rem]",
      "body-lg": "text-base leading-[1.25rem] md:text-lg md:leading-normal",
      "body-base": "text-base ",
      "body-sm": "text-sm",
    },
    fontFamily: {
      primary: "font-sans",
      secondary: "font-mono",
    },
  },
  defaultVariants: {
    bodySize: "body-base",
  },
});

interface ParagraphProps
  extends ComponentProps<"p">,
    VariantProps<typeof paragraph> {
  children?: ReactNode;
  body?: string;
}

export default function Paragraphs({
  children,
  className,
  bodySize,
  body,
  ...props
}: ParagraphProps) {
  return (
    <p className={paragraph({ bodySize, className })} {...props}>
      {body}
      {children}
    </p>
  );
}
