import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding-top: 50px;
  padding-bottom: 50;
  justify-content: center;
  text-align: center;
`;
const SectionContainer = styled.div`
  max-width: 1009px;
  /* &:not(:last-child) {
    margin-bottom: 85px;
  } */
  & > * {
    margin-bottom: 85px;
  }
`;

const Article = props => {
  return (
    <Container {...props}>
      <SectionContainer>{props.children}</SectionContainer>
    </Container>
  );
};

export default Article;
