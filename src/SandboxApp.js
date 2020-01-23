import React, { useState, useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { withBreakpoints } from "react-breakpoints";

import View from "./components/View/View.js";
import Article from "./components/Article/Article.js";
import ArticleSection from "./components/Article/ArticleSection.js";
import ImageWithText from "./components/ImageWithText/ImageWithText.js";

import BoschHolo from "./views/BoschHolo";

import image from "./assets/holo-render.jpg";
import ImageWithCaption from "./components/ImageWithCaption/ImageWithCaption.js";
import ProjectGrid from "./components/ProjectGrid/ProjectGrid.js";
import ProjectGridItem from "./components/ProjectGrid/ProjectGridItem.js";
import Typography from "./components/Typography/Typography.js";

const theme = {
  h1: {
    fontFamily: "Space Grotesk",
    fontWeight: "500",
    fontSize: "92px"
  },
  p: {
    fontFamily: "Space Grotesk",
    fontWeight: "400",
    fontSize: "24px"
  }
};

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(100%) grayscale(25%);
  transition: all 0.5s;
`;

const SandboxApp = props => {
  console.log(props.currentBreakpoint);
  return (
    // <ThemeProvider theme={theme}>
    //   <BoschHolo />
    // </ThemeProvider>

    <ThemeProvider theme={theme}>
      <View>
        <Article>
          <ArticleSection>
            <Typography variant="h1">Shashank Rajesh</Typography>
            <Typography variant="p" style={{textAlign: 'justify'}}>
              Self taught front-end developer with a background in robotics
              engineering. Having a keen attention to detail and an obsession
              with aesthetics, something something, something something.
            </Typography>
            <ProjectGrid>
              <ProjectGridItem span="2" title="Bosch Holo">
                <ProjectImage src={image} />
              </ProjectGridItem>
              <ProjectGridItem>
                <ProjectImage src={image} />
              </ProjectGridItem>
              <ProjectGridItem>
                <ProjectImage src={image} />
              </ProjectGridItem>
              <ProjectGridItem span="2">
                <ProjectImage src={image} />
              </ProjectGridItem>
              <ProjectGridItem>
                <ProjectImage src={image} />
              </ProjectGridItem>
              <ProjectGridItem>
                <ProjectImage src={image} />
              </ProjectGridItem>
              <ProjectGridItem>
                <ProjectImage src={image} />
              </ProjectGridItem>
            </ProjectGrid>
          </ArticleSection>
        </Article>
      </View>
    </ThemeProvider>
  );
};

export default withBreakpoints(SandboxApp);
