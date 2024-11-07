import type { InavigationType } from '@ttypes';

export const navigation: InavigationType[] = [
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

export const CardStats = [
  {
    title: 'New Orders',
    value: 324,
    icon: 'bi bi-clock',
    color: '#EBFFAF',
  },
  {
    title: 'Complated Orders',
    value: 123,
    icon: 'bi bi-check2-circle',
    color: '#B4E8C0',
  },
  {
    title: 'Cenceled Orders',
    value: 56,
    icon: 'bi bi-x-circle',
    color: '#EE9494',
  },
  {
    title: 'Leads',
    value: 789,
    icon: 'bi bi-fire',
    color: '#C3B9EA',
  },
  {
    title: 'Employees',
    value: 456,
    icon: 'bi bi-people',
    color: '#7BD3EA',
  },
];

export const barChart = [
  {
    quarter: 'January',
    year: 2024,
    month: 1,
    totalPrice: 1000,
  },
  {
    quarter: 'February',
    year: 2024,
    month: 2,
    totalPrice: 2100,
  },
  {
    quarter: 'March',
    year: 2024,
    month: 3,
    totalPrice: 1400,
  },
  {
    quarter: 'April',
    year: 2024,
    month: 4,
    totalPrice: 2000,
  },
  {
    quarter: 'May',
    year: 2024,
    month: 5,
    totalPrice: 1900,
  },
  {
    quarter: 'June',
    year: 2024,
    month: 6,
    totalPrice: 1200,
  },
  {
    quarter: 'July',
    year: 2024,
    month: 7,
    totalPrice: 1100,
  },
  {
    quarter: 'August',
    year: 2024,
    month: 8,
    totalPrice: 1600,
  },
  {
    quarter: 'September',
    year: 2024,
    month: 9,
    totalPrice: 1700,
  },
  {
    quarter: 'October',
    year: 2024,
    month: 10,
    totalPrice: 1300,
  },
  {
    quarter: 'November',
    year: 2024,
    month: 11,
    totalPrice: 100,
  },
  {
    quarter: 'December',
    year: 2024,
    month: 12,
    totalPrice: 100,
  },
];

export const PartnerTypeData=[
  {
    label:'UZUM',
    value:'UZUM',
    key:'UZUM'
  },
];


export const TableData = [
  {
    key:"1",
    fullName:"Vafoyev Nurali",
    address:'New york',
    phoneNumber:"+998903432233",
    productName:'Samsung Galaxy',
    quentity:2,
    totalPrice:2000000,
    status:'pending',
    id:123456,
    date:'2022-01-01',
    paymentMethod:'Uzum'

  },
  {
    key:"1",
    fullName:"Vafoyev Nurali",
    address:'New york',
    phoneNumber:"+998903432233",
    productName:'Samsung Galaxy',
    quentity:2,
    totalPrice:2000000,
    status:'processing',
    id:123456,
    date:'2022-01-01',
    paymentMethod:'Alif'

  },
  {
    key:"1",
    fullName:"Vafoyev Nurali",
    address:'New york',
    phoneNumber:"+998903432233",
    productName:'Samsung Galaxy',
    quentity:2,
    totalPrice:2000000,
    status:'Complated',
    id:123456,
    date:'2022-01-01',
    paymentMethod:'ZoodPay'

  },
  {
    key:"1",
    fullName:"Vafoyev Nurali",
    address:'New york',
    phoneNumber:"+998903432233",
    productName:'Samsung Galaxy',
    quentity:2,
    totalPrice:2000000,
    status:'canceled',
    id:123456,
    date:'2022-01-01',
    paymentMethod:'OpenCard'

  },
  {
    key:"1",
    fullName:"Vafoyev Nurali",
    address:'New york',
    phoneNumber:"+998903432233",
    productName:'Samsung Galaxy',
    quentity:2,
    totalPrice:2000000,
    status:'unknown',
    id:123456,
    date:'2022-01-01',
    paymentMethod:'InTend'

  },
  {
    key:"1",
    fullName:"Vafoyev Nurali",
    address:'New york',
    phoneNumber:"+998903432233",
    productName:'Samsung Galaxy',
    quentity:2,
    totalPrice:2000000,
    status:'Complated',
    id:123456,
    date:'2022-01-01',
    paymentMethod:'Click'

  },
];
