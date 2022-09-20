import clsx from 'clsx';
import {
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
  useRef,
  useCallback,
} from 'react';

import s from './Input.module.css';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  className?: string;
  suffix?: ReactNode;
  prefix?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  className, prefix, suffix, onFocus, onBlur, ...rest
}, inputRef) => {
  const mainRef = useRef<HTMLDivElement>(null);

  const handleFocus = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    mainRef.current?.classList.add(s.focus);
    if (onFocus) onFocus(e);
  }, [onFocus]);

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    mainRef.current?.classList.remove(s.focus);
    if (onBlur) onBlur(e);
  }, [onBlur]);

  const hasAffix = !!(prefix || suffix);
  return (
    <span
      ref={mainRef}
      className={clsx(s.main, {
        [s.affix]: hasAffix,
      })}
    >
      {prefix && (
      <span className={s.prefix} tabIndex={-1}>
        {prefix}
      </span>
      )}
      <input
        ref={inputRef}
        className={clsx(s.input, className)}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />
      {suffix && (
      <span className={s.suffix} tabIndex={-1}>
        {suffix}
      </span>
      )}
    </span>
  );
});

export default Input;
