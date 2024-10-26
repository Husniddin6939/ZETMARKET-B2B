import type { TnavigationType } from '@ttypes';

export const navigation: TnavigationType[] = [
  {
    path: '/',
    title: 'Dashboard',
    icon: 'bi bi-ui-checks-grid',
    role: ['admin', 'employee'],
  },
  {
    path: '/orders',
    title: 'New Orders',
    icon: 'bi bi-pause-circle-fill',
    role: ['admin'],
  },
  {
    path: '/order-complated',
    title: 'Order complated',
    icon: 'bi bi-check-circle-fill',
    role: ['admin', 'employee'],
  },
  {
    path: '/order-canceled',
    title: 'Order canceled',
    icon: 'bi bi-x-circle-fill',
    role: ['admin', 'employee'],
  },
  {
    path: '/leads',
    title: 'Leads',
    icon: 'bi bi-cart-check-fill',
    role: ['admin', 'employee'],
  },
];
