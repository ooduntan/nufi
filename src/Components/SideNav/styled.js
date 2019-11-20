import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  min-height: 100vh;
  border-right: 1px solid #6d6d6d;

  .selected {
    font-weight: bold;
  }
`;

export const Logo = styled.h1`
  padding: 30px;
  border-bottom: 1px solid #6d6d6d;
  margin: 0;
`;

export const MenuWrapper = styled.div``;
export const MenuTitle = styled.div`
  margin: 27px 10px 10px;
`;

export const MenuList = styled.div`
  padding: 10px 20px;
`;

export const EachMenu = styled(Link)`
  margin: 0;
  text-decoration: none
  color: inherit;
  display: block;
  padding: 10px 0;
  &:hover {
    color: #373737;
  }

`;
