import React from "react";
import styled from "styled-components";

let Container = styled.div`
  align-items: center;
  border: solid;
  border-left: none;
  border-right: none;
  border-top: none;
  border-color: #eeeeee;
  border-width: 1px;
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding-left: 10%;
  padding-right: 10%;
  width: 100%;
`;

let MenuItem = styled.div``;

const Navbar = () => {
  return (
    <Container>
      <MenuItem>About Me</MenuItem>
      <MenuItem>Contact</MenuItem>
      <MenuItem>Projects</MenuItem>
      <MenuItem>Resume</MenuItem>
    </Container>
  );
};

export default Navbar;
