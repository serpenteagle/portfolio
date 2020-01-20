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

const SandboxApp = props => {
  console.log(props.currentBreakpoint);
  return (
    <ThemeProvider theme={theme}>
      {/* <View mobile={props.currentBreakpoint === "mobile"} onBack>
        <Article>
          <ArticleSection>
            <ImageWithText src={image} caption="This is an image" flipped>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
              non arcu risus quis varius quam quisque id. Nunc scelerisque
              viverra mauris in. Quam viverra orci sagittis eu volutpat odio
              facilisis.
            </ImageWithText>
            <ImageWithText src={image} caption="This is an image">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
              non arcu risus quis varius quam quisque id. Nunc scelerisque
              viverra mauris in. Quam viverra orci sagittis eu volutpat odio
              facilisis.
            </ImageWithText>
            <ImageWithCaption src={image} caption="Caption" />
          </ArticleSection>
        </Article>
      </View> */}
      <BoschHolo />
    </ThemeProvider>
  );
};

export default withBreakpoints(SandboxApp);
