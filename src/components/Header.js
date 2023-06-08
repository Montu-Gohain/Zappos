import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
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
  /* background-color: orange; */
  box-shadow: 10px 5px 15px rgba(0, 0, 0, 0.1);
`;
const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70vw;
  /* background-color: yellow; */
`;
const Logo = styled.p`
  font-size: 50px;
  font-weight: 700;
  background-image: linear-gradient(to right, #0099ff, #00cc66);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export default Header;
