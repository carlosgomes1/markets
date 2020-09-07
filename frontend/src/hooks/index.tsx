import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { ProductProvider } from './product';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>
      <ProductProvider>{children}</ProductProvider>
    </ToastProvider>
  </AuthProvider>
);

export default AppProvider;
