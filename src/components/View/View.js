import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { IconButton, Fab } from "@material-ui/core";
import { KeyboardBackspace } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import anime from "animejs";

const useStyles = makeStyles({
  keyboardBackspace: {
    fill: "black",
    fontSize: 70
  },
  backFab: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 18,
    right: 18
  }
});

const Container = styled.div`
  background-color: white;
  min-height: 100vh;
`;
const Border = styled.div`
  position: relative;
  box-sizing: border-box;
  border: ${({ mobile }) => (mobile ? "none" : "10px solid black")};
  margin: 26px;
  border-radius: 19px;
`;
const DesktopBackButton = styled(IconButton)`
  position: absolute;
  top: 50px;
  left: 50px;
`;
const View = (props, ref) => {
  const containerRef = useRef(null);
  const mountAnimationRef = useRef(null);

  const classes = useStyles();

  // componentDidMount
  useEffect(() => {
    // Create mount animation and attach to the appropriate ref
    mountAnimationRef.current = anime({
      targets: containerRef,
      duration: 500,
      opacity: [0, 1],
      translateY: [100, 0],
      autoplay: false
    });

  }, []);

  return (
    <Container ref={containerRef} style={props.style}>
      <Border mobile={props.mobile}>
        {props.onBack ? (
          props.mobile ? (
            <Fab className={classes.backFab}>
              <KeyboardBackspace />
            </Fab>
          ) : (
            <DesktopBackButton>
              <KeyboardBackspace
                classes={{ root: classes.keyboardBackspace }}
              />
            </DesktopBackButton>
          )
        ) : null}
        {props.children}
      </Border>
    </Container>
  );
};

export default View;
