export const workProjects = [
  {
    id: "inflatacart",
    title: "InflataCart",
    subtitle: "An iOS app that ties inflation data with groceries",
    blurb:
      "InflataCart translates economic data into personal insights, showing how inflation affects your grocery shopping. The app tracks price changes of everyday items, giving you a clear view of economic impacts on your wallet and helping you make smarter shopping decisions.",
    year: "2025",
    description: [
      "InflataCart is a mobile application that visualizes how inflation impacts everyday grocery items, making economic data personally relevant to users. Within the first month, the app was downloaded over 2,000 times and received national attention.",
      "The app connects Bureau of Labor Statistics data with a user-friendly interface, allowing shoppers to scan items and see price trends over time. This project emerged from a desire to make macroeconomic concepts tangible for average consumers.",
      "This app is a culmination of learning Swift to build native iOS applications, integrating data analysis with user interface design, and creating a product that resonates with a broad audience.",
    ],
    challenge: [
      "Economic data is often presented in abstract, difficult-to-understand formats that don't connect with everyday experiences.",
      "I wanted to create an interface that would translate complex inflation metrics into meaningful insights for grocery shoppers without requiring economic literacy.",
      "Additionally, the app needed to work with limited and sometimes inconsistent government data sources while still providing accurate, useful information.",
    ],
    solution: [
      "I developed a streamlined scanning interface that instantly shows users how specific product categories have changed in price over time, with interactive visualizations that contextualize current prices against historical trends.",
      "The app personalizes information by allowing users to build shopping lists and track inflation's impact on their specific purchasing habits, creating a tailored economic dashboard. I implemented a simplified educational component that explains inflation concepts in plain language, helping users better understand broader economic forces through the lens of their own shopping experiences.",
    ],
    images: [
      {
        src: "/images/work/inflatacart_3screens.webp",
        alt: "InflataCart app screens showing grocery price with January 2025 inflation data",
        type: "thumbnail", // Used in the Work grid view
      },
      {
        src: "/images/work/inflatacart_4screens.webp",
        alt: "InflataCart hero image showing app interface in context",
        type: "hero", // Used as hero image in detail view
      },
      {
        src: "/images/work/inflatacart_8screens.webp",
        alt: "Many different grocery items with their inflation data, including coffee, rice, milk, flour, chicken, yogurt, and bacon",
        type: "gallery", // First gallery image (side by side)
      },
      {
        src: "/images/work/inflatacart_logo.webp",
        alt: "InflataCart store selection interface",
        type: "gallery", // Second gallery image (side by side)
      },
      {
        src: "/images/work/inflatacart_xcode.webp",
        alt: "InflataCart was built using Xcode and Swift and this is a screenshot of the development environment",
        type: "gallery", // Third gallery image (full width)
      },
    ],
    roles: [
      "Product design",
      "Logo design",
      "Native iOS development (Swift)",
      "Data Analysis (Python)",
      "App Store deployment",
    ],
    url: "https://apps.apple.com/us/app/inflatacart/id6740125695?platform=iphone",
    linkText: "Download on App Store",
  },
  {
    id: "alpine-mode",
    title: "Alpine Mode",
    subtitle: "Mountaineering and Alpine Climbing App",
    blurb:
      "Alpine Mode is the first app made specifically for mountaineering and alpine climbing with precision metrics that cater to performance in the mountains.",
    year: "2025",
    description: [
      "Made for alpine terrain by mountaineer, alpinist, and rock climber Wesley Grubbs, this app seeks to fill the gaps in performance and feedback metrics while you make your approach to base camp, climb the coveted knife ridge, start your descent, or if you're training in the hills. The metrics provided in Alpine Mode are specific to mountaineering, mountain biking, backcountry skiing, or more advanced hiking.",
      "This app is currently in development and actively being tested. If you would like to be a beta tester, please reach out to me directly.",
    ],
    challenge: [
      "For mountaineers, alpinists, and climbers, there are no apps that cater to the specific needs of alpine terrain and this also applies to mountain biking, backcountry skiing, trail running, and advanced hiking. The current apps on the market measure general metrics, like distance, time, bpm, and current elevation. And having simply elevation gain or loss isn't enough. And no apps have critical decent metrics. 80% of all accidents happen on the descent, often due to poor decision making.",
      "In the mountains, elevation is a critical metric. Not just what is your current elevation, but how are you moving in the vertical world.",
    ],
    solution: [
      "Alpine Mode seeks to fill this need by measuring elevation-focused metrics, such as progress by elevation gained or loss in relation to a target elevation, vertical speed (how quickly and efficiently you move through elevation), and other key metrics. As you climb, the focus is on gain. As you decent, on loss.",
      "Having these metrics on your watch and/or phone will give you better insights, making your alpine adventure go more smoothly and safer. As an Apple Watch and iPhone app, your activity becomes part of your workout with Apple's WorkoutKit.",
      "A beta version of Alpine Mode is set to release in the first half of 2025. Ultimately, people will have the ability to share their routes, and important metrics with other climbers and guides to help find compatible partners (i.e. people who move at a similar speed).",
    ],
    images: [
      {
        src: "/images/work/alpinemode_cover.webp",
        alt: "Alpine Mode mountaineering app for Apple Watch and iPhone",
        type: "thumbnail", // Used in the Work grid view
      },
      {
        src: "/images/work/alpinemode_cover.webp",
        alt: "Alpine Mode mountaineering app logo",
        type: "hero", // Used as hero image in detail view
      },
      {
        src: "/images/work/alpinemode_testscreens.webp",
        alt: "Alpine Mode test screens",
        type: "gallery", // First gallery image (side by side)
      },
      {
        src: "/images/work/alpinemode_onwatch.webp",
        alt: "Wesley Grubbs testing Alpine Mode on Apple Watch",
        type: "gallery", // Second gallery image (side by side)
      },
      {
        src: "/images/work/alpinemode_xcode.webp",
        alt: "Alpine Mode was built using Xcode and Swift and this is a screenshot of the development environment",
        type: "gallery", // Third gallery image (full width)
      },
    ],
    roles: [
      "Vision and Creative Direction",
      "Product Design",
      "UI/UX design",
      "iOS and WatchOS development (Swift)",
      "Project Testing",
    ],
    url: "https://www.alpine-mode.com",
    linkText: "Visit Website",
  },
  {
    id: "undp-hdi",
    title: "UNDP Human Development Index",
    subtitle: "Interactive Data Visualization Platform",
    blurb:
      "Human development data is essential for understanding global progress, but traditional data presentations often fail to reveal the complex relationships between different development indicators in an accessible way.",
    year: "2022",
    description: [
      "Human development data is essential for understanding global progress, but traditional data presentations often fail to reveal the complex relationships between different development indicators in an accessible way. The United Nations Development Programme (UNDP) approached my studio Pitch to reimagine how their Human Development Index (HDI) data could be visualized to make complex relationships more understandable and insights more accessible to a wide range of users, from policy makers to the general public.",
      "The HDI platform covers 191 countries with some data dating back to 1990, encompassing multiple development indicators. Our collaboration with UNDP resulted in a comprehensive redesign of their visualization approach that better connects and contextualizes the various indices, making the data more compelling and digestible for all users.",
    ],
    challenge: [
      "The Human Development Index encompasses over five different indicator categories, each with its own complexities and relationships to overall human development scores.",
      "Users needed to understand not just individual country performances, but how specific indicators contribute to overall HDI calculations and rankings.",
      "The platform needed to serve diverse audiences from policy experts to students, requiring visualizations that were both sophisticated and intuitive.",
    ],
    solution: [
      "We designed and built custom interactive graphs tailored to the specific characteristics of each index category, enabling more meaningful data exploration and comparison.",
      "Our visualizations collectively showcase how each index score is calculated, how components break down, and how individual metrics impact a country's overall HDI score, all in one integrated platform.",
      "The redesigned platform enables users to explore connections between different development indicators, revealing patterns and insights that were previously difficult to discern.",
      "Interactive elements allow users to compare countries, track progress over time, and understand the multidimensional nature of human development in a more engaging way.",
    ],
    images: [
      {
        src: "/images/work/undp_hdi_thumb.webp",
        alt: "UNDP Human Development Index overview",
        type: "thumbnail", // Used in the Work grid view
      },
      {
        src: "/images/work/undp_hdi_hero.webp",
        alt: "UNDP Human Development Index main visualization",
        type: "hero", // Used as hero image in detail view
      },
      {
        src: "/images/work/undp_hdi_us-top.webp",
        alt: "UNDP Human Development Index trends in the United States",
        type: "gallery", // First gallery image (side by side)
      },
      {
        src: "/images/work/undp_hdi_planetary.webp",
        alt: "UNDP Human Development Index planetary pressures-adjusted",
        type: "gallery", // Second gallery image (side by side)
      },
      {
        src: "/images/work/undp_hdi_inequality-adjusted.webp",
        alt: "UNDP Human Development Index inequality adjusted HDI",
        type: "gallery", // Third gallery image (full width)
      },
    ],
    roles: [
      "Project Leadership",
      "Creative Direction",
      "Data Visualization Design",
      "UX/UI Design",
      "Data Analysis",
    ],
    url: "https://hdr.undp.org/data-center/human-development-index#/indicies/HDI",
    linkText: "View Data Platform",
  },
  {
    id: "ebay-qsx",
    title: "eBay QuickStrike (QSX)",
    subtitle: "Financial Analytics Dashboard",
    blurb:
      "Business analytics is crucial for large corporations, but let's face it, a lot of the analytics tools out there are uninspiring, cumbersome and difficult to understand for people outside the analytics team.",
    year: "2017-2022",
    description: [
      "Business analytics is crucial for large corporations, but let's face it, a lot of the analytics tools out there are uninspiring, cumbersome and difficult to understand for people outside the analytics team. eBay approached my team at Pitch to build custom visualizations geared for company-wide viewing, from the executive level to entry level, to help people better understand financial trends, forecasts, cross-border transactions, device usage, traffic funnel metrics, real-time global trends and more. All in all, the visuals help employees clearly see and gather insights about the health of the business.",
      "eBay QuickStrike (QSX) is an internal analytics platform that transformed how eBay's global teams accessed and interpreted complex business data. We designed and built interactive dashboards that visualized everything from cross-border transactions to device usage patterns across eBay's vast marketplace ecosystem.",
    ],
    challenge: [
      "eBay's teams were dealing with siloed data sources and inconsistent reporting tools, making it difficult to extract actionable insights from the company's vast data resources.",
      "Decision-makers needed a unified, intuitive way to understand complex relationships in marketplace data without requiring specialized technical skills.",
      "The platform needed to serve diverse stakeholders from executives to analysts while maintaining consistency and accuracy across all visualizations.",
    ],
    solution: [
      "We created a customizable dashboard system with interactive, real-time visualizations that allowed users to explore data relationships through multiple dimensions. We created dozens of unique visualizations that could be combined and customized to answer specific business questions.",
      "The platform featured innovative data mapping techniques, including Sankey diagrams for flow analysis and hierarchy visualizations that made complex relationships immediately understandable.",
      "We implemented a modular architecture that allowed teams to create custom views for specific business questions while maintaining consistent data governance and visual language across the organization.",
      "This is an internally used tool and not available to the public.",
    ],
    images: [
      {
        src: "/images/work/ebay_qsx_sankey.webp",
        alt: "eBay QuickStrike dashboard showing Sankey diagram visualization",
        type: "thumbnail", // Used in the Work grid view
      },
      {
        src: "/images/work/ebay_qsx_james.webp",
        alt: "eBay QuickStrike in use",
        type: "hero", // Used as hero image in detail view
      },
      {
        src: "/images/work/ebay_qsx_customerdata.webp",
        alt: "eBay QuickStrike customer data",
        type: "gallery", // First gallery image (side by side)
      },
      {
        src: "/images/work/ebay_qsx_anomalies.webp",
        alt: "eBay QuickStrike anomaly detection visualization",
        type: "gallery", // Second gallery image (side by side)
      },
      {
        src: "/images/work/ebay_qsx_homecolors.webp",
        alt: "eBay QuickStrike comprehensive dashboard view",
        type: "gallery", // Third gallery image (full width)
      },
    ],
    roles: [
      "Vision and team leadership",
      "Creative Direction",
      "Data Visualization design",
      "UI/UX design",
      "Project Management",
    ],
    url: "https://www.pitchinteractive.com/work/ebayanalytics/",
    linkText: "See Case Study",
  },
  {
    id: "census-mapper",
    title: "Census Mapper",
    subtitle: "Interactive Census Data Visualization Tool",
    blurb:
      "An embeddable interactive map that makes Census data accessible and meaningful to the public, journalists, and policymakers, part of a collaborative effort to democratize access to crucial demographic information.",
    year: "2021",
    description: [
      "The Census Mapper was developed in collaboration with Census 2020 Data Co-op (supported by the Google News Initiative) as an embeddable map displaying Census data across multiple geographic levels - from national to census tract. The tool visualizes demographic shifts from the 2010 to 2020 Census in an accessible, intuitive format.",
      "This project represents a new level of collaboration in data journalism. Rather than each news organization separately processing and visualizing census data, the Census 2020 Data Co-op created shared tools and training to help journalists quickly find and tell Census stories that matter to their communities.",
      "The Census Mapper pulls data collected and processed by The Associated Press, one of the Census Co-op partners, making it easy for users to find demographic information for communities, states, and the nation, and compare it with the 2010 decennial Census.",
    ],
    challenge: [
      "Census data is extensive and complex, covering multiple demographic dimensions across various geographic levels, making it difficult for journalists and the public to quickly extract meaningful insights.",
      "Data journalists traditionally spend significant time processing raw Census data before they can begin finding stories, creating a barrier to timely reporting on important demographic trends.",
      "Creating visualizations that work across geographic scales (national, state, county, census tract) while maintaining performance and usability presented significant technical challenges.",
    ],
    solution: [
      "The project delivered an interactive map tool that allows users to explore population and demographic shifts at multiple geographic levels, with an intuitive interface that highlights key changes between 2010 and 2020.",
      "The tool was built to be embeddable, allowing news organizations to integrate it directly into their own reporting and digital platforms, extending its reach and impact.",
      "Accessibility was a key focus throughout development, with careful attention to color selection based on accessibility guidelines to ensure the visualizations could be interpreted by users with various types of color vision deficiencies.",
      "This shared resource for the journalism community helped democratize access to Census data, enabling smaller news organizations without dedicated data teams to provide high-quality Census visualizations to their audiences.",
    ],
    images: [
      {
        src: "/images/work/census_mapper_thumb.webp",
        alt: "Census Mapper showing population changes across the United States",
        type: "thumbnail",
      },
      {
        src: "/images/work/census_mapper_hero.webp",
        alt: "Census Mapper interactive visualization showing demographic shifts across the United States",
        type: "hero",
      },
      {
        src: "/images/work/census_mapper_arrows.webp",
        alt: "Care was taken into the design, where we explored many options, like this for teh arrows.",
        type: "gallery",
      },
      {
        src: "/images/work/census_mapper_data.webp",
        alt: "The dataset used in the Census Mapper is extensive and covers multiple demographic dimensions",
        type: "gallery",
      },
      {
        src: "/images/work/census_mapper_whitepop.webp",
        alt: "Clear insights can be gained from the Census Mapper by filtering by race, such as this where the white population has declined nationally by 2.6%",
        type: "gallery",
      },
    ],
    roles: [
      "Project Vision",
      "Creative Direction",
      "Data Visualization Design",
      "Data Analysis",
      "Interactive Mapping",
    ],
    url: "https://censusmapper.biglocalnews.org",
    linkText: "View Census Mapper",
  },
];

// For backward compatibility
workProjects.forEach((project) => {
  // If no thumbnail image is defined, use the first image
  if (!project.image && project.images) {
    const thumbnailImage = project.images.find(
      (img) => img.type === "thumbnail"
    );
    if (thumbnailImage) {
      project.image = thumbnailImage.src;
    } else if (project.images.length > 0) {
      project.image = project.images[0].src;
    }
  }
});

export default workProjects;
