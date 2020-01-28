import React from "react";

import View from "../components/View/View";
import Article from "../components/Article/Article";
import ArticleSection from "../components/Article/ArticleSection";
import ImageWithCaption from "../components/ImageWithCaption/ImageWithCaption";
import ImageWithText from "../components/ImageWithText/ImageWithText";
import Typography from "../components/Typography/Typography";
import IconLink from "../components/IconLink/IconLink";

import portfolioDev from "../assets/portfolio-dev.jpg";

import galleryIcon from "../assets/gallery-icon.svg";

const Portfolio = props => {
  return (
    <View onBack={props.onBack}>
      <Article style={{ padding: 0 }}>
        <ArticleSection>
          <Typography variant="h1">Portfolio Website</Typography>
          <Typography variant="p" style={{ textAlign: "justify" }}>
            shashankrajesh.com was created to showcase my various projects
            online.
          </Typography>
          <ImageWithCaption src={portfolioDev} caption="Various projects" />
        </ArticleSection>
        <ArticleSection>
          <ImageWithText src={portfolioDev} caption="Completed gearbox">
            The design of the site was developed in Figma, a UI design and
            prototyping app. I spent quite a while tweaking the design to create
            an aesthetic that is simple yet bold and sophisticated.
          </ImageWithText>
          <ImageWithText src={portfolioDev} caption="Intake system" flipped>
            The design is implemented in the frontend using React. A component
            based architecture makes it easy to create reusable, composable
            components that can be used throughout the application. In addition,
            styled-components allows for advanced logic based styling as well as
            seamless whole-app themeing.
          </ImageWithText>
          <ImageWithText src={portfolioDev} caption="2 speed PTO gearbox">
            react-router is used to control the routing of the site. With its
            capabilities, I was able to create seamless and intuitive page
            transitions that eliminate the feeling of separation between
            destinations.
          </ImageWithText>
          <ImageWithText src={portfolioDev} caption="Fuel blaster" flipped>
            Each project page is created using an organized yet flexible
            template component. Blocks of content can be created as modules of
            the page, and the template compoenents automatically apply the
            appropriate styling.
          </ImageWithText>
        </ArticleSection>
        <ArticleSection style={{ display: "flex", justifyContent: "center" }}>
          <IconLink
            src={galleryIcon}
            href="https://photos.app.goo.gl/3c6U1b9Eg7QZYMPd9"
          >
            SEE GALLERY
          </IconLink>
        </ArticleSection>
      </Article>
    </View>
  );
};

export default Portfolio;
