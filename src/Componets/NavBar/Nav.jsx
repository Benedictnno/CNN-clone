import React from "react";
import { useState } from "react";
import Burger from "./Burger";
import RightNav from "./RightNav";
import styled from "styled-components";

const Nav = () => {
  const [burger ,setBurger] = useState(false)
  return (
    <Wrapper>
      <Burger burger={burger} setBurger={setBurger} />
      <RightNav burger={burger} setBurger={setBurger} />
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.main`
  // height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
`;