import React from "react";
import styled from "styled-components";

import Typography from "../Typography/Typography";

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;
const ImageContainer = styled.figure`
  order: ${({ flipped }) => (flipped ? "2" : "0")};
  margin-block-start: unset;
  margin-block-end: unset;
  margin-inline-start: unset;
  margin-inline-end: unset;
`;
const Image = styled.img`
  width: 500px;
  height: 300px;
  object-fit: cover;
  ${props => (props.flipped ? `margin-left: 40px;` : `margin-right: 40px;`)}
  border: 3px solid black;
  border-radius: 3px;
`;
// const Caption = styled.figcaption`
//   text-align: ${({ flipped }) => (flipped ? "right" : "left")};
//   font-family: ${props => props.theme.fontFamily};
// `;

const ImageWithText = props => {
  return (
    <Container>
      <ImageContainer flipped={props.flipped}>
        <Image flipped={props.flipped} src={props.src} />
        {/* <Caption flipped={props.flipped}>
          <Caption>{props.caption}</Caption>
        </Caption> */}
        <Typography
          variant="figcaption"
          style={{ textAlign: props.flipped ? "right" : "left" }}
        >
          {props.caption}
        </Typography>
      </ImageContainer>
      <Typography variant="p" style={{ flexGrow: "1", textAlign: "justify" }}>
        {props.children}
      </Typography>
    </Container>
  );
};

export default ImageWithText;
