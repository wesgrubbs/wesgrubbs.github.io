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
  },
  {
    id: "ebay-qsx",
    title: "eBay QuickStrike (QSX)",
    subtitle: "Financial Analytics Dashboard",
    blurb:
      "Business analytics is crucial for large corporations, but let’s face it, a lot of the analytics tools out there are uninspiring, cumbersome and difficult to understand for people outside the analytics team.",
    year: "2017-2022",
    description: [
      "Business analytics is crucial for large corporations, but let’s face it, a lot of the analytics tools out there are uninspiring, cumbersome and difficult to understand for people outside the analytics team. eBay approached my team at Pitch to build custom visualizations geared for company-wide viewing, from the executive level to entry level, to help people better understand financial trends, forecasts, cross-border transactions, device usage, traffic funnel metrics, real-time global trends and more. All in all, the visuals help employees clearly see and gather insights about the health of the business.",
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
  },

  {
    id: "alpine-mode",
    title: "Alpine Mode",
    subtitle: "Mountaineering and Alpine Climbing App",
    blurb:
      "Alpine Mode is the first app made specifically for mountaineering and alpine climbing with precision metrics that cater to performance in the mountains.",
    year: "2025",
    description: [
      "Made for alpine terrain by mountaineer, alpinist, and rock climber Wesley Grubbs, this app seeks to fill the gaps in performance and feedback metrics while you make your approach to base camp, climb the coveted knife ridge, start your descent, or if you’re training in the hills. The metrics provided in Alpine Mode are specific to mountaineering, mountain biking, backcountry skiing, or more advanced hiking.",
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
