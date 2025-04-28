import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";

let Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  height: auto;
  justify-content: space-between;
  padding: 5px;
`;

let GridItem = styled.div`
  border: solid;
  display: flex;
  flex-direction: column;
  height: 500px;
  justify-content: space-between;
  margin: auto;
  margin-bottom: 50px;
  padding: 5px;
  width: 400px;
`;

const ProjectGrid = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/portfolioSite/dummydata.json") // relative to public/
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json(); //
      })
      .then((data) => setItems(data)) //
      .catch((err) => console.error("Error loading data:", err));
  }, []);
  return (
    <Container>
      {items.map((item) => (
        <GridItem key={item.id}>
          <h2 className="GridTitle">{item.title}</h2>
          <p className="GridDesc">{item.description}</p>
        </GridItem>
      ))}
    </Container>
  );
};

export default ProjectGrid;
