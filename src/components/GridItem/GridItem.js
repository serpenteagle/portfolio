import React, {useState, useRef, useEffect} from 'react';
import styled, {css} from 'styled-components';

const Container = styled.div`
  position: relative;
  background-color: lightgrey;
  border-radius: 2px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 3px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(100%) grayscale(25%);
  transition: all 0.5s;
  scale: 1;
`;
const Shade = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  font-family: 'Space Grotesk';
  font-size: 40px;
  opacity: 0;
  transition: opacity 0.5s;
  :hover {
    opacity: 0.75;
    cursor: pointer;
  }
`;

const GridItem = React.forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);

  return (
    <Container {...props} ref={ref}>
      <Image src={props.src} />
      <Shade>{props.title}</Shade>
    </Container>
  );
});

export default GridItem;
