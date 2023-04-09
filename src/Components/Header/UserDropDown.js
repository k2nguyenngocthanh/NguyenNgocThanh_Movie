import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const UserDropDown = ({user,logoutBtn}) => (
    <Dropdown
      menu={{
        items:[{label:logoutBtn, key:"1"},
        {label: <span>Cập nhật tài khoản</span>, key:"2"}
      ],
      }}
      trigger={['click']}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {user.hoTen}
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
  export default UserDropDown;