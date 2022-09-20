import clsx from 'clsx';
import {
  ChangeEvent,
  forwardRef,
  InputHTMLAttributes,
  PropsWithChildren,
  useCallback,
  useContext,
  useLayoutEffect,
  useRef,
} from 'react';
import { mergeRefs } from 'react-merge-refs';

import s from './Radio.module.css';
import { RadioContext } from './RadioGroup';

interface RadioProps extends PropsWithChildren<InputHTMLAttributes<HTMLInputElement>> {
  className?: string,
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(({
  onChange,
  className,
  children,
  checked: propsChecked,
  name,
  value,
  ...rest
}, radioRef) => {
  const {
    name: groupName,
    onChange: onGroupChange,
    value: groupValue,
  } = useContext(RadioContext) || {};

  const mainRef = useRef<HTMLLabelElement>(null);
  const localRef = useRef<HTMLInputElement>(null);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    mainRef.current?.classList.add(s.active);
    if (onChange) onChange(e);
    if (onGroupChange) onGroupChange(e);
  }, [onGroupChange, onChange]);

  useLayoutEffect(() => {
    if (localRef.current?.defaultChecked) {
      mainRef.current?.classList.add(s.active);
    }
  }, []);

  const checked = groupValue === value || propsChecked;

  return (
    <label
      ref={mainRef}
      className={clsx(s.main, {
        [s.active]: checked,
      })}
    >
      <span className={s.inner} role="radio" aria-checked={checked}>
        <input
          type="radio"
          ref={mergeRefs([localRef, radioRef])}
          className={s.input}
          onChange={handleChange}
          checked={checked}
          name={groupName || name}
          value={value}
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

export default Radio;
