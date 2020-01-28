import BoschHolo from "./BoschHolo";
import FRC from "./FRC";

import holoRender from "../assets/holo-render.jpg";
import kaizenArm from "../assets/kaizen-arm.jpg";
import portfolio from "../assets/portfolio.jpg";
import issueTracker from "../assets/issue-tracker.jpg";
import youtube from "../assets/youtube.jpg";
import upNext from "../assets/up-next.jpg";
import dayCounter from "../assets/day-counter.jpg";
import Portfolio from "./Portfolio";

export default [
  {
    title: "Bosch Holo",
    route: "/bosch",
    image: holoRender,
    component: BoschHolo,
    span: 2
  },
  {
    title: "South Lyon Robotics",
    route: "/slr",
    component: FRC,
    image: kaizenArm
  },
  {
    title: "Portfolio Website",
    route: "/portfolio",
    component: Portfolio,
    image: portfolio
  },
  { title: "Coming Soon", image: issueTracker, span: 2 },
  { title: "Coming Soon", image: youtube },
  { title: "Coming Soon", image: upNext },
  { title: "Coming Soon", image: dayCounter }
];
