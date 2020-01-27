import React from "react";
import styled from "styled-components";
import Typography from "../Typography/Typography";

const Container = styled.a`
  display: block;
  text-decoration: none;
  color: black;
  :visited {
    color: black;
  }
`;
const Icon = styled.img``;

const IconLink = props => {
  return (
    <Container href={props.href} target="_blank">
      <Typography>{props.children}</Typography>
      <Icon src={props.src} />
    </Container>
  );
};

export default IconLink;
