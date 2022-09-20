import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Todo = {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
};

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getTodo: builder.query<Todo, void>({
      query: () => 'todos',
    }),
  }),
});

export const { useGetTodoQuery } = todoApi;
