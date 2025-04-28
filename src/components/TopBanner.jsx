import React from "react";
import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  background-color: #222831;
  color: #f5f5f5;
  display: flex;
  font-family: "Poetsen One", sans-serif;
  font-size: 24px;
  height: 50px;
  justify-content: center;
  letter-spacing: 2px;
`;
const TopBanner = () => {
  return <Container>Jovany Miranda</Container>;
};

export default TopBanner;
