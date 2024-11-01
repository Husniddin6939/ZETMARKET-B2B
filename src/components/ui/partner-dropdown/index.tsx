import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { PartnerTypeData } from '@constants';

const items: MenuProps['items'] = PartnerTypeData 

export const PartnerDropdown: React.FC = () => (
  <Dropdown menu={{ items }} trigger={['click']}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
            Select Partner
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

