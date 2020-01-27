import BoschHolo from "./BoschHolo";

import holoRender from "../assets/holo-render.jpg";
import kaizenArm from "../assets/kaizen-arm.jpg";
import portfolio from "../assets/portfolio.jpg";
import issueTracker from "../assets/issue-tracker.jpg";
import youtube from "../assets/youtube.jpg";
import upNext from "../assets/up-next.jpg";
import dayCounter from "../assets/day-counter.jpg";

export default [
  {
    title: "Bosch Holo",
    route: "/test",
    image: holoRender,
    component: BoschHolo,
    span: 2
  },
  { title: "Coming Soon", image: kaizenArm },
  { title: "Coming Soon", image: portfolio },
  { title: "Coming Soon", image: issueTracker, span: 2 },
  { title: "Coming Soon", image: youtube },
  { title: "Coming Soon", image: upNext },
  { title: "Coming Soon", image: dayCounter }
];
