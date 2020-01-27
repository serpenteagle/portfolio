import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { withBreakpoints } from "react-breakpoints";
import anime from "animejs";
import { Switch, Route, withRouter } from "react-router-dom";
import { calcOffsetFromCenter } from "./helpers/helpers";

import Home from "./views/Home.js";

const theme = {
  h1: {
    fontFamily: "Space Grotesk",
    fontWeight: "500",
    fontSize: "92px"
  },
  p: {
    fontFamily: "Space Grotesk",
    fontWeight: "400",
    fontSize: "24px"
  }
};

const Container = styled.div`
  transform-style: preserve-3d;
`;
const PageContainer = styled.div``;
const HomeContainer = styled.div``;
const Test = styled.div`
  height: 100px;
  width: 100px;
  background-color: green;
`;

const createZoomAnimation = (targets, xy) =>
  anime({
    targets: targets,
    duration: 500,
    autoplay: false,
    easing: "easeInOutCubic",
    opacity: 0,
    translateX: [0, xy[0]],
    translateY: [0, xy[1]],
    translateZ: [0, 500]
  });

const App = props => {
  const homeContainerRef = useRef(null);
  const pageContainerRef = useRef(null);
  // const zoomAnimationRef = useRef(null);
  const toRef = useRef(null);

  const lastZoomCoords = useRef([0, 0]);

  // useEffect(() => {
  //   zoomAnimationRef.current = anime({
  //     targets: homeContainerRef.current,
  //     duration: 500,
  //     autoplay: false,
  //     easing: "easeInOutCubic",
  //     opacity: 0,
  //     translateX: [0, lastZoomCoords[0]],
  //     translateY: [0, lastZoomCoords[1]],
  //     translateZ: [0, 500]
  //   });
  // }, [lastZoomCoords]);

  useLayoutEffect(() => {
    if (toRef.current === "/") {
      const animation = createZoomAnimation(
        homeContainerRef.current,
        lastZoomCoords.current
      );

      animation.seek(500);
      animation.reverse();
      animation.play();

      lastZoomCoords.current = [0, 0];
      toRef.current = null;
    }
  }, [toRef.current]);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Switch>
          <Route path="/test">
            <PageContainer ref={pageContainerRef}>
              <Test
                onClick={() => {
                  props.history.push("/");
                  // Update to call useLayoutEffect that handles animation
                  toRef.current = "/";
                }}
              />
            </PageContainer>
          </Route>
          <Route path="/">
            <HomeContainer ref={homeContainerRef}>
              <Home
                onGridItemClick={e => {
                  // Flip signs on each array item
                  const xy = calcOffsetFromCenter(e.target).map(e => -1 * e);
                  // Store these coords for the return animation
                  lastZoomCoords.current = xy;

                  // Animate zoom in, then push new route
                  const animation = createZoomAnimation(
                    homeContainerRef.current,
                    xy
                  );
                  animation.finished.then(() => {
                    anime.remove(homeContainerRef.current);
                    props.history.push("/test");
                  });
                  animation.play();
                }}
              />
            </HomeContainer>
          </Route>
        </Switch>
      </Container>
    </ThemeProvider>
  );
};

export default withRouter(withBreakpoints(App));
