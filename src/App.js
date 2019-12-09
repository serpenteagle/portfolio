import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import anime from 'animejs';
import shortid from 'shortid';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import GridItem from './components/GridItem/GridItem.js';

const Viewport = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  perspective: 18in;
  overflow-y: scroll;
`;
const RouterScreen = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  opacity: 0;
  pointer-events: none;
`;
const RouterTest = styled.div`
  height: 300px;
  width: 300px;
  background-color: ${({bgColor}) => bgColor};
  opacity: ${({start}) => (start ? 1 : 0)};
`;
const Container = styled.div``;
const Border = styled.div`
  border: 16px solid black;
  margin: 26px;
  border-radius: 19px;
  text-align: center;
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
  const [start, setStart] = useState(null);

  const containerRef = useRef(null);
  const routerScreenRef = useRef(null);

  useEffect(() => {
    console.log('effect');
    if (open) {
      console.log(open);
      const el = gridItems.find(el => el.id === open).ref.current;
      const rect = el.getBoundingClientRect();

      const a = [window.innerWidth / 2, window.innerHeight / 2];
      const b = [rect.left + rect.width / 2, rect.top + rect.height / 2];

      anime({
        begin: () => setTimeout(() => setStart(true), 2000),
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
        duration: 750,
        easing: 'easeInOutQuart',
      });
      anime({
        targets: routerScreenRef.current,
        opacity: 0,
        duration: 750,
        easing: 'easeInOutQuart',
        end: () => setStart(null),
      });
    }
  }, [open]);

  return (
    <Viewport>
      <Container ref={containerRef}>
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
          <Body>
            ShashankRajesh7@gmail.com &nbsp;&nbsp;&nbsp;&nbsp; 248-567-9425
          </Body>
        </Border>
      </Container>
      <BrowserRouter>
        <RouterScreen ref={routerScreenRef}>
          <Switch>
            <Route path="/">
              <RouterTest bgColor="green" start={start} />
            </Route>
            <Route path="/two">
              <RouterTest bgColor="blue" start={start} />
            </Route>
          </Switch>
        </RouterScreen>
      </BrowserRouter>
    </Viewport>
  );
};

export default App;
