import React from "react";
import styled from "styled-components";

import View from "../components/View/View";
import Article from "../components/Article/Article";
import ArticleSection from "../components/Article/ArticleSection";
import ImageWithCaption from "../components/ImageWithCaption/ImageWithCaption";
import ImageWithText from "../components/ImageWithText/ImageWithText";
import Typography from "../components/Typography/Typography";
import IconLink from "../components/IconLink/IconLink";

import holoRender from "../assets/holo-render.jpg";
import holoCad from "../assets/holo-cad.jpg";
import galleryIcon from '../assets/gallery-icon.svg'

const BoschHolo = props => {
  return (
    <View onBack={() => undefined}>
      <Article>
        <ArticleSection>
          <Typography variant="h1">Bosch Holo Robot</Typography>
          <Typography variant="p" style={{ textAlign: "justify" }}>
            In 2016 Robert Bosch LLC approached several robotics teams in the
            area with the task of creating a robotic drivebase capable of
            carrying up to 200 lbs. The robot would be used as part of a demo
            planned to show at the Detroit International Auto Show. A week was
            given to all teams to create a design proposal. The winning team
            would be awarded $2000 to create the final product. <br />
            <br />
            As the lead engineer of the project, I designed the robot and
            created a proposal within 5 days. Impressed with the proposal, Bosch
            promptly awarded our team the project. After completing the design
            and drawings, we quickly went to work fabricating and programming
            the robot. After a week and a half of work, the project was finished
            and delivered. It went on to premier at several events, including
            CES at Las Vegas.
          </Typography>
          <ImageWithCaption src={holoRender} caption="CAD Render" />
        </ArticleSection>
        <ArticleSection>
          <ImageWithText src={holoCad} caption="3D CAD Drawing">
            A holonomic robot is a robot which has the ability to move in any
            direction without changing its orientation. This is made possible by
            combining force vectors from the 4 independent roller-wheels located
            on the corners of the robot.
          </ImageWithText>
          <ImageWithText src={holoCad} caption="3D CAD Drawing" flipped>
            The robot was fully drawn and designed with the industry standard
            the Dassault Systèmes SOLIDWORKS CAD package. After completion,
            drawings and CNC G Codes were generated for fabrication.
          </ImageWithText>
          <ImageWithText src={holoCad} caption="3D CAD Drawing" flipped>
            In order to ensure the structural integrity of the superstrucure,
            the aluminum frame was tested using FEA (Finite Element Analysis).
            Although designed to hold up to 200 lbs, the frame turned out to
            have a safety factor of over 40!
          </ImageWithText>
          <ImageWithText src={holoCad} caption="3D CAD Drawing">
            A holonomic robot is a robot which has the ability to move in any
            direction without changing its orientation. This is made possible by
            combining force vectors from the 4 independent roller-wheels located
            on the corners of the robot.
          </ImageWithText>
        </ArticleSection>
        <ArticleSection style={{ display: "flex", justifyContent: "center" }}>
          <IconLink src={galleryIcon} href="google.com">See Gallery</IconLink>
        </ArticleSection>
      </Article>
    </View>
  );
};

export default BoschHolo;
