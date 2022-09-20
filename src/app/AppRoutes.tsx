import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from 'src/components/common';
import Home from 'src/pages/Home';
import StyleGuide from 'src/pages/StyleGuide';
import UnderConstruction from 'src/pages/UnderConstruction';
import Login from 'src/pages/auth/Login';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="auth/login" element={<Login />} />
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="style-guide" element={<StyleGuide />} />
        <Route path="under-construction" element={<UnderConstruction />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
