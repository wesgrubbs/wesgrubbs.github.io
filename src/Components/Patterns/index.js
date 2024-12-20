import { useState, useEffect } from "react";
import PatternOne from "./PatternOne";
import PatternTwo from "./PatternTwo";
import PatternThree from "./PatternThree";
import PatternFour from "./PatternFour";
import PatternFive from "./PatternFive";
import PatternSix from "./PatternSix";
import PatternSeven from "./PatternSeven";

//Used for testing new patterns
//const patterns = [PatternSeven];

const patterns = [
  PatternThree,
  PatternOne,
  PatternSeven,
  PatternFive,
  PatternSix,
  PatternTwo,
  PatternFour,
];

export function TimeBasedPattern() {
  // Instead of switching entire components, just track the index
  const [patternIndex, setPatternIndex] = useState(() => {
    const hour = new Date().getHours();
    return Math.floor((hour / 24) * patterns.length);
  });

  useEffect(() => {
    const updatePattern = () => {
      const hour = new Date().getHours();
      const newIndex = Math.floor((hour / 24) * patterns.length);
      setPatternIndex(newIndex);
    };

    const interval = setInterval(updatePattern, 60000);
    return () => clearInterval(interval);
  }, []);

  // Render the selected pattern component
  const SelectedPattern = patterns[patternIndex];
  return <SelectedPattern />;
}
