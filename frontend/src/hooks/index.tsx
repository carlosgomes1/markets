import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { ProductProvider } from './product';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ProductProvider>
      <ToastProvider>{children}</ToastProvider>
    </ProductProvider>
  </AuthProvider>
);

export default AppProvider;
