import { yupResolver } from '@hookform/resolvers/yup';
import {
  PropsWithChildren,
} from 'react';
import {
  useForm, FormProvider, UseFormProps, SubmitHandler, FieldValues,
} from 'react-hook-form';
import * as yup from 'yup';

interface FormProps<TFormValues extends FieldValues> extends PropsWithChildren<UseFormProps<TFormValues>> {
  onSubmit: SubmitHandler<TFormValues>;
  schema?: yup.AnyObjectSchema
}

const Form = <TFormValues extends FieldValues>({
  onSubmit,
  children,
  schema,
  ...rest
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>({
    ...rest,
    ...(schema ? { resolver: yupResolver(schema) } : {}),
  } as UseFormProps<TFormValues>);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
