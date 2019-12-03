import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import GridItem from './components/GridItem/GridItem.js';

const Container = styled.div``;
const Border = styled.div`
  border: 16px solid black;
  margin: 26px;
  border-radius: 19px;
  text-align: center;
`;
const Shade = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  transition: opacity 0.5s;
  opacity: ${({on}) => (on ? '.75' : '0')};
  z-index: ${({on}) => (on ? 1000 : 'initial')};
  pointer-events: none;
`;
const Title = styled.h1`
  font-family: 'Space Grotesk';
  font-size: 81px;
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
  font-size: 22px;
  font-weight: regular;
`;

const Divider = styled.hr`
  margin: 10px 300px;
  border: 1px solid black;
`;

const GridWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 10px;
  height: 900px;
  width: 900px;
  background-color: blue;
`;

const App = props => {
  return (
    <Container>
      <Shade />
      <Border>
        <Title>
          <Highlight>Shashank Rajesh</Highlight>
        </Title>

        <Body>
          Self taught front-end developer with a background in robotics
          engineering. Having a keen attention to detail and an obsession with
          aesthetics, something something, something something.
        </Body>

        <GridWrapper>
          <Grid>
            <GridItem />

            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem gc="1 / span 2" gr="3 / span 1" />
            <GridItem />
          </Grid>
        </GridWrapper>

        <Divider />
        <Body>
          ShashankRajesh7@gmail.com &nbsp;&nbsp;&nbsp;&nbsp; 248-567-9425
        </Body>
      </Border>
    </Container>
  );
};

export default App;
