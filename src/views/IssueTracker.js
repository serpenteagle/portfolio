import React from "react";

import View from "../components/View/View";
import Article from "../components/Article/Article";
import ArticleSection from "../components/Article/ArticleSection";
import ImageWithCaption from "../components/ImageWithCaption/ImageWithCaption";
import ImageWithText from "../components/ImageWithText/ImageWithText";
import Typography from "../components/Typography/Typography";
import IconLink from "../components/IconLink/IconLink";

import octocat from "../assets/octocat.svg";

const IssueTracker = props => {
  return (
    <View onBack={props.onBack}>
      <Article style={{ padding: 0 }}>
        <ArticleSection>
          <Typography variant="h1">Issue Tracker App</Typography>
          <Typography variant="p" style={{ textAlign: "justify" }}>
            Issue Tracker is an SPA style full stack web app that helps you
            track and manage bugs and issues associated with your various
            projects.
          </Typography>
          <ImageWithCaption src={portfolioDev} caption="Site with dev tools" />
        </ArticleSection>
        <ArticleSection>
          <ImageWithText src={figma} caption="Figma designs">
            To provide a strong foundation for the developemnt of the UI, the
            react-mui component library (based off of Google's Material Design
            standards) was utilized. Themeable and custamizable component
            standards allow for powerfull flexibility.
          </ImageWithText>
          <ImageWithText src={appCode} caption="React code" flipped>
            The design is implemented in the frontend using React. A component
            based architecture makes it easy to create reusable, composable
            components that can be used throughout the application. In addition,
            styled-components allows for advanced logic based styling as well as
            seamless whole-app themeing.
          </ImageWithText>
          <ImageWithText src={addressBar} caption="Address bar">
            react-router is used to control the routing of the site. With its
            capabilities, I was able to create seamless and intuitive page
            transitions that eliminate the feeling of separation between
            destinations.
          </ImageWithText>
          <ImageWithText
            src={figmaComponent}
            caption="Templating architecture"
            flipped
          >
            Each project page is created using an organized yet flexible
            template component. Blocks of content can be created as modules of
            the page, and the template compoenents automatically apply the
            appropriate styling.
          </ImageWithText>
        </ArticleSection>
        <ArticleSection style={{ display: "flex", justifyContent: "center" }}>
          <IconLink
            src={octocat}
            href="https://www.github.com/serpenteagle/portfolio"
          >
            SOURCE CODE
          </IconLink>
        </ArticleSection>
      </Article>
    </View>
  );
};

export default IssueTracker;
