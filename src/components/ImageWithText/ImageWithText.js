import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Typography from '../Typography/Typography';

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;
const ImageContainer = styled.figure`
  order: ${({ flipped }) => (flipped ? '2' : '0')};
  margin-block-start: unset;
  margin-block-end: unset;
  margin-inline-start: unset;
  margin-inline-end: unset;
`;
const Image = styled.img`
  width: 500px;
  height: 300px;
  object-fit: cover;
  ${(props) => (props.flipped ? 'margin-left: 40px;' : 'margin-right: 40px;')}
  border: 3px solid black;
  border-radius: 3px;
`;

const ImageWithText = ({
  flipped, src, caption, children,
}) => (
  <Container>
    <ImageContainer flipped={flipped}>
      <Image flipped={flipped} src={src} />
      <Typography
        variant="figcaption"
        style={{ textAlign: flipped ? 'right' : 'left' }}
      >
        {caption}
      </Typography>
    </ImageContainer>
    <Typography variant="p" style={{ flexGrow: '1', textAlign: 'justify' }}>
      {children}
    </Typography>
  </Container>
);

ImageWithText.propTypes = {
  flipped: PropTypes.bool,
  src: PropTypes.string.isRequired,
  caption: PropTypes.string,
  children: PropTypes.string,
};
ImageWithText.defaultProps = {
  flipped: undefined,
  caption: undefined,
  children: undefined,
};

export default ImageWithText;
