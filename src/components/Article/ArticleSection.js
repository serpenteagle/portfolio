import React from "react";
import styled from "styled-components";

const Container = styled.div`
  /* &:not(:last-child) {
    margin-bottom: 55px;
  } */
  &> * {
    margin-bottom: 55px;
  }
`;

const ArticleSection = props => {
  return <Container>{props.children}</Container>;
};

export default ArticleSection;
