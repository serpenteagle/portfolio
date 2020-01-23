import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-auto-rows: 1fr;
  grid-gap: 22px;
  height: ${props => props.height || 'auto'};
  width: ${props => props.width || '100%'};
`;

const ProjectGrid = props => {
  return (
    <Grid>
      {props.children}
    </Grid>
  );
}

export default ProjectGrid;