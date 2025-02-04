import React from "react";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(RouterLink)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default StyledLink;
