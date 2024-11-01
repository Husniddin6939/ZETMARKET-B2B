import React from 'react';
import { Space, Switch } from 'antd';
import { useDispatch } from 'react-redux';
import { toggleAside } from '../../../stores/toogle-slice';

export const ToggleSwitch: React.FC = () => {
  const dispatch = useDispatch();
  const toggleAsideHandler = () => {
    dispatch(toggleAside());
  };

  return (
    <Space direction="vertical">
      <Switch
        onClick={toggleAsideHandler}
        checkedChildren="close menu"
        unCheckedChildren="open menu"
        defaultChecked
      />
    </Space>
  );
};
