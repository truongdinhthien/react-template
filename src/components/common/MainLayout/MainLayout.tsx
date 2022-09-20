import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header';

const MainLayout: FC = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
  </>
);

export default MainLayout;
