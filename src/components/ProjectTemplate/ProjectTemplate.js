import React from 'react';
import styled from 'styled-components';

import backArrow from '../../assets/back-arrow.svg';

const Container = styled.div`
  opacity: ${({go}) => (go ? '1' : '0')};
transform: ${({go}) =>
  go ? 'translate3d(0, 0, 0)' : 'translate3d(0, -500px, 300px)'}
  transition: opacity 1s, transform 1s;
`;
const Border = styled.div`
  boz-sizing: border-box;
  min-height: calc(100vh - 52px);
  border: 16px solid black;
  margin: 26px;
  border-radius: 19px;
  text-align: center;
  position: relative;
`;
const Back = styled.img`
  width: 60px;
  position: absolute;
  top: 60px;
  left: 70px;
`;

const Title = styled.h1``;
const Summary = styled.h2``;
const BigPic = styled.img``;

const SliceBox = styled.div`
  display: flex;
  align-items: center;
`;
const SliceImage = styled.img``;
const SliceText = styled.p``;

const LinksBox = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const LinkContainer = styled.a``;
const LinkText = styled.h3``;
const LinkImage = styled.img``;

const ProjectTemplate = props => {
  return (
    <Container go={props.go}>
      <Border>
        <Back src={backArrow} onClick={props.onBack} />

        <Title>{props.content.title}</Title>
        <Summary>{props.content.summary}</Summary>
        <BigPic src={props.content.bigPic.src} />

        {props.content.slices.map((el, i) => {
          if (i % 2 === 0)
            return (
              <SliceBox key={i}>
                <SliceText>{el.text}</SliceText>
                <SliceImage src={el.src} />
              </SliceBox>
            );
          else
            return (
              <SliceBox key={i}>
                <SliceImage src={el.src} />
                <SliceText>{el.text}</SliceText>
              </SliceBox>
            );
        })}

        <LinksBox>
          {props.content.links.map(el => {
            return (
              <LinkContainer key={el.text}>
                <LinkText>{el.text}</LinkText>
                <LinkImage src={el.src} />
              </LinkContainer>
            );
          })}
        </LinksBox>
      </Border>
    </Container>
  );
};

export default ProjectTemplate;
