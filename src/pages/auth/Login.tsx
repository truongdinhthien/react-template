import { yupResolver } from '@hookform/resolvers/yup';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Checkbox, Input } from 'src/components/ui';
import * as yup from 'yup';

type FormDataLogin = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const yupSchema = yup.object({
  email: yup.string().email(),
  password: yup.string(),
});

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormDataLogin>({
    resolver: yupResolver(yupSchema),
    defaultValues: {
      email: 'ok@gmail.com',
    },
  });
  const onSubmit = useCallback((data: FormDataLogin) => {
    console.log(data);
  }, []);
  return (
    <div>
      <div>Login</div>
      <form
        className="flex flex-col mt-5 gap-2 items-start"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input placeholder="Enter email" {...register('email')} />
        <Input
          type="password"
          placeholder="Enter password"
          suffix="Show"
          {...register('password')}
        />
        <Checkbox {...register('rememberMe')}>Remember Me</Checkbox>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};
export default Login;
