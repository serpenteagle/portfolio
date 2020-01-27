import React from "react";
import styled from "styled-components";
import Typography from "../Typography/Typography";

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

const ImageWithCaption = props => {
  return (
    <Container>
      <Image src={props.src} />
      <Typography style={{ textAlign: "center" }} variant="figcaption">
        {props.caption}
      </Typography>
    </Container>
  );
};

export default ImageWithCaption;
