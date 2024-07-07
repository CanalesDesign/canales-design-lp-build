import { ComponentProps, ReactNode } from "react";

interface InlineLinkProps extends ComponentProps<"a"> {
  children?: ReactNode;
  label: string;
  path: string;
  iconLeft?: any;
  iconRight?: any;
}

export default function InlineLink({
  children,
  label,
  path,
  target,
  iconLeft,
  iconRight,
  ...props
}: InlineLinkProps) {
  return (
    <a
      className="text-sm leading-normal tracking-widest uppercase font-semibold text-accent-500 hover:text-accent-600 flex items-center gap-2"
      href={path}
      target={target}
      {...props}>
      {iconLeft}
      {label}
      {iconRight}
    </a>
  );
}
