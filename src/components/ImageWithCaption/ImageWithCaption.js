import React from "react";
import styled from "styled-components";

const Container = styled.figure`
  width: 100%;
  margin-block-start: unset;
  margin-block-end: unset;
  margin-inline-start: unset;
  margin-inline-end: unset;
`;
const Image = styled.img`
  width: 100%;
  height: 535px;
  object-fit: cover;
  border: 3px solid black;
  border-radius: 3px;
`;
const Caption = styled.figcaption`
  text-align: center;
  font-family: ${props => props.theme.fontFamily};
`;

const ImageWithCaption = props => {
  return (
    <Container>
      <Image src={props.src} />
      <Caption>{props.caption}</Caption>
    </Container>
  );
};

export default ImageWithCaption;
