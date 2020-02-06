import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../Typography/Typography';

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

const ImageWithCaption = ({ src, caption }) => (
  <Container>
    <Image src={src} />
    <Typography style={{ textAlign: 'center' }} variant="figcaption">
      {caption}
    </Typography>
  </Container>
);

ImageWithCaption.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string,
};
ImageWithCaption.defaultProps = {
  caption: undefined,
};

export default ImageWithCaption;
