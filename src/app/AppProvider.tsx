import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from 'src/features/store';

const AppProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default AppProvider;
