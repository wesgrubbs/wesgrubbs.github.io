import debounce from "lodash.debounce";
import React, { useCallback, useMemo } from "react";
import { useEffect, useRef, useState } from "react";
import Footer from "./Components/Footer";

import Body from "./Components/Body";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Body />
    </div>
  );
}

export default App;
