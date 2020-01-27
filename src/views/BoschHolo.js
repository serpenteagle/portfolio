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
import holoAssembly from "../assets/holo-assembly.jpg";
import holoFea from "../assets/holo-fea.jpg";
import holoFinal from "../assets/holo-final.jpg";
import holoWiring from "../assets/holo-wiring.jpg";
import omniWheel from "../assets/omni-wheel.jpg";

import galleryIcon from "../assets/gallery-icon.svg";

const BoschHolo = props => {
  return (
    <View onBack={props.onBack}>
      <Article style={{ padding: 0 }}>
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
          <ImageWithCaption src={holoRender} caption="CAD render" />
        </ArticleSection>
        <ArticleSection>
          <ImageWithText src={omniWheel} caption="Omni wheel">
            A holonomic robot is a robot which has the ability to move in any
            direction without changing its orientation. This is made possible by
            combining force vectors from the 4 independent roller-wheels located
            on the corners of the robot.
          </ImageWithText>
          <ImageWithText src={holoCad} caption="3D CAD drawing" flipped>
            The robot was fully drawn and designed with the industry standard
            the Dassault Systèmes SOLIDWORKS CAD package. After completion,
            drawings and CNC G Codes were generated for fabrication.
          </ImageWithText>
          <ImageWithText
            src={holoFea}
            caption="FEA analysis results (exaggerated)"
            flipped
          >
            In order to ensure the structural integrity of the superstrucure,
            the aluminum frame was tested using FEA (Finite Element Analysis).
            Although designed to hold up to 200 lbs, the frame turned out to
            have a safety factor of over 40!
          </ImageWithText>
          <ImageWithText
            src={holoAssembly}
            caption="Assembly of the superstructure"
          >
            With the design finialized, drawings were created and parts were
            fabricated in house using machines like the CNC mill. Riveted
            contruction allowed for quick assembly once the parts were
            manufactured.
          </ImageWithText>
          <ImageWithText src={holoWiring} caption="Wiring and programming">
            Wiring took place immediately after assembly and welding. The
            components and wire lengths were preconfigured in order to
            accelerate the production of the bot. The controller was programmed
            in C# using the .NET framework.
          </ImageWithText>
          <ImageWithText src={holoFinal} caption="Final" flipped>
            The final product was completed in under 2 weeks and delived to
            Bosch with huge success. The project was featured at multiple events
            including the Detroit Auto Show and CES Las Vegas.
          </ImageWithText>
        </ArticleSection>
        <ArticleSection style={{ display: "flex", justifyContent: "center" }}>
          <IconLink
            src={galleryIcon}
            href="https://goo.gl/photos/5EEE6o2sPivvAmh16"
          >
            SEE GALLERY
          </IconLink>
        </ArticleSection>
      </Article>
    </View>
  );
};

export default BoschHolo;
