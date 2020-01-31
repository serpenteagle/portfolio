import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;
const Message = styled.h1`
  font-family: "Space Grotesk";
  font-weight: 400;
  font-size: 24pt;
  max-width: 750px;
  padding: 50px;
  text-align: left;
`;

const MobilePlaceholder = props => {
  return (
    <Container>
      <Message>
        Mobile optimization in progress..<br /><br />Please visit again on desktop!
      </Message>
    </Container>
  );
};

export default MobilePlaceholder;
