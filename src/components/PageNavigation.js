import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PageNavigation = ({ title }) => {
  return (
    <Wrapper>
      <NavLink to="/">Home</NavLink>/ {title}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.5rem;
  padding: 30px 0px 0px 1.2rem;
  text-decoration: underline;
  font-style: italic;
  a {
    font-style: normal;
    font-size: 1.5rem;
  }
`;

export default PageNavigation;
