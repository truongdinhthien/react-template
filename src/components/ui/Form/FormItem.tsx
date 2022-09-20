import clsx from 'clsx';
import {
  cloneElement, FC, isValidElement, PropsWithChildren,
} from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface FormItemProps extends PropsWithChildren {
  name: string,
  className?: string,
}

const FormItem: FC<FormItemProps> = ({
  name,
  className,
  children,
}) => {
  const { control } = useFormContext();
  if (!isValidElement(children)) return null;
  return (
    <div className={clsx(className)}>
      <Controller
        control={control}
        name={name}
        render={({ field, formState }) => {
          const errorMessage = formState.errors[name]?.message;
          return (
            <>
              {cloneElement(children, field)}
              {errorMessage && <span role="alert">{errorMessage as string}</span>}
            </>
          );
        }}
      />
    </div>
  );
};

export default FormItem;
