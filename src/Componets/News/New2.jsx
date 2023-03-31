import React from "react";
import styled from "styled-components";
const New2 = () => {
  return (
    <Wrapper>
      <section>
        <img
          src="https://cdn.cnn.com/cnnnext/dam/assets/230310100325-02-hamburg-shooting-update-031023-medium-tease.jpeg"
          alt=""
        />
        <h2>Shooter kills seven at Jehovah's Witnesses center in Germany</h2>
      </section>
      <section>
        <img
          src="https://cdn.cnn.com/cnnnext/dam/assets/230308092143-mcgee-williams-woodard-brown-split-medium-tease.jpg"
          alt=""
        />

        <h2>
          Cartel issues apology over kidnapping of 4 Americans and hands over
          members
        </h2>

        <ul>
          <li>
            <span>Opinion:</span> Bizarre Mexico tragedy highlights this
            fundamental truth
          </li>

          <li>
            <span>Watch:</span> How friend of Americans dodged Mexico kidnapping
            when she forgot her ID
          </li>
        </ul>
      </section>
    </Wrapper>
  );
};

export default New2;


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

  li {
    text-decoration: underline;
    text-decoration-color: gray;
    // margin: 0.5em -0.5em;
  }

  @media screen and (max-width: 425px) {
    img{
      width:100%;
    }
  }
`;
