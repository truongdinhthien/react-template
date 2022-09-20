import { todoApi } from './todo/api';
import { todoReducer } from './todo/redux';

const reducers = {
  todo: todoReducer,
  [todoApi.reducerPath]: todoApi.reducer,
};

export default reducers;
