import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../Typography/Typography';

const Container = styled.a`
  display: block;
  text-decoration: none;
  color: black;
  :visited {
    color: black;
  }
`;
const Icon = styled.img``;

const IconLink = ({ href, src, children }) => (
  <Container href={href} target="_blank">
    <Typography>{children}</Typography>
    <Icon src={src} />
  </Container>
);

IconLink.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  children: PropTypes.string,
};
IconLink.defaultProps = {
  children: 'Untitled',
};

export default IconLink;
