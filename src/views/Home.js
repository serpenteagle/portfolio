import React from "react";
import styled from "styled-components";
import View from "../components/View/View.js";
import Article from "../components/Article/Article.js";
import ArticleSection from "../components/Article/ArticleSection.js";
import Typography from "../components/Typography/Typography.js";
import ProjectGrid from "../components/ProjectGrid/ProjectGrid.js";
import ProjectGridItem from "../components/ProjectGrid/ProjectGridItem.js";

import image from "../assets/holo-render.jpg";

// const calcOffsetFromCenter = element => {
//   const rect = element.getBoundingClientRect();
//   const cx = window.innerWidth / 2;
//   const cy = window.innerHeight / 2;
//   const ex = rect.left + rect.width / 2;
//   const ey = rect.top + rect.height / 2;

//   return [ex - cx, ey - cy];
// };

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(100%) grayscale(25%);
  transition: all 0.5s;
`;

const Home = React.forwardRef((props, ref) => {
  return (
    <View ref={ref} style={props.style}>
      <Article>
        <ArticleSection>
          <Typography variant="h1">Shashank Rajesh</Typography>
          <Typography variant="p" style={{ textAlign: "justify" }}>
            Self taught front-end developer with a background in robotics
            engineering. Having a keen attention to detail and an obsession with
            aesthetics, something something, something something.
          </Typography>
          <ProjectGrid>
            <ProjectGridItem
              onClick={props.onGridItemClick}
              // onClick={e => {
              //   const [ox, oy] = calcOffsetFromCenter(e.target);
              //   props.setContainerTransform([-ox, -oy, 750]);
              // }}
              span="2"
              title="Bosch Holo"
            >
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
  );
});

export default Home;
