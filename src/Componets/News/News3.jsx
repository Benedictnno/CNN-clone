import React from "react";
import styled from "styled-components";
const News3 = () => {
  const title = [
    "This is what years of tourist rides do to an elephant",
    "London fears for its future as companies defect to Wall Street",
    "Scientists find a way to suck up carbon pollution, turn it into baking soda and store it in the oceans",
    "Protester deaths highlight Peru's deep historical divisions",
    "Outgoing president of Micronesia accuses China of bribery, threats and 'political warfare'",
  ];
  return (
    <Wrapper>
      <img
        src="https://cdn.cnn.com/cnnnext/dam/assets/230309115753-04-georgia-bill-protests-medium-tease.jpeg"
        alt=""
      />

      <h2>
        Georgia's parliament formally revokes 'foreign influence' bill that
        sparked major protests
      </h2>
      {title.map((text) => {
        return (
          <p key={text}>
            {text} <hr ></hr>
          </p>
        );
      })}
    </Wrapper>
  );
};



export default News3;


const Wrapper = styled.main`
  font-family: var(--text-font-family);
  font-weight: var(--text-font-weight);

  h2 {
    font-family: var(--big-font-family);
  }
  span {
    font-weight: bold;
    font-family: var(--Bold-font-family);
  }
  @media screen and (max-width: 425px) {
    img {
      width: 100%;
    }
  }
`;