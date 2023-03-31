import React from "react";
import styled from "styled-components";
import { HiSearch } from "react-icons/hi";
import "animate.css";
const RightNav = ({ burger }) => {
  const navText = ["World", "US Politics", "Business", "Health", "More"];

  return (
    <Wrapper burger={burger}>
      <main className="container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Cnn_logo_red_background.png?20150626194629"
          alt=""
          className="logo"
        />
        <div className="container_nav_text animate__fadeIn">
          {navText.map((text) => {
            return (
              <h3 key={text} className="nav_text ">
                {text}
              </h3>
            );
          })}
        </div>
          <div className=" login_container">
            <span className="">Audio</span>
            <span className="search_btn">
              <HiSearch />
            </span>
            <span className="login">Login</span>
          </div>
      </main>
    </Wrapper>
  );
};

export default RightNav;

const Wrapper = styled.main`
  background: black;
  color: #fff;

  .logo {
    height: 100%;
    width: 4em;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(1, 0fr 3fr 1fr);
    font-family: var(--main-font-family);
    transition: height 3s, linear;
    width: 100vw;
  }

  .container_nav_text {
    display: flex;

    white-space: nowrap;
  }

  .nav_text {
    margin-left: 2em;
  }

  .login_container {
    display: flex;
    position: relative;
    left: 10%;
    align-items: center;
    font-size: 1.1em;
    font-family: var(--main-font-family);
  }

  .login_container > span {
    margin-right: 1em;
  }
  .login {
    border: 1.5px solid #fff;
    padding: 0.3em;
    border-radius: 7px;
    font-weight: 700;
    font-size: .9em;
  }

  .search_btn {
    font-size: var(--main-font-size);
    margin-left: 0.5em;
  }

  @media (max-width: 768px) {
    .container {
      grid-template-columns: repeat(1, 4fr 1fr);
    }
    .container {
      display: block;
    }
    .container_nav_text {
      display: ${({ burger }) => (burger ? "grid" : "none")};
      width: 100px;
      grid-template-columns: repeat(6, 2fr);
    }
    .login_container {
      justify-content: center;
    }
  }

  @media (max-width: 425px) {
    .container_nav_text {
      grid-template-columns: repeat(2, 2fr);
      padding-bottom: 1em;
    }
    .login_container {
      display: ${({ burger }) => (burger ? "flex" : "none")};
      left: 0;
      font-family: var(--main-font-family);
    }
  }
`;
