import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  /* &:not(:last-child) {
    margin-bottom: 55px;
  } */
  &> * {
    margin-bottom: 55px;
  }
`;

const ArticleSection = ({ children }) => <Container>{children}</Container>;

ArticleSection.propTypes = { children: PropTypes.arrayOf(PropTypes.element) };
ArticleSection.defaultProps = { children: PropTypes.arrayOf(PropTypes.children) };

export default ArticleSection;
