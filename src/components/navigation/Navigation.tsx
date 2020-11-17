import React, { useState } from "react";
import { Menu } from "antd";
import { useHistory } from "react-router-dom";
import menus from "../../routes/routes";
const { SubMenu } = Menu;

export interface MenuProp {}
export interface MenuState {
  current: string;
}
const Navigation: React.FC<MenuProp> = () => {
  const [menuState] = useState<MenuState>({ current: "mail" });
  const history = useHistory();
  const handleClick = (e: any) => {
    history.push(e.key);
  };
  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[menuState.current]}
      mode="horizontal"
      theme="dark"
    >
      {recursionMenu(menus[0].children)}
    </Menu>
  );
};

const recursionMenu = (menus: any) => {
  return menus.map((menu: any) => {
    if (!menu.children) {
      return (
        <Menu.Item key={menu.path} icon={menu.icon ? menu.icon : null}>
          {menu.title}
        </Menu.Item>
      );
    } else {
      return (
        <SubMenu
          key={menu.path}
          icon={menu.icon ? menu.icon : null}
          title={menu.title}
        >
          {recursionMenu(menu.children)}
        </SubMenu>
      );
    }
  });
};

export default Navigation;
