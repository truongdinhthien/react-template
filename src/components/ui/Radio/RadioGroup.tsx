import {
  ChangeEvent,
  ChangeEventHandler,
  createContext,
  forwardRef,
  InputHTMLAttributes,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

type RadioContextType = {
  name?: string,
  onChange: ChangeEventHandler<HTMLInputElement>,
  value?: string | number | readonly string[]
};

export const RadioContext = createContext<RadioContextType | null>(null);

interface RadioGroupProps extends PropsWithChildren<InputHTMLAttributes<HTMLInputElement>> {
  name?: string,
  onChange?: ChangeEventHandler<HTMLInputElement>,
  value?: string | number | readonly string[]
}

const RadioGroup = forwardRef<HTMLInputElement, RadioGroupProps>(({
  children,
  value: propsValue,
  defaultValue,
  className,
  name,
  onChange,
  ...rest
}, ref) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(propsValue);
  }, [propsValue]);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onChange) onChange(e);
  }, [onChange]);

  const valueMemo = useMemo(() => ({
    name,
    onChange: handleChange,
    value,
  }), [name, handleChange, value]);

  return (
    <div ref={ref} className={className} role="radiogroup">
      <RadioContext.Provider value={valueMemo}>
        {children}
      </RadioContext.Provider>
    </div>
  );
});

export default RadioGroup;
