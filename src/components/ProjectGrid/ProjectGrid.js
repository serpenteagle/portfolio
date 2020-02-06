import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-auto-rows: 1fr;
  grid-gap: 25px;
  height: ${(props) => props.height || 'auto'};
  width: ${(props) => props.width || '100%'};
`;

const ProjectGrid = ({ children }) => (
  <Grid>
    {children}
  </Grid>
);

ProjectGrid.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};
ProjectGrid.defaultProps = {
  children: undefined,
};

export default ProjectGrid;
