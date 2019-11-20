import React from "react";
import { withRouter } from "react-router-dom";
import cs from "classnames";

import {
  NavContainer,
  Logo,
  MenuWrapper,
  MenuTitle,
  MenuList,
  EachMenu
} from "./styled";

const menuConfig = [
  {
    name: "Teams",
    path: "/teams"
  },
  {
    name: "Conferences",
    path: "/conferences"
  }
];

export const Menu = ({ location: { pathname: pathName } }) => {
  return (
    <NavContainer>
      <Logo>Challenge</Logo>
      <MenuWrapper>
        <MenuTitle>Football Data</MenuTitle>
        <MenuList>
          {menuConfig.map(({ name, path }) => (
            <EachMenu
              className={cs({ selected: pathName.includes(path) })}
              key={name}
              to={path}
            >
              {name}
            </EachMenu>
          ))}
        </MenuList>
      </MenuWrapper>
    </NavContainer>
  );
};

export const SideNav = withRouter(Menu);
