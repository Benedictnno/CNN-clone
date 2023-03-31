import React from 'react'
import New2 from './New2';
import News3 from './News3';
import styled from 'styled-components';
import {FiPlayCircle} from 'react-icons/fi'
const News = () => {
  return (
    <Wrapper>
      <section>
        <h2>Putin's war hasn't changed China and Russia's defense ties</h2>
        <img
          src="https://cdn.cnn.com/cnnnext/dam/assets/230310121632-russia-china-peace-mission-2021-large-tease.jpg"
          alt=""
        />
        <h3>
          Customs records reveal companies in both countries'
          military-industrial complexes have kept up ties
        </h3>
        <hr ></hr>
        <p>
          Xi Jinping secures unprecedented third term as China's president in
          ceremonial vote
        </p>
        <hr ></hr>
        <p>
          <span>LIVE </span>Russia hits Ukraine with 6 hypersonic missiles in
          large-scale attack
        </p>
        <hr ></hr>
        <p> <span><FiPlayCircle/></span> Head of private Russian army says he's been 'cut off' by Putin</p>
        <hr />
      </section>
      <New2/>
      <News3/>
    </Wrapper>
  );
}

export default News


const Wrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1em;
  font-family: var(--text-font-family);
  font-weight: var(--text-font-weight);

  h2 {
    font-family: var(--big-font-family);
  }
  span {
    font-family: var(--Bold-font-family);
    color: red;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 0.5em;
  }
  @media screen and (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
   
  }
`;