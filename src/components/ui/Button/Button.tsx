import clsx from 'clsx';
import {
  ButtonHTMLAttributes, forwardRef, PropsWithChildren,
} from 'react';

import s from './Button.module.css';

interface ButtonProps extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, buttonRef) => {
  const {
    loading, className, children, ...rest
  } = props;
  return (
    <button ref={buttonRef} className={clsx(s.main, className)} type="button" {...rest}>
      {children}
    </button>
  );
});

export default Button;
