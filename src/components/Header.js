import React from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <Contents>
        <NavLink to="/">
          <Logo>Zappos</Logo>
        </NavLink>
        <Nav />
      </Contents>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: grid;
  place-items: center;
  position: relative;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media (max-width: 768px) {
    padding: 0 2.8rem;
  }
`;
const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70vw;
  @media (max-width: 768px) {
    width: 80vw;
  }
`;
const Logo = styled.p`
  font-size: 50px;
  font-weight: 700;
  background-image: linear-gradient(to right, #0099ff, #00cc66);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;
export default Header;
