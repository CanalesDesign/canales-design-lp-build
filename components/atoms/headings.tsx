import React from "react";
import { ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const headinglevels = tv({
  base: "text-h1",
  variants: {
    levelSize: {
      display:
        "text-5xl md:text-8xl font-semibold leading-[3rem] md:leading-[4rem] -tracking-[0.035em]",
      "headline-1": "text-5xl md:text-7xl font-semibold -tracking-[0.035em]",
      "headline-2":
        "text-2xl md:text-5xl leading-[1.5rem] md:leading:normal font-semibold -tracking-[0.025em]",
      "headline-3": "text-2xl md:text-3xl font-semibold -tracking-[0.015em]",
      "headline-4":
        "text-2xl leading-[1.65rem] font-semibold -tracking-[0.01em]",
      "headline-5":
        "text-lg leading-[1.35rem] md:text-xl md:leading-normal font-semibold",
      "headline-6": "text-lg font-semibold",
    },
    mode: {
      light: "text-secondary",
      dark: "text-primary",
    },
  },
  defaultVariants: {
    levelSize: "display",
    mode: "light",
  },
});

interface HeadingsProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headinglevels> {
  headingLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children?: ReactNode;
  headline?: string;
}

const Heading = ({
  headingLevel,
  children,
  className,
  levelSize,
  mode,
  headline,
}: HeadingsProps) => {
  const Headings = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
    React.createElement(headingLevel, props, children, headline);

  return (
    <Headings className={headinglevels({ levelSize, mode, className })}>
      {children}
    </Headings>
  );
};

export default Heading;
