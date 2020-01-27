import React from "react";
import styled from "styled-components";
import View from "../components/View/View.js";
import Article from "../components/Article/Article.js";
import ArticleSection from "../components/Article/ArticleSection.js";
import Typography from "../components/Typography/Typography.js";
import ProjectGrid from "../components/ProjectGrid/ProjectGrid.js";
import ProjectGridItem from "../components/ProjectGrid/ProjectGridItem.js";

import views from "./views";

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(95%) grayscale(25%);
  transition: all 0.5s;
`;

// const gridItems = [
//   { title: "Bosch Holo", route: "/test", image: holoRender, span: 2 },
//   { title: "Bosch Holo", route: "/test", image: holoRender }
// ];

const Home = React.forwardRef((props, ref) => {
  return (
    <View ref={ref} style={props.style}>
      <Article>
        <ArticleSection>
          <Typography variant="h1">Shashank Rajesh</Typography>
          <Typography variant="p" style={{ textAlign: "justify", lineHeight: 1.5, marginTop: 0}}>
            A self-taught Front End & Full Stack Developer with a background in
            Robotics Engineering. Detail oriented and loves to learn and grow.
            With over 4 years of rigorous experience in competitive robotics,
            and having lead multiple teams on numerous projects, I understand
            what it takes to create successful solutions to real world problems.
          </Typography>
          <ProjectGrid>
            {views.map((item, index) => (
              <ProjectGridItem
                onClick={
                  item.component
                    ? e => props.onGridItemClick(e, item.route)
                    : undefined
                }
                title={item.title || "Untitled"}
                span={item.span}
                key={index}
              >
                <ProjectImage src={item.image} />
              </ProjectGridItem>
            ))}

            {/* <ProjectGridItem
              onClick={e => props.onGridItemClick(e, "/test")}
              span="2"
              title="Bosch Holo"
            >
              <ProjectImage src={holoRender} />
            </ProjectGridItem>
            <ProjectGridItem>
              <ProjectImage src={holoRender} />
            </ProjectGridItem>
            <ProjectGridItem>
              <ProjectImage src={holoRender} />
            </ProjectGridItem>
            <ProjectGridItem span="2">
              <ProjectImage src={holoRender} />
            </ProjectGridItem>
            <ProjectGridItem>
              <ProjectImage src={holoRender} />
            </ProjectGridItem>
            <ProjectGridItem>
              <ProjectImage src={holoRender} />
            </ProjectGridItem>
            <ProjectGridItem>
              <ProjectImage src={holoRender} />
            </ProjectGridItem> */}
          </ProjectGrid>
        </ArticleSection>
      </Article>
    </View>
  );
});

export default Home;
