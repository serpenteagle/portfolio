import React from "react";
import ReactDOM from "react-dom";
import styleInject from "style-inject";
import ReactBreakpoints from "react-breakpoints";

import App from "./App.js";
import SandboxApp from "./SandboxApp.js";

// Inject font styles into <head></head>
styleInject(`
  @font-face {
    font-family: 'Space Grotesk';
    src: url(${
      require("./assets/fonts/SpaceGrotesk-Regular.woff").default
    }) format('woff');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Space Grotesk';
    src: url(${
      require("./assets/fonts/SpaceGrotesk-Medium.woff").default
    }) format('woff');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Space Grotesk';
    src: url(${
      require("./assets/fonts/SpaceGrotesk-SemiBold.woff").default
    }) format('woff');
    font-weight: 600;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  #root {
  }
`);

const breakpoints = {
  mobile: 300,
  desktop: 800
};

// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(
  <ReactBreakpoints breakpoints={breakpoints}>
    <SandboxApp />
  </ReactBreakpoints>,
  document.getElementById("root")
);
