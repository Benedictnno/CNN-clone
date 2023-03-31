import React from "react";
import styled from "styled-components";

const Tranding = () => {
  const trending = [
    "Timeline of Russia's war in Ukraine",
    "Mexico kidnappings",
    "Georgia protests",
    "Fox News",
    "Bindi Irwin",
    "China lingerie ",
    "Paper film set",
    "Elon Musk ",
  ];
  return (
    <Wrapper>
      <h3>TRENDING</h3>
      {trending.map((trend) => {
        return (
            <p key={trend}> {trend} </p>
        )
      })}
    </Wrapper>
  );
};

export default Tranding;

const Wrapper = styled.main`
  display: flex;
  flex-wrap: nowrap;
  flex-basis: 0;
  flex-grow: 1;
  font-family: var(--Bold-font-family);
  font-size: 1em;
  overflow-x: auto;
  margin:4em 0 0 0;
  h3 {
    color: red;
  }

  p {
    display: block;
    text-align: center;
    padding-left: 0.75em;
    margin: 1.2em 0 0 .5em;
    white-space: nowrap;
  }
`;