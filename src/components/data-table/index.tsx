import React from 'react';
import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import type { ITableDataType } from '@ttypes';
import { TableData } from '@constants';
import { record } from 'zod';
import { PartnerLogo } from '@ui';



const columns: TableColumnsType<ITableDataType> = [
  {
    title: '№',
    dataIndex: 'id',
  },
  {
    title: 'Date',
    dataIndex: 'date',
  },
  {
    title: 'Full Name',
    dataIndex: 'fullName',
  },
  {
    title: 'Phone number',
    dataIndex: 'phoneNumber',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Product name',
    dataIndex: 'productName',
  },
  {
    title:'Quantity',
    dataIndex: 'quentity',
  },
  {
    title: 'Total price',
    dataIndex: 'totalPrice',
  },
  {
    title: 'Payment method',
    dataIndex: 'paymentMethod',
    render: (_, record) => {
      return <PartnerLogo type={record.paymentMethod}/>
    }
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
  {
    title: 'Action',
    dataIndex: 'action',
  },
];



export const DataTable: React.FC = () => (
  <>
    <Table<ITableDataType> columns={columns} dataSource={TableData} size="middle" />
  </>
);

