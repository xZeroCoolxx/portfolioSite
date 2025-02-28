import { useState } from "react";

import "./App.css";
import NavScrollExample from "./components/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import TopBanner from "./components/TopBanner";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TopBanner />
      <NavScrollExample></NavScrollExample>
    </>
  );
}

export default App;
