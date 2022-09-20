import clsx from 'clsx';
import {
  ComponentType, FC, forwardRef, ReactNode,
} from 'react';

import s from './Text.module.css';

type Variant = 'body' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TextProps {
  component?: ComponentType<any>;
  variant?: Variant;
  className?: string;
  children?: ReactNode;
}

const Text = forwardRef<HTMLElement, TextProps>(({
  component: Component = 'div',
  variant = 'body',
  className,
  children,
}, textRef) => {
  const mainClassName = clsx(s[variant], className);
  return <Component ref={textRef} className={mainClassName}>{children}</Component>;
});

export default Text;
