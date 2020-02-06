import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const Article = ({ style, children }) => (
  <Container style={style}>
    <SectionContainer>{children}</SectionContainer>
  </Container>
);

Article.propTypes = {
  style: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.arrayOf(PropTypes.element),
};
Article.defaultProps = {
  style: undefined,
  children: undefined,
};

export default Article;
