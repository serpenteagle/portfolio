/* eslint-disable react/jsx-filename-extension */
import React, {
  useEffect, useRef, useLayoutEffect,
} from 'react';
import styled, { ThemeProvider, keyframes } from 'styled-components';
import { withBreakpoints } from 'react-breakpoints';
import anime from 'animejs';
import { Switch, Route, withRouter } from 'react-router-dom';
import { calcOffsetFromCenter } from './helpers/helpers';

import Home from './views/Home';
import views from './views/views';
import MobilePlaceholder from './views/MobilePlaceholder';

const theme = {
  h1: {
    fontFamily: 'Space Grotesk',
    fontWeight: '500',
    fontSize: '92px',
  },
  p: {
    fontFamily: 'Space Grotesk',
    fontWeight: '400',
    fontSize: '24px',
  },
  figcaption: {
    fontFamily: 'Space Grotesk',
    fontWeight: '400',
    fontSize: '16px',
  },
};

const dropIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -60px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const Container = styled.div`
  transform-style: preserve-3d;
`;
const PageContainer = styled.div`
  animation: ${dropIn} 0.4s ease-in-out;
`;
const HomeContainer = styled.div``;

const createZoomAnimation = (targets, xy) => anime({
  targets,
  duration: 750,
  autoplay: false,
  easing: 'easeInOutQuart',
  opacity: 0,
  translateX: [0, xy[0]],
  translateY: [0, xy[1]],
  translateZ: [0, 500],
});

const App = ({ history, location, currentBreakpoint }) => {
  const homeContainerRef = useRef(null);
  const pageContainerRef = useRef(null);
  const toRef = useRef(null);

  const lastZoomCoords = useRef([0, 0]);
  const lastHomeScroll = useRef(0);

  useEffect(() => {
    // Set scroll to 0 when routing to a new page
    const root = document.getElementById('root');
    if (location.pathname !== '/') root.scrollTop = 0;
  }, [location.pathname]);

  useLayoutEffect(() => {
    // Create and play return animation when going to home
    if (toRef.current === '/') {
      const animation = createZoomAnimation(
        homeContainerRef.current,
        lastZoomCoords.current,
      );

      animation.seek(750);
      animation.reverse();

      // Restore previous scroll position of home
      const root = document.getElementById('root');
      root.scrollTop = lastHomeScroll.current;

      animation.play();

      lastZoomCoords.current = [0, 0];
      toRef.current = null;
    }
  }, [toRef.current]);

  return currentBreakpoint === 'mobile' ? (
    <MobilePlaceholder />
  ) : (
    <ThemeProvider theme={theme}>
      <Container>
        <Switch>


          {views.map((item, index) => (item.component ? (
            <Route path={item.route} key={index}>
              <PageContainer ref={pageContainerRef}>

                <item.component
                  onBack={() => {
                    history.push('/');
                    // Update to call useLayoutEffect that handles animation
                    toRef.current = '/';
                  }}
                />
              </PageContainer>
            </Route>
          ) : (
            undefined
          )))}

          <Route path="/">
            <HomeContainer ref={homeContainerRef}>
              <Home
                onGridItemClick={(e, route) => {
                  // Flip signs on each array item
                  const xy = calcOffsetFromCenter(e.target).map((e) => -1 * e);
                  // Store these coords for the return animation
                  lastZoomCoords.current = xy;

                  // Record scroll position of home for later restoration
                  const root = document.getElementById('root');
                  lastHomeScroll.current = root.scrollTop;

                  // Animate zoom in, then push new route
                  const animation = createZoomAnimation(
                    homeContainerRef.current,
                    xy,
                  );

                  animation.finished.then(() => {
                    anime.remove(homeContainerRef.current);
                    history.push(route);
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
