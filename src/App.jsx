import { useState } from "react";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import TopBanner from "./components/TopBanner";
import Navbar from "./components/Navbar";
import Bio from "./components/Bio";
import styled from "styled-components";
import ProjectGrid from "./components/ProjectGrid";

let Container = styled.div`
  /* background-image: url("https://i.pinimg.com/1200x/60/db/4f/60db4f589691ec49156a99a07ffe895e.jpg");
  background-position: center;
  background-repeat: repeat; */
  background-color: #222831;
  color: #f5f5f5;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      {/* <TopBanner /> */}
      <Navbar />
      <Bio></Bio>
      <ProjectGrid></ProjectGrid>
    </Container>
  );
}

export default App;
