import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import anime from 'animejs';
import shortid from 'shortid';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {detect} from 'detect-browser';

import GridItem from './components/GridItem/GridItem.js';
import ProjectTemplate from './components/ProjectTemplate/ProjectTemplate.js';

import boschContent from './content/bosch.js';

import holoRender from './assets/holo-render.jpg';
import kaizenArm from './assets/kaizen-arm.jpg';
import wn from './assets/wn.jpg';
import yt from './assets/yt.jpg';
import dc from './assets/dc.jpg';

const isChrome = detect().name === 'chrome';

const Container = styled.div`
  font-family: 'Space Grotesk';
`;
const Border = styled.div`
  boz-sizing: border-box;
  border: 16px solid black;
  margin: 26px;
  border-radius: 19px;
  text-align: center;
  padding-bottom: 75px;
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
  font-weight: 600;
  color: black;
  margin-bottom: 0;
  position: relative;
`;
const Highlight = styled.span`
  ::before {
    content: '  Shashank Rajesh  ';
    background-color: #19f8fe;
    color: rgba(0, 0, 0, 0);
    position: absolute;
    transform: translateY(65px) translateX(-20px);
    height: 35px;
    padding: 0 20px 0 20px;
    z-index: -100;
  }
`;
const Summary = styled.p`
  display: inline-block;
  text-align: center;
  width: 970px;
  font-family: 'Space Grotesk';
  font-size: 22px;
  font-weight: regular;
  text-align: justify;
  margin: 60px 0 60px 0;
`;

const Divider = styled.hr`
  margin: 80px 300px;
  margin-bottom: 25px;
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
  grid-template-rows: 1fr 1fr;
  grid-gap: 22px;
  height: 647px;
  width: 970px;
`;
const Footer = styled.p`
  display: inline-block;
  text-align: center;
  width: 970px;
  font-family: 'Space Grotesk';
  font-size: 22px;
  font-weight: regular;
`;

const PleaseBorder = styled.div`
  --margin: 20px;
  height: calc(100% - 2 * var(--margin));
  border: 14px solid black;
  box-sizing: border-box;
  margin: var(--margin);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;

const PleaseMessage = styled.p`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 35px;
  text-align: center;
  font-weight: regular;
`;

const App = props => {
  const [gridItems, setGridItems] = useState([
    {
      id: shortid.generate(),
      ref: useRef(null),
      src: holoRender,
      span: 2,
      title: 'Bosch Holo Robot',
      flag: true,
    },
    {
      id: shortid.generate(),
      ref: useRef(null),
      src: kaizenArm,
      title: 'Coming soon',
    },
    {
      id: shortid.generate(),
      ref: useRef(null),
      src: wn,
      title: 'Coming soon',
    },
    {
      id: shortid.generate(),
      ref: useRef(null),
      src: yt,
      title: 'Coming soon',
    },
    {
      id: shortid.generate(),
      ref: useRef(null),
      src: dc,
      title: 'Coming soon',
    },
  ]);
  const [open, setOpen] = useState(null);
  const [go, setGo] = useState(false);
  // const [go, setGo] = useState(true);

  const containerRef = useRef(null);
  const routerScreenRef = useRef(null);

  useEffect(() => {
    if (open) {
      const el = gridItems.find(el => el.id === open).ref.current;
      const rect = el.getBoundingClientRect();

      const a = [window.innerWidth / 2, window.innerHeight / 2];
      const b = [rect.left + rect.width / 2, rect.top + rect.height / 2];

      anime({
        begin: () => setTimeout(() => setGo(true), 750),
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

  if (isChrome)
    return (
      <React.Fragment>
        <Container ref={containerRef}>
          <Border>
            <Title>
              <Highlight> Shashank Rajesh </Highlight>
            </Title>

            <Summary>
              Self taught front-end developer with full-stack knowledge and a
              background in robotics engineering. Having a keen attention to
              detail and an obsession with aesthetics, I always strive for the
              best in my work.
            </Summary>

            <GridWrapper>
              <Grid>
                {gridItems.map((el, i) => (
                  <GridItem
                    key={el.id}
                    ref={el.ref}
                    src={el.src}
                    title={el.title}
                    onClick={() => {
                      if (el.flag) setOpen(open ? null : el.id);
                    }}
                    style={{
                      gridArea: el.span
                        ? `span 1 / span ${el.span}`
                        : 'initial',
                    }}
                  />
                ))}
              </Grid>
            </GridWrapper>

            <Divider />

            <Footer>
              ShashankRajesh7@gmail.com &nbsp;&nbsp;&nbsp;
              github.com/serpenteagle &nbsp;&nbsp;&nbsp; 248-567-9425
            </Footer>
          </Border>
        </Container>

        <RouterScreen go={go} ref={routerScreenRef}>
          <ProjectTemplate
            content={boschContent}
            onBack={() => setOpen(null)}
            go={go}
          />
        </RouterScreen>

        {/* <BrowserRouter>
        <RouterScreen go={go} ref={routerScreenRef}>
          <Switch>
            <Route path="/">
              <ProjectTemplate
                content={boschContent}
                onBack={() => setOpen(null)}
                go={go}
              />
            </Route>
          </Switch>
        </RouterScreen>
                        </BrowserRouter>*/}
      </React.Fragment>
    );
  else
    return (
      <PleaseBorder>
        <PleaseMessage>
          Please use Chrome.
          <br />
          Currently debugging browser inconsistencies.
        </PleaseMessage>
      </PleaseBorder>
    );
};

export default App;
