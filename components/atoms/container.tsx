type Props = {
  className?: string;
  children?: React.ReactNode;
};

const Container = ({ className, children }: Props) => {
  return (
    <div
      className={`container max-w-screen-2xl mx-auto px-8 md:px-10 lg:px-16 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
