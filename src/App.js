import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { withBreakpoints } from "react-breakpoints";
import anime from "animejs";
import { Switch, Route, withRouter } from "react-router-dom";
import { calcOffsetFromCenter } from "./helpers/helpers";

import Home from "./views/Home.js";
import views from "./views/views";

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
  },
  figcaption: {
    fontFamily: "Space Grotesk",
    fontWeight: "400",
    fontSize: "16px"
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
    duration: 750,
    autoplay: false,
    easing: "easeInOutQuart",
    opacity: 0,
    translateX: [0, xy[0]],
    translateY: [0, xy[1]],
    translateZ: [0, 500]
  });

const App = props => {
  const homeContainerRef = useRef(null);
  const pageContainerRef = useRef(null);
  const toRef = useRef(null);

  const lastZoomCoords = useRef([0, 0]);
  const lastHomeScroll = useRef(0);

  useEffect(() => {
    // Set scroll to 0 when routing to a new page
    const root = document.getElementById("root");
    if (props.location.pathname !== "/") root.scrollTop = 0;
  }, [props.location.pathname]);

  useLayoutEffect(() => {
    // Create and play return animation when going to home
    if (toRef.current === "/") {
      const animation = createZoomAnimation(
        homeContainerRef.current,
        lastZoomCoords.current
      );

      animation.seek(750);
      animation.reverse();

      // Restore previous scroll position of home
      const root = document.getElementById("root");
      root.scrollTop = lastHomeScroll.current;

      animation.play();

      lastZoomCoords.current = [0, 0];
      toRef.current = null;
    }
  }, [toRef.current]);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Switch>
          {/* <Route path="/test">
            <PageContainer ref={pageContainerRef}>
              <Test
                onClick={() => {
                  props.history.push("/");
                  // Update to call useLayoutEffect that handles animation
                  toRef.current = "/";
                }}
              />
            </PageContainer>
          </Route> */}

          {views.map((item, index) =>
            item.component ? (
              <Route path={item.route} key={index}>
                <PageContainer ref={pageContainerRef}>
                  {/* {React.cloneElement(item.component, {
                  onBack: () => {
                    props.history.push("/");
                    // Update to call useLayoutEffect that handles animation
                    toRef.current = "/";
                  }
                })} */}
                  <item.component
                    onBack={() => {
                      props.history.push("/");
                      // Update to call useLayoutEffect that handles animation
                      toRef.current = "/";
                    }}
                  />
                </PageContainer>
              </Route>
            ) : (
              undefined
            )
          )}

          <Route path="/">
            <HomeContainer ref={homeContainerRef}>
              <Home
                onGridItemClick={(e, route) => {
                  // Flip signs on each array item
                  const xy = calcOffsetFromCenter(e.target).map(e => -1 * e);
                  // Store these coords for the return animation
                  lastZoomCoords.current = xy;

                  // Record scroll position of home for later restoration
                  const root = document.getElementById("root");
                  lastHomeScroll.current = root.scrollTop;

                  // Animate zoom in, then push new route
                  const animation = createZoomAnimation(
                    homeContainerRef.current,
                    xy
                  );

                  animation.finished.then(() => {
                    anime.remove(homeContainerRef.current);
                    props.history.push(route);
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
