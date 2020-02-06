import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  background-color: lightgrey;
  border-radius: 2px;
  width: 100%;
  height: ${(props) => props.height || '321px'};
  overflow: hidden;
  border-radius: 3px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  grid-area: span 1 / span ${(props) => props.span || '1'};
  border: 4px solid black;
`;
const Shade = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  font-family: "Space Grotesk";
  font-size: 40px;
  opacity: 0;
  transition: opacity 0.5s;
  :hover {
    opacity: 0.75;
    cursor: pointer;
  }
`;
const ProjectGridItem = ({
  span, title, onClick, children,
}) => (
  <Container span={span} onClick={onClick}>
    {children}
    <Shade>{title}</Shade>
  </Container>
);

ProjectGridItem.propTypes = {
  span: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  title: PropTypes.string,
  onClick: PropTypes.func,
};
ProjectGridItem.defaultProps = {
  span: undefined,
  title: 'Untitled',
  onClick: undefined,
};

export default ProjectGridItem;
