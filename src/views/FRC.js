import React from "react";

import View from "../components/View/View";
import Article from "../components/Article/Article";
import ArticleSection from "../components/Article/ArticleSection";
import ImageWithCaption from "../components/ImageWithCaption/ImageWithCaption";
import ImageWithText from "../components/ImageWithText/ImageWithText";
import Typography from "../components/Typography/Typography";
import IconLink from "../components/IconLink/IconLink";

import frcCollage from "../assets/frc-collage.jpg";
import recycleGearbox from "../assets/recycle-gearbox.jpg";
import strongholdIntake from "../assets/stronghold-intake.jpg";
import ptoGearbox from "../assets/pto-gearbox.jpg";
import fuelBlaster from "../assets/fuel-blaster.jpg";
import gearManipulator from "../assets/gear-manipulator.jpg";
import powerupDrivetrain from "../assets/powerup-drivetrain.jpg";
import powerupElevator from "../assets/powerup-elevator.jpg";

import galleryIcon from "../assets/gallery-icon.svg";

const FRC = props => {
  return (
    <View onBack={props.onBack}>
      <Article style={{ padding: 0 }}>
        <ArticleSection>
          <Typography variant="h1">South Lyon Robotics</Typography>
          <Typography variant="p" style={{ textAlign: "justify" }}>
            The FIRST Robotics Competition (FRC) is a high school level
            competiion where teams from around the world are challenged to build
            human sized robots from scratch within a 6 week deadline. I played
            an important role on the team for 4 years as a design engineer,
            machinist, and strategist.
          </Typography>
          <ImageWithCaption src={frcCollage} caption="Various projects" />
        </ArticleSection>
        <ArticleSection>
          <ImageWithText src={recycleGearbox} caption="Completed gearbox">
            2015 was my first year on the team. My main role was competition
            scouting and strategy for most of the year, but towards the end I
            began to design subsystems on the robot as my skills started to
            improve. My first project was a gearbox used on the elevator system
            on the robot.
          </ImageWithText>
          <ImageWithText src={strongholdIntake} caption="Intake system" flipped>
            In 2016, I designed the intake system of the robot. It is designed
            to grab 10" foam balls off the floor and center them into the robot.
            This is acheived though mechanum roller wheels which create a
            sideways net force vector with the ball.
          </ImageWithText>
          <ImageWithText src={ptoGearbox} caption="2 speed PTO gearbox">
            In 2017 I designed an advanced powertrain system for our robot. Not
            only did this gearbox serve the drivetrain, but it could also shift
            into power takoff mode (PTO) and supply massive energy into the
            climbing mechanism on the robot. In addition, it also features a 2
            speed shifter to allowe for quick acceleration of the robot.
          </ImageWithText>
          <ImageWithText src={fuelBlaster} caption="Fuel blaster" flipped>
            In the same year, I also designed the fuel blaster of the robot.
            This flywheel based ball launcher uses 2 high speed motors and PID
            feedback to rapidly launch large quantities of plastic balls into a
            small funnel 10 feet high.
          </ImageWithText>
          <ImageWithText src={gearManipulator} caption="Gear manipulator">
            Later in the year, I designed the gear manipulator upgrade on the
            robot. This manipulator is able to intake plastic gears off the
            ground and then articulate to deliver them into pegs on the wall.
          </ImageWithText>
          <ImageWithText src={powerupDrivetrain} caption="2018 drivetrain" flipped>
            In 2018 I designed the drivetrain of the robot. The siderails
            featured a belt-in-tube design that allowd for high performance and
            minimal maintainence. The rails could be swapped out quickly for
            rapid servicing. The electronics panel was inverted fot quick access
            underneath.
          </ImageWithText>
          <ImageWithText src={powerupElevator} caption="2018 cube manipulators">
            In the same year I helped design the upper manipulative mechanisms
            of the robot. The claw intake could aquire large plastic cubes and
            then the continuous elevator system would elevate the cube high up.
            The claw would then flip over and deliver the cube onto the goal.
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

export default FRC;
