import React, { useState } from "react";
import styled from "styled-components";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 1rem;
  right: 1.3rem;
  z-index: 10;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ burger }) => (burger ? "red " : "#fff")};
    border-radius: 0.7rem;
    transform-origin: 1px;
    transition: all 0.3s linear;
    // background-color: #358319;
    &: nth-child(1) {
      transform: ${({ burger }) => (burger ? "rotate(45deg)" : "rotate(0)")};
    }
    &: nth-child(2) {
      transform: ${({ burger }) =>
        burger ? "translateX(100%)" : "translateX(0)"};
      opacity: ${({ burger }) => (burger ? "0" : "1")};
    }
    &: nth-child(3) {
      transform: ${({ burger }) => (burger ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = ({ burger, setBurger }) => {
  //   const [burger, setBurger] = useState(false);

  return (
    <>
      <StyledBurger burger={burger} onClick={() => setBurger(!burger)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </>
  );
};

export default Burger;
