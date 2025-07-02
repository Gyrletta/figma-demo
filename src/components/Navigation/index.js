import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Camera } from "./../../images/Camera.svg";

import { StyledNav, Logo, LogoText, NavMenu, List, Item } from "./styled";

const Navigation = () => {
  return (
    <StyledNav>
      <Logo>
        <NavLink to="/movielist">
          <Camera />
          <LogoText>Movies Browser</LogoText>
        </NavLink>
      </Logo>

      <NavMenu>
        <List>
          <Item>
            <NavLink to="/movielist">Movies</NavLink>
          </Item>
          <Item>
            <NavLink to="/peoplelist">People</NavLink>
          </Item>
        </List>
      </NavMenu>
    </StyledNav>
  );
};
export default Navigation;
