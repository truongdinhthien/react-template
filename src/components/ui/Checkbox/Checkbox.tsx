import clsx from 'clsx';
import {
  InputHTMLAttributes, forwardRef, ChangeEvent, PropsWithChildren, useRef, useLayoutEffect, useCallback,
} from 'react';
import { mergeRefs } from 'react-merge-refs';

import s from './Checkbox.module.css';

interface CheckboxProps extends PropsWithChildren<InputHTMLAttributes<HTMLInputElement>> {
  className?: string,
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
  className, onChange, children, checked, ...rest
}, checkboxRef) => {
  const mainRef = useRef<HTMLLabelElement>(null);
  const localCheckboxRef = useRef<HTMLInputElement>(null);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    mainRef.current?.classList.toggle(s.active);
    if (onChange) onChange(e);
  }, [onChange]);

  useLayoutEffect(() => {
    if (localCheckboxRef.current?.defaultChecked) {
      mainRef.current?.classList.add(s.active);
    }
  }, []);

  return (
    <label ref={mainRef} className={clsx(s.main, className)}>
      <span className={s.inner} role="checkbox" aria-checked={checked}>
        <input
          type="checkbox"
          ref={mergeRefs([localCheckboxRef, checkboxRef])}
          className={s.input}
          onChange={handleChange}
          {...rest}
        />
        <span className={s.icon} />
      </span>
      <span className={s.label}>
        {children}
      </span>
    </label>
  );
});

export default Checkbox;
