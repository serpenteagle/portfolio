import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Container = styled.div``;
const Border = styled.div`
  border: 19px solid black;
  margin: 35px;
  border-radius: 19px;
  text-align: center;
`;
const Filler = styled.div`
  height: 1000px;
  width: 100%;
`;
const Title = styled.h1`
  font-family: 'Space Grotesk';
  font-size: 106px;
  font-weight: bold;
  color: black;
`;
const Highlight = styled.mark`
  background-color: #19f8fe;
  display: inline-block;
  line-height: 0em;
  padding-bottom: 52px;
`;

const Body = styled.p`
  display: inline-block;
  text-align: center;
  width: 1000px;
  font-family: 'Space Grotesk';
  font-size: 29px;
  font-weight: regular;
`;

const Divider = styled.hr`
  margin: 10px 300px;
  border: 1px solid black;
`;

const App = props => {
  return (
    <Container>
      <Border>
        <Title>
          <Highlight>Shashank Rajesh</Highlight>
        </Title>

        <Body>
          Self taught front-end developer with a background in robotics
          engineering. Having a keen attention to detail and an obsession with
          aesthetics, something something, something something.
        </Body>
        <Divider />
        <Body>ShashankRajesh7@gmail.com &nbsp;&nbsp;&nbsp;&nbsp; 248-567-9425</Body>
      </Border>
    </Container>
  );
};

export default App;
