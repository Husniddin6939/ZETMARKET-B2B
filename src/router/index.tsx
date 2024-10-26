import { createBrowserRouter } from 'react-router-dom';
import { Dashboard, Auth } from '../app/index';
import {
  Leads,
  OrderCanceled,
  OrderComplated,
  OrderNew,
  Stat,
} from '../pages/index';
import { SignIn } from '@pages';

const router = [
  {
    path: '/',
    element: <Dashboard />,
    children: [
      {
        path: '/',
        element: <Stat />,
      },
      {
        path: '/orders',
        element: <OrderNew />,
      },
      {
        path: '/order-canceled',
        element: <OrderCanceled />,
      },
      {
        path: '/order-complated',
        element: <OrderComplated />,
      },
      {
        path: '/leads',
        element: <Leads />,
      },
    ],
  },
  {
    path: '/login',
    element: <Auth />,
    children: [
      {
        path: '/login',
        element: <SignIn />,
      },
    ],
  },

  {
    path: '*',
    element: <div>Not found</div>,
  },
];

export const AppRouter = createBrowserRouter(router);
