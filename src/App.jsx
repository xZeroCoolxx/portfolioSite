import { useState } from "react";

import "./App.css";
import NavScrollExample from "./components/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

  return <NavScrollExample></NavScrollExample>;
}

export default App;
