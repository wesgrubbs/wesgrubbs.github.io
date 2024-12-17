import React, { useEffect, useState } from "react";
import PatternOne from "./PatternOne";

import "./styles.scss";

const Body = () => {
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll(".blink-link");

    links.forEach((link) => {
      if (isToggled) {
        link.style.color = "#e14414";
      } else {
        link.style.color = "";
      }
    });
  }, [isToggled]);

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  };

  // Reusable link creation function
  const createLink = (text, url) => (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="blink-link"
    >
      {text}
    </a>
  );

  return (
    <div className="Body">
      <section className="text-section">
        <h1>
          Wesley Grubbs is a multidisciplinary creative technologist passionate
          about data-driven, meaningful experiences.
        </h1>
        <p>
          Based in Oakland, California, Wesley is the founder and Chief Creative
          Technologist of{" "}
          {createLink("Pitch Interactive", "https://www.pitchinteractive.com")},
          a studio renowned for crafting innovative data visualizations since
          2006. With a Bachelor's in International Economics and a Master's in
          Information Systems and over 23 years of professional experience,
          Wesley has collaborated with leading organizations such as{" "}
          {createLink(
            "Google",
            "https://www.pitchinteractive.com/work/googledebates/"
          )}
          ,{" "}
          {createLink(
            "Scientific American",
            "https://www.scientificamerican.com/article/global-warming-is-not-part-of-natural-climate-variability/"
          )}
          ,{" "}
          {createLink(
            "The Asian American Foundation",
            "https://decodinghate.taaf.org/"
          )}
          , {createLink("SPLC", "https://www.splcenter.org/flyering-map")},{" "}
          {createLink("eBay", "https://www.wesleygrubbs.com/ebayqx")},{" "}
          {createLink(
            "GE",
            "https://www.pitchinteractive.com/work/norfolksouthernpulse/"
          )}
          ,{" "}
          {createLink(
            "ESPN",
            "https://www.pitchinteractive.com/work/espnwords/"
          )}
          , and {createLink("UNDP", "https://horizons.hdr.undp.org/")}. His work
          spans diverse fields including{" "}
          {createLink(
            "economics",
            "https://www.bu.edu/gdp/sovereign-debt-environment-profiles-database/"
          )}
          ,{" "}
          {createLink(
            "technology",
            "https://www.pitchinteractive.com/work/insightswall/"
          )}
          ,{" "}
          {createLink(
            "politics",
            "https://www.pitchinteractive.com/work/brazilelections2022/"
          )}
          ,{" "}
          {createLink(
            "science",
            "https://www.pitchinteractive.com/work/sciamcarboncapture/"
          )}
          ,{" "}
          {createLink(
            "education",
            "https://www.bostonpublicschools.org/cms/lib/MA01906464/Centricity/domain/184/budgetvisualization/index.html#/"
          )}
          ,{" "}
          {createLink(
            "entertainment",
            "https://www.pitchinteractive.com/work/sharkbump/"
          )}
          , {createLink("art", "https://www.moma.org/artists/39757")}, and{" "}
          {createLink(
            "social justice",
            "https://worldjusticeproject.org/rule-of-law-index/"
          )}
          , all unified by a commitment to visual storytelling and
          human-centered design.
        </p>
        <p>
          An ambidextrous creative technologist, Wesley bridges design and code,
          crafting data visualizations and UI/UX systems to{" "}
          {createLink(
            "brand identities",
            "https://www.pitchinteractive.com/work/mozillaid/"
          )}{" "}
          and {createLink("iOS applications", "https://countmode.app")}. Skilled
          in technologies including Swift, React, Node, Python, etc., he tailors
          his process for each project, leveraging over two decades of
          expertise. Beyond work, Wesley is a passionate father, rock climber,
          mountaineer, and alpinist, driven by a deep respect for the
          environment, equality, and human dignity.
          <br />{" "}
          <button onClick={handleToggle}>
            {isToggled ? "Hide Links" : "Show Links"}
          </button>
        </p>
      </section>
      <PatternOne />
    </div>
  );
};

export default Body;
