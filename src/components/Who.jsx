import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  /* scroll-snap-align: center; */
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
`;
  
const Title = styled.h1`
  font-size: 74px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;


const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          {/* 3d model */}
        </Left>
        <Right>
          <Title>Think outside the square space.</Title>
          <WhatWeDo>
            <Line src="./images/line.png" />
            <Subtitle>Who We Are</Subtitle>
          </WhatWeDo>
          <Desc>
            A creative group of designers and developers with a passion for the arts.
          </Desc>
          <Button>See Our Works</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
