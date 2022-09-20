import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

interface ContainerProps {
  fluid?: boolean;
  className?: string;
}

const Container: FC<PropsWithChildren<ContainerProps>> = ({ className, children, fluid }) => {
  const mainClassName = clsx(className, {
    'w-full px-6 max-w-[1920px] mx-auto': !fluid,
  });
  return <div className={mainClassName}>{children}</div>;
};

export default Container;
