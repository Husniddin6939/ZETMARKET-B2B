import React from 'react';
import { Table, Button, Flex } from 'antd';
import { Link } from 'react-router-dom';
import type { TableColumnsType } from 'antd';
import type { ITableDataType } from '@ttypes';
import { TableData } from '@constants';
import { PartnerLogo, Status, ComplatedButton, UseClipboard } from '@ui';



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
    render: (_, record) => {
      return (
        <Flex gap={6}>
          <span>{record.fullName}</span>
          <UseClipboard text={record.fullName}/>
        </Flex>
      )
    }
  },
  {
    title: 'Phone number',
    dataIndex: 'phoneNumber',
    render: (_, record) => {
      return (
        <Flex gap={6}>
          <span>{record.phoneNumber}</span>
          <UseClipboard text={record.phoneNumber.substring(4, 14)}/>
        </Flex>
      )
    }
  },
  {
    title: 'Address',
    dataIndex: 'address',
    render: (_, record) => {
      return (
        <Flex gap={6}>
          <span>{record.address}</span>
          <UseClipboard text={record.address}/>
        </Flex>
      )
    }
  },
  {
    title: 'Product name',
    dataIndex: 'productName',
    render: (_, record) => {
      return (
        <Flex gap={6}>
          <span>{record.productName}</span>
          <UseClipboard text={record.productName}/>
        </Flex>
      )
    }
  },
  {
    title:'Quantity',
    dataIndex: 'quentity',
  },
  {
    title: 'Total price',
    dataIndex: 'totalPrice',
    render: (_, record) => {
      return (
        <Flex gap={6}>
          <span>{record.totalPrice}</span>
          <UseClipboard text={record.totalPrice}/>
        </Flex>
      )
    }
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
    render: (_, record) => {
      return <Status type={record.status}/>
    }
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render:(_, record) => (
        <Flex gap={3}>
          <ComplatedButton {...record}/>
          <Button>
            <Link to="/">
              <i className='bi bi-three-dots-vertical'></i>
            </Link>
          </Button>
        </Flex>
    )
  },
];



export const DataTable: React.FC = () => (
  <>
    <Table<ITableDataType> columns={columns} dataSource={TableData} size="middle" />
  </>
);

