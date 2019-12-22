import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import anime from 'animejs';

import backArrow from '../../assets/back-arrow.svg';

// const Container = styled.div`
// opacity: ${({go}) => (go ? '1' : '0')};
// transform: ${({go}) =>
// go ? 'translate3d(0, 0, 0)' : 'translate3d(0, -500px, 300px)'}
// transition: opacity 1s, transform 1s;
// `;

const Container = styled.div`
  opacity: 0;
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
  :hover {
    cursor: pointer;
  }
`;
const Content = styled.div`
  width: 1012px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-family: 'Space Grotesk';
  font-weight: 500;
  font-size: 94px;
  margin-top: 135px;
  margin-bottom: 57px;
`;
const Summary = styled.h2`
  font-family: 'Space Grotesk';
  font-weight: 400;
  font-size: 24px;
  text-align: justify;
`;
const BigPic = styled.img`
  width: 100%;
  object-fit: contain;
  margin-bottom: 44px;
  border-radius: 4px;
`;

const SliceBox = styled.div`
  display: flex;
  align-items: center;
  margin: 145px 0;
`;
const SliceImage = styled.img`
  height: 324px;
  // width: 612px;
  flex-basis: max-content;
  object-fit: cover;
  border-radius: 4px;
`;
const SliceText = styled.p`
  font-family: 'Space Grotesk';
  font-weight: 400;
  font-size: 21px;
`;

const LinksBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 130px;
`;
const LinkContainer = styled.a`
  text-decoration: none;
  color: black;
`;
const LinkText = styled.h3`
  font-family: 'Space Grotesk';
  font-weight: 500;
  font-size: 35px;
`;
const LinkImage = styled.img`
  height: 200px;
`;

const ProjectTemplate = props => {
  const containerRef = useRef(null);

  useEffect(() => {
    let animation = anime({
      targets: containerRef.current,
      duration: 300,
      opacity: [0, 1],
      translateY: [100, 0],
      easing: 'easeInOutQuad',
    });
    animation.pause();
    if (props.go) {
      animation.play();
    } else {
      animation.restart();
      animation.pause();
    }
  }, [props.go]);

  return (
    <Container ref={containerRef} go={props.go}>
      <Border>
        <Content>
          <Back src={backArrow} onClick={props.onBack} />

          <Title>{props.content.title}</Title>
          <BigPic src={props.content.bigPic.src} />
          <Summary>{props.content.summary}</Summary>

          {props.content.slices.map((el, i) => {
            if (i % 2 === 0)
              return (
                <SliceBox key={i}>
                  <SliceText style={{textAlign: 'right', marginRight: '47px'}}>
                    {el.text}
                  </SliceText>
                  <SliceImage src={el.src} />
                </SliceBox>
              );
            else
              return (
                <SliceBox key={i}>
                  <SliceImage src={el.src} />
                  <SliceText style={{textAlign: 'left', marginLeft: '47px'}}>
                    {el.text}
                  </SliceText>
                </SliceBox>
              );
          })}

          <LinksBox>
            {props.content.links.map(el => {
              return (
                <LinkContainer href={el.href} target="_blank" key={el.text}>
                  <LinkText>{el.text}</LinkText>
                  <LinkImage src={el.src} />
                </LinkContainer>
              );
            })}
          </LinksBox>
        </Content>
      </Border>
    </Container>
  );
};

export default ProjectTemplate;
