import React from "react";
import useSticky from "./hooks/useSticky.js";
import Welcome from "./Components/Welcome";
import Navbar1 from "./Components/Navbar1";
import { FooterContainer } from "./containers/Footer";



function App() {
  const { isSticky, element } = useSticky();
  return (
    <>
      <Navbar1 sticky={isSticky} />

      <Welcome element={element} />
      <FooterContainer element={element} />
    </>
  );
}

export default App;
