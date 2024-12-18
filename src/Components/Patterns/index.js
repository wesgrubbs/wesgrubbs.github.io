import { useState, useEffect } from "react";
import PatternOne from "./PatternOne";
import PatternTwo from "./PatternTwo";
import PatternThree from "./PatternThree";
import PatternFour from "./PatternFour";

const patterns = [PatternOne, PatternTwo, PatternThree, PatternFour];

export const getPatternForHour = () => {
  const hour = new Date().getHours();
  const patternIndex = Math.floor((hour / 24) * patterns.length);
  return patterns[patternIndex];
};

export function TimeBasedPattern() {
  const [Pattern, setPattern] = useState(() => getPatternForHour());

  useEffect(() => {
    const updatePattern = () => {
      setPattern(getPatternForHour());
    };

    const interval = setInterval(updatePattern, 60000);

    return () => clearInterval(interval);
  }, []);

  return <Pattern />;
}
