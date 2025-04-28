import React from "react";
import styled from "styled-components";

let Container = styled.div`
  /* background-color: #222831; */
  /* border-top: solid 4px #eeeeee;
  color: #eeeeee; */
  padding: 2rem;
  height: auto;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;
const Bio = () => {
  return (
    <Container>
      <h2 style={{ marginBottom: "1rem" }}>Hi, I’m Jovany</h2>
      <p>
        I’m a web developer specializing in building full-stack applications
        using the <strong>MERN stack</strong> (MongoDB, Express.js, React,
        Node.js).
      </p>
      <p>
        I love turning complex problems into intuitive, user-friendly digital
        experiences. Whether it’s crafting a seamless front-end or developing
        scalable back-end APIs, I enjoy working across the stack to bring ideas
        to life.
      </p>
      <p>
        On this site, you’ll find a collection of my projects — from single-page
        applications to full-scale web platforms — all built with modern
        JavaScript technologies.
      </p>
      <p>
        I’m always learning, always building, and always open to collaboration.{" "}
        <br />
        <strong>Let’s connect and build something awesome together.</strong>
      </p>
    </Container>
  );
};

export default Bio;
