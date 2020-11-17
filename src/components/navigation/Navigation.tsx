import React, { useState } from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const { SubMenu } = Menu;

export interface MenuProp {}
export interface MenuState {
  current: string;
}

const Navigation: React.FC<MenuProp> = () => {
  const [menuState] = useState<MenuState>({ current: "mail" });
  const history = useHistory();
  const handleClick = (e: any) => {
    console.log(e)
  };
  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[menuState.current]}
      mode="horizontal"
    >
      <Menu.Item key="mail" icon={<MailOutlined />}>
        Navigation One
      </Menu.Item>
      <Menu.Item key="mail1" icon={<AppstoreOutlined />}>
        Navigation Two
      </Menu.Item>
      <Menu.Item key="mail2" icon={<AppstoreOutlined />}>
        Navigation Two
      </Menu.Item>
      <Menu.Item key="mail3" icon={<AppstoreOutlined />}>
        Navigation Two
      </Menu.Item>
    </Menu>
  );
};

export default Navigation;
