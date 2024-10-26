import React from 'react';
import { useNavigate } from 'react-router';
import type { PopconfirmProps } from 'antd';
import { Button, message, Popconfirm } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import './_style.scss';


export const LogoutButton: React.FC = () => {

  const navigate=useNavigate();

  const confirm: PopconfirmProps['onConfirm'] = (e) => {
    console.log(e);
    message.success('Click on Yes');
    navigate('/login');
    localStorage.clear();
  };
  
  const cancel: PopconfirmProps['onCancel'] = (e) => {
    console.log(e);
    message.error('Click on No');
  };

  return <Popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
    onConfirm={confirm}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
  >
    <Button
      type="primary"
      icon={<PoweroffOutlined />}
      onClick={() => console.log('Logout')}
      className="logout"
    >
      <span>Logut</span>
    </Button>
  </Popconfirm>
};
