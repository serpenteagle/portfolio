import React from "react";
import styled from "styled-components";
import { IconButton, Fab } from "@material-ui/core";
import { KeyboardBackspace } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

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
  min-height: 100vh;
`;
const Border = styled.div`
  position: relative;
  box-sizing: border-box;
  border: ${({ mobile }) => (mobile ? "none" : "16px solid black")};
  margin: 26px;
  border-radius: 19px;
`;
const DesktopBackButton = styled(IconButton)`
  position: absolute;
  top: 50px;
  left: 50px;
`;
const View = props => {
  const classes = useStyles();
  return (
    <Container>
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