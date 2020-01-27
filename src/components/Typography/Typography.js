import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  ${({ theme }) => `
    font-family: ${theme.h1.fontFamily}
    font-weight: ${theme.h1.fontWeight}
    font-size: ${theme.h1.fontSize}
  `}
`;
const P = styled.p`
  ${({ theme }) => `
    font-family: ${theme.p.fontFamily}
    font-weight: ${theme.p.fontWeight}
    font-size: ${theme.p.fontSize}
  `}
`;
const FigCaption = styled.figcaption`
  ${({ theme }) => `
    font-family: ${theme.figcaption.fontFamily}
    font-weight: ${theme.figcaption.fontWeight}
    font-size: ${theme.figcaption.fontSize}
  `}
`;

const Typography = props => {
  switch (props.variant) {
    case "h1":
      return <H1 style={props.style}>{props.children}</H1>;
      break;

    case "p":
      return <P style={props.style}>{props.children}</P>;
      break;

    case "figcaption":
      return <FigCaption {...props}>{props.children}</FigCaption>;

    default:
      return <P style={props.style}>{props.children}</P>;
      break;
  }
};

export default Typography;
