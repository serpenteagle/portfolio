import React, {useState, useRef, useEffect} from 'react';
import styled, {css} from 'styled-components';
import {Flipper, Flipped} from 'react-flip-toolkit';
import shortid from 'shortid';
import styleInject from 'style-inject';

const Container = styled.div`
  background-color: red;
  border-radius: 2px;

  ${({open}) =>
    open
      ? css`
          position: fixed;
          top: 30px;
          bottom: 30px;
          left: 30px;
          right: 30px;
          z-index: 2000;
        `
      : css`
          height: 100%;
          width: 100%;
        `}
`;

const GridItem = React.forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const flipperClass = shortid.generate();

  const flipperStyle = `
    .${flipperClass}{
      grid-column: ${props.gc || 'unset'};
      grid-row: ${props.gr || 'unset'};
      height: 100%;
      width: 100%;
    }
`;
  styleInject(flipperStyle);

  return (
    <Container {...props} ref={ref} open={open}>
      {props.children}
    </Container>
  );
  // return (
  // <Flipper flipKey={open} className={flipperClass}>
  // <Flipped flipId={'flipped'}>
  // <Container {...props} onClick={() => setOpen(!open)} open={open}>
  // {props.children}
  // </Container>
  // </Flipped>
  // </Flipper>
  // );
});

export default GridItem;
