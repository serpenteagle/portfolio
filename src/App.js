import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import anime from 'animejs';
import shortid from 'shortid';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import GridItem from './components/GridItem/GridItem.js';
import ProjectTemplate from './components/ProjectTemplate/ProjectTemplate.js';

import boschContent from './content/bosch.js';
console.log(boschContent);

const Container = styled.div``;
const Border = styled.div`
  boz-sizing: border-box;
  border: 16px solid black;
  margin: 26px;
  border-radius: 19px;
  text-align: center;
`;
const RouterScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: white;
  pointer-events: ${({go}) => (go ? 'auto' : 'none')};
  opacity: 0;
  overflow-y: scroll;
`;
const RouterTest = styled.div`
  height: 3000px;
  width: 300px;
  background-color: ${({bgColor}) => bgColor};
  opacity: ${({go}) => (go ? 1 : 0)};
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

const Text = styled.p`
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
`;

const App = props => {
  const [gridItems, setGridItems] = useState([
    {id: shortid.generate(), ref: useRef(null)},
    {id: shortid.generate(), ref: useRef(null)},
    {id: shortid.generate(), ref: useRef(null)},
    {id: shortid.generate(), ref: useRef(null)},
    {id: shortid.generate(), ref: useRef(null)},
    {id: shortid.generate(), ref: useRef(null)},
    {id: shortid.generate(), ref: useRef(null)},
    {id: shortid.generate(), ref: useRef(null)},
  ]);
  const [open, setOpen] = useState(null);
  const [go, setGo] = useState(null);

  const containerRef = useRef(null);
  const routerScreenRef = useRef(null);

  useEffect(() => {
    if (open) {
      const el = gridItems.find(el => el.id === open).ref.current;
      const rect = el.getBoundingClientRect();

      const a = [window.innerWidth / 2, window.innerHeight / 2];
      const b = [rect.left + rect.width / 2, rect.top + rect.height / 2];

      anime({
        begin: () => setTimeout(() => setGo(true), 500),
        targets: containerRef.current,
        translateX: `+=${a[0] - b[0]}`,
        translateY: `+=${a[1] - b[1]}`,
        translateZ: '800px',
        duration: 750,
        easing: 'easeInOutQuart',
      });
      anime({
        targets: routerScreenRef.current,
        opacity: 1,
        duration: 750,
        easing: 'easeInOutQuart',
      });
    } else {
      anime({
        targets: containerRef.current,
        translateX: 0,
        translateY: 0,
        translateZ: 0,
        duration: 1000,
        easing: 'easeInOutQuint',
      });
      anime({
        targets: routerScreenRef.current,
        opacity: 0,
        duration: 750,
        easing: 'easeInOutQuint',
        complete: () => setGo(false),
      });
    }
  }, [open]);

  return (
    <React.Fragment>
      <Container ref={containerRef}>
        <Border>
          <Title>
            <Highlight>Shashank Rajesh</Highlight>
          </Title>

          <Text>
            Self taught front-end developer with a background in robotics
            engineering. Having a keen attention to detail and an obsession with
            aesthetics, something something, something something.
          </Text>

          <GridWrapper>
            <Grid>
              {gridItems.map((el, i) => (
                <GridItem
                  key={el.id}
                  ref={el.ref}
                  onClick={() => {
                    setOpen(open ? null : el.id);
                  }}
                />
              ))}
            </Grid>
          </GridWrapper>

          <Divider />

          <Text>
            ShashankRajesh7@gmail.com &nbsp;&nbsp;&nbsp;&nbsp; 248-567-9425
          </Text>
        </Border>
      </Container>

      <BrowserRouter>
        <RouterScreen go={go} ref={routerScreenRef}>
          <Switch>
            <Route path="/">
              <ProjectTemplate content={boschContent} onBack={() => setOpen(null)} go={go} />
            </Route>
            <Route path="/two">
              <RouterTest bgColor="blue" go={go} />
            </Route>
          </Switch>
        </RouterScreen>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
