import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { globalThemeconfig } from '@theme';
import './index.css';
import { AppRouter } from './router/index.tsx';

createRoot(document.getElementById('root')!).render(
  <ConfigProvider theme={globalThemeconfig}>
    <RouterProvider router={AppRouter} />
  </ConfigProvider>
);
