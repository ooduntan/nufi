import React from "react";
import PropTypes from "prop-types";

import { HeaderWrapper, Title } from "./styled";

export const Header = ({ title }) => (
  <HeaderWrapper>
    <Title>{title}</Title>
  </HeaderWrapper>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};
