import debounce from "lodash.debounce";
import React, { useCallback, useMemo } from "react";
import { useEffect, useRef, useState } from "react";

//import Header from "./Components/Header";
import Body from "./Components/Body";
//import Clients from "./Components/Clients";
//import Work from "./Components/Work";
//import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Body />
      <Footer />
    </div>
  );
}

export default App;
