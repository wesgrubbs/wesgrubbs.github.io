export const workProjects = [
  {
    id: "stripe-stablecoin-sphere",
    title: "Stripe Stablecoin Sphere",
    subtitle: "Real-Time Visualization Installation for Stripe Sessions",
    blurb:
      "When Stripe wanted to showcase their stablecoin technology at Sessions conference, we transformed a 2-meter LED sphere into a living visualization that responded to real-time transactions and data flows.",
    year: "2025",
    description: [
      "Stripe approached me to create a visual installation for their Sessions conference that would showcase stablecoin technology in a compelling way. Working with Kristin Baumann and Nick Harbaugh, we transformed a blank 2-meter LED sphere into a dynamic showcase that visualized real-time stablecoin data and transactions.",
      "The sphere became the centerpiece of Stripe's stablecoin area, drawing conference attendees with flowing geometric patterns and reactive animations that responded to live data. When someone bought coffee using stablecoin, the sphere immediately reflected that transaction with unique visual effects.",
      "This seven-week project pushed web technologies into physical space in ways I hadn't attempted before. We used React, P5.js, Three.js, and real-time APIs to create something that was both technically ambitious and visually captivating.",
    ],
    challenge: [
      "Web technologies aren't designed for spherical displays. We needed to figure out how to adapt flat-screen visualizations to wrap seamlessly around a curved LED surface without distortion.",
      "We had limited access to the physical sphere during development, making it difficult to test and iterate on our designs.",
      "The project required visualizing complex financial data in a way that would be engaging for conference attendees, regardless of their cryptocurrency knowledge.",
    ],
    solution: [
      "I built a custom Three.js development environment that simulated the sphere, allowing us to prototype and test visualizations remotely. This virtual sphere became essential for rapid iteration.",
      "We developed custom spherical projection techniques using P5.js, creating seamless animations with noise loops and grid-based patterns that wrapped perfectly around the sphere with no visible seams.",
      "For real-time data, we connected to the Allium API for continuous stablecoin transaction data and implemented Stripe webhooks for live coffee purchases, enabling immediate visual responses within milliseconds.",
    ],
    images: [
      {
        src: "/images/work/stripe_sphere_thumb.webp",
        alt: "Stripe Stablecoin Sphere installation at Sessions conference",
        type: "thumbnail",
      },
      {
        src: "/images/work/stripe_sphere_hero.webp",
        alt: "2-meter LED sphere displaying dynamic stablecoin visualizations",
        type: "hero",
      },
      {
        src: "/images/work/stripe_sphere_backstage.webp",
        alt: "Backstage view of the sphere installation setup",
        type: "gallery",
      },
      {
        src: "/images/work/stripe_sphere_conference.webp",
        alt: "Conference attendees interacting with the sphere installation",
        type: "gallery",
      },
      {
        src: "/images/work/stripe_sphere_demo.webp",
        alt: "Behind-the-scenes control center with live feeds and real-time data monitoring",
        type: "gallery",
      },
    ],
    roles: [
      "Lead Creative Technologist",
      "Project Management",
      "Creative and Technical Direction",
      "Architecture Design",
      "Engineering Oversight",
    ],
    url: "",
    linkText: "",
  },
  {
    id: "drought-whiplash",
    title: "Drought Whiplash",
    subtitle: "Visualizing California's Climate Variability and Wildfire Risk",
    blurb:
      "A data visualization for print exploring how California's increasingly volatile weather patterns—extreme wet periods followed by severe droughts—create the perfect conditions for devastating wildfires.",
    year: "2025",
    description: [
      "The devastating fires in California early this year came after a particularly unfortunate weather pattern—an exceptionally wet period of about 18 months, followed by an exceptionally dry spell. The wet duration encouraged grass and brush growth, and then the lack of rain dried it all out, priming it to catch on fire and spread quickly.",
      "This project visualizes the concept of 'wet-to-dry whiplash' using the Palmer Hydrological Drought Index, which measures drought using reservoir and groundwater levels among other factors. Each data point represents the drought level for one month in one region of California, revealing the increasing variability in the state's climate patterns.",
      "Working with climate data allowed me to flex my statistical analysis skills as we analyzed standard deviation models to understand how climate change is leading to wider swings between wet and dry spells—what scientists call the 'expanding atmospheric sponge' effect.",
    ],
    challenge: [
      "Climate data is often presented in abstract formats that fail to connect extreme weather patterns with their real-world consequences like wildfire risk.",
      "The relationship between wet periods, subsequent drought, and fire danger needed to be visualized in a way that made the 'whiplash' effect immediately understandable.",
      "Statistical concepts like standard deviation and climate variability needed to be made accessible to general audiences while maintaining scientific accuracy.",
    ],
    solution: [
      "I created a visualization for print that shows each month's drought index as individual data points, allowing users to see the dramatic swings between wet and dry conditions across California regions.",
      "The visualization incorporates statistical analysis of standard deviation models to highlight how climate variability has increased over time, making the 'expanding atmospheric sponge' effect tangible through data.",
      "By connecting the Palmer Hydrological Drought Index data directly to the wildfire narrative, the project demonstrates how abstract climate metrics translate into concrete environmental risks and human consequences.",
    ],
    images: [
      {
        src: "/images/work/drought_whiplash_thumb.webp",
        alt: "Drought Whiplash visualization showing California's climate variability patterns",
        type: "thumbnail",
      },
      {
        src: "/images/work/drought_whiplash_hero.webp",
        alt: "Interactive Palmer Hydrological Drought Index visualization for California regions",
        type: "hero",
      },
      {
        src: "",
        alt: "Statistical analysis showing increased climate variability and standard deviation patterns",
        type: "gallery",
      },
      {
        src: "",
        alt: "Statistical analysis showing increased climate variability and standard deviation patterns",
        type: "gallery",
      },
      {
        src: "/images/work/drought_whiplash_gallery.webp",
        alt: "Statistical analysis showing increased climate variability and standard deviation patterns",
        type: "gallery",
      },
    ],
    roles: [
      "Data Visualization Design",
      "Statistical Analysis",
      "Climate Data Processing",
      "Interactive Storytelling",
      "Scientific Communication",
    ],
    url: "",
    linkText: "",
  },
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
    id: "sovereign-debt-environment-profiles",
    title: "Sovereign Debt and Environment Profiles Database",
    subtitle:
      "Visualizing the Intersection of Fiscal Constraints and Sustainable Development Opportunities",
    blurb:
      "An interactive data visualization tool that maps the complex relationship between debt pressures, market constraints, and green investment opportunities across 114 emerging markets and developing economies, helping policymakers identify viable pathways for financing sustainable development.",
    year: "2024",
    description: [
      "The Sovereign Debt and Environment Profiles (SDEP) Database was developed for Boston University's Global Development Policy Center to address a critical challenge: the convergence of extreme weather events, financial instability, unsustainable debt levels, and high capital costs that are limiting fiscal space just as a dramatic increase in climate and conservation investments is needed.",
      "This interactive data project tracks debt stress and capital market constraints relative to climate investment needs, conservation opportunities, and green finance potential across 114 emerging market and developing economies.",
      "The tool enables researchers, policymakers, and financial institutions to explore comprehensive country-level data that illuminates the tension between fiscal limitations and the urgent investments required to meet the United Nations 2030 Sustainable Development Goals (SDGs) and Paris Agreement targets.",
    ],
    challenge: [
      "Complex, multidimensional data spanning economic indicators, environmental metrics, and financial variables needed to be presented in an accessible, actionable format for diverse stakeholders.",
      "The relationship between debt sustainability and environmental investment opportunities varies significantly across different economies, requiring nuanced visualization approaches that avoid oversimplification.",
      "Users needed the ability to compare countries, track trends over time, and identify patterns that could inform policy decisions and investment strategies in sustainable development.",
      "The intersection of sovereign debt and climate finance is an emerging field with evolving metrics, requiring a flexible platform that could incorporate new indicators and methodologies as they develop.",
    ],
    solution: [
      "We developed an interactive database that visualizes multiple dimensions of economic and environmental data simultaneously, allowing users to quickly grasp the fiscal challenges and green opportunities specific to each country.",
      "The platform features intuitive comparison tools that enable side-by-side analysis of different economies, helping identify regional patterns and potential collaborative approaches to sustainable finance.",
      "Comprehensive country profiles provide detailed breakdowns of debt structures, climate vulnerabilities, conservation assets, and green finance readiness, creating a holistic picture of each nation's situation.",
      "Data visualization techniques were carefully selected to highlight correlations between fiscal constraints and environmental investment needs, making complex relationships more apparent to non-specialist users.",
      "The database serves as both an analytical tool for researchers and a decision-support system for policymakers seeking to navigate the difficult trade-offs between immediate fiscal pressures and long-term sustainable development goals.",
    ],
    images: [
      {
        src: "/images/work/sdep_thumbnail.webp",
        alt: "Sovereign Debt and Environment Profiles Database dashboard showing multiple countries and their sustainability metrics",
        type: "thumbnail",
      },
      {
        src: "/images/work/sdep_hero.webp",
        alt: "Interactive visualization of debt pressures and green investment opportunities across emerging markets",
        type: "hero",
      },
      {
        src: "/images/work/sdep_gallery1.webp",
        alt: "Side-by-side country comparison feature showing fiscal constraints relative to environmental opportunities",
        type: "gallery",
      },
      {
        src: "/images/work/sdep_gallery2.webp",
        alt: "Detailed breakdown of environmental and financial metrics for a selected country",
        type: "gallery",
      },
      {
        src: "/images/work/sdep_mali.webp",
        alt: "Global map view highlighting regional patterns in debt stress and climate investment needs",
        type: "gallery",
      },
    ],
    roles: [
      "Data Visualization Design",
      "Economic Data Analysis",
      "React Native Development Support",
      "Environmental Finance Mapping",
      "Policy Research",
    ],
    url: "https://www.bu.edu/gdp/sovereign-debt-and-environment-profiles-database/",
    linkText: "View SDEP Database",
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
  {
    id: "decoding-asian-hate",
    title: "Decoding Asian Hate",
    subtitle:
      "Visualizing the Rise in Anti-AAPI Hate Incidents During the COVID-19 Pandemic",
    blurb:
      "An interactive data visualization that exposes the full scope of hate incidents targeting the AAPI community since the start of the pandemic.",
    year: "2022",
    description: [
      "Decoding Asian Hate was developed in partnership with The Asian American Foundation (TAAF) to visualize and contextualize the unprecedented surge in hate incidents targeting the AAPI (Asian American and Pacific Islander) community during the COVID-19 pandemic.",
      "The visualization represents each documented hate incident as an individual fragment, creating a powerful visual flood that conveys the true magnitude of this crisis beyond what makes headlines. Users can explore incidents chronologically from the pandemic's start to present day, with interactive filtering capabilities that reveal patterns across incident types, locations, and contextual factors.",
      "By combining data from news reports and social media, particularly Twitter, this project brings visibility to incidents that might otherwise go unreported or unnoticed, creating a more comprehensive picture of anti-AAPI hate during this critical period.",
    ],
    challenge: [
      "The true scale of anti-AAPI hate incidents was significantly underreported in mainstream media, creating a gap in public awareness about the severity and breadth of the issue.",
      "Many incidents captured in social media never made it to news reports, making it difficult to quantify and understand the full extent of hatred faced by the AAPI community.",
      "Presenting sensitive data about traumatic experiences in a way that was both impactful and respectful required careful consideration of ethical visualization practices.",
      "Creating an interface that could handle thousands of individual data points while remaining accessible and meaningful to users presented significant technical challenges.",
    ],
    solution: [
      "We developed a visualization system that represents each hate incident as a unique fragment, with an impactful animation that floods the screen to convey the overwhelming volume of incidents.",
      "The interface enables users to explore incidents by multiple dimensions including location type (with businesses identified as the most common site), victim gender (when known), and whether the incident was COVID-related.",
      "Color-coding and interactive sorting features allow users to identify patterns and relationships in the data, revealing insights that might not be apparent in traditional statistical reports.",
      "The chronological presentation creates a timeline of hate that helps contextualize how these incidents evolved throughout the pandemic, providing important historical documentation of this period.",
      "This visualization tool serves both as an educational resource for the public and as an advocacy instrument for organizations working to combat anti-AAPI racism and violence.",
    ],
    images: [
      {
        src: "/images/work/taaf_thumbnail.webp",
        alt: "Decoding Asian Hate visualization showing fragments representing individual hate incidents",
        type: "thumbnail",
      },
      {
        src: "/images/work/taaf_hero.webp",
        alt: "Interactive visualization of anti-AAPI hate incidents with color-coded fragments flooding the screen",
        type: "hero",
      },
      {
        src: "/images/work/taaf_twittershards.webp",
        alt: "Chronological timeline view of hate incidents from the start of the pandemic",
        type: "gallery",
      },
      {
        src: "/images/work/taaf_anti-asian-hate.webp",
        alt: "Visualization filtered to show incidents occurring at businesses, which had the highest occurrence rate",
        type: "gallery",
      },
      {
        src: "/images/work/taaf_chart.webp",
        alt: "Comparative view showing COVID-related versus non-COVID-related hate incidents",
        type: "gallery",
      },
    ],
    roles: [
      "Data Visualization Design",
      "Interactive Experience Design",
      "Data Analysis",
      "Narrative Storytelling",
    ],
    url: "https://decodinghate.taaf.org/",
    linkText: "View Decoding Asian Hate",
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
    id: "out-of-sight-out-of-mind",
    title: "Out of Sight, Out of Mind",
    subtitle: "Visualizing the Hidden Human Cost of Drone Warfare in Pakistan",
    blurb:
      "A web-based narrative visualization that documents every known US and Coalition drone strike in Pakistan since 2004, revealing the temporal patterns, geographic distribution, and human toll of an often invisible technological war.",
    year: "2013",
    description: [
      "Out of Sight, Out of Mind was a passion project created to address the inadequacies of traditional reporting on drone warfare, which often fails to convey the scale, patterns, and human impact of these military operations over time.",
      "Using meticulously collected data from the Bureau of Investigative Journalism, this interactive visualization builds itself before the viewer's eyes, with each drone strike generating a dynamic timeline that spans across the screen, creating both an emotional and informational experience.",
      "The project goes beyond mere statistics by allowing viewers to explore the specific details of each attack through interactive elements, while simultaneously revealing the broader patterns of escalation and targeting that emerge from viewing the data as a whole.",
    ],
    challenge: [
      "Drone warfare operates largely outside public consciousness, with limited media coverage and visual documentation, making it difficult for people to comprehend its real-world impact and scope.",
      "Traditional data reporting methods often fail to convey both the individual human tragedies and the cumulative effect of years of drone operations in regions like Pakistan.",
      "The available data on drone strikes contains inherent uncertainties, including ranges of estimated casualties and differing classifications of victims, presenting challenges for accurate and ethical visualization.",
      "Creating an experience that was both emotionally resonant and factually rigorous required balancing narrative techniques with journalistic integrity.",
    ],
    solution: [
      "We developed a time-based visualization that builds itself chronologically, with each attack represented as it occurred, creating a powerful narrative of escalation and persistence that static visualizations cannot achieve.",
      "The interface offers two complementary views: a strike-by-strike timeline showing individual attacks and a 'Victims' tab that aggregates casualties by month, allowing viewers to understand both specific incidents and broader patterns.",
      "Interactive elements enable users to hover or click on specific strikes to reveal detailed information about each attack, including date, location, reported targets, and casualty figures.",
      "The visual language of the project deliberately evokes missile trajectories and impact patterns, creating an aesthetic that reinforces the subject matter while maintaining respectful distance from the actual violence.",
      "By visualizing uncertainty in the data through ranges rather than precise figures, the project acknowledges the contested nature of information in conflict zones while still providing a meaningful representation of scale.",
    ],
    images: [
      {
        src: "/images/work/drones_thumb.webp",
        alt: "Timeline visualization of drone strikes in Pakistan showing patterns of escalation over time",
        type: "thumbnail",
      },
      {
        src: "/images/work/drones_hero.webp",
        alt: "Interactive narrative visualization showing drone strikes as they build up chronologically across the screen",
        type: "hero",
      },
      {
        src: "/images/work/drones_gallery1.webp",
        alt: "Detailed view of the horizontal timeline showing individual drone strikes with interactive elements",
        type: "gallery",
      },
      {
        src: "/images/work/drones_gallery2.webp",
        alt: "The 'Victims' view showing aggregated casualty figures by month and classification",
        type: "gallery",
      },
      {
        src: "/images/work/drones_last.webp",
        alt: "Close-up of an individual strike showing specific details about date, location, targets and casualties",
        type: "gallery",
      },
    ],
    roles: [
      "Data Visualization Design",
      "Narrative Experience Development",
      "Interactive Storytelling",
      "Conflict Data Analysis",
      "Data Journalism",
    ],
    url: "https://drones.pitchinteractive.com",
    linkText: "View Out of Sight, Out of Mind",
  },
  {
    id: "facebook-insights-wall",
    title: "Facebook Insights Wall",
    subtitle: "Multi-Touch Data Visualization Installation",
    blurb:
      "Facebook needed a way to display global insights from their public and customer data in an engaging, interactive format for visitors and employees at their headquarters.",
    year: "2013 - 2018",
    description: [
      "Facebook needed a way to display global insights from their public and customer data in an engaging, interactive format for visitors and employees at their headquarters. They approached my studio Pitch to help create an immersive, large-scale installation that would showcase these insights in a compelling way.",
      "The Facebook Insights Wall is an integrated multi-touch installation consisting of 20 Planar screens (in a 5 x 4 grid) measuring 23' x 9' total. Located at Facebook's headquarters in Menlo Park, California, the wall is accessible to all visitors and employees, offering a unique window into Facebook's global data landscape.",
    ],
    challenge: [
      "Facebook needed to visualize complex global data patterns in a way that would be engaging and informative for both casual visitors and employees.",
      "The installation required seamless integration of multiple touchscreens to function as a cohesive interactive surface.",
      "The solution needed to handle real-time data processing and display from various Facebook public and customer data sources.",
    ],
    solution: [
      "My studio was involved from the project's early conception in 2013, providing comprehensive consulting on hardware selection, technology implementation, and content strategy.",
      "We developed a system for effectively pulling and parsing Facebook's data to create meaningful, interactive visualizations across the large display surface.",
      "The multi-touch capability allows visitors to interact directly with the data, exploring insights and patterns through an intuitive interface.",
      "The installation serves as both an educational tool and a showcase of Facebook's global impact, providing valuable insights to visitors while enhancing the company's headquarters with a striking visual element.",
    ],
    images: [
      {
        src: "/images/work/facebook_insights_thumb.webp",
        alt: "Facebook Insights Wall overview",
        type: "thumbnail", // Used in the Work grid view
      },
      {
        src: "/images/work/facebook_insights_thumb.webp",
        alt: "Facebook Insights Wall full installation",
        type: "hero", // Used as hero image in detail view
      },
      {
        src: "/images/work/facebook_insights_interaction.webp",
        alt: "Visitors interacting with the Facebook Insights Wall",
        type: "gallery", // First gallery image (side by side)
      },
      {
        src: "/images/work/facebook_insights_videos.webp",
        alt: "Detailed view of Facebook Insights Wall visualization",
        type: "gallery", // Second gallery image (side by side)
      },
      {
        src: "/images/work/facebook_insights_wires.webp",
        alt: "Facebook Insights Wall in the context of headquarters",
        type: "gallery", // Third gallery image (full width)
      },
    ],
    roles: [
      "Vision and Strategy",
      "Creative Direction",
      "Data Visualization Design",
      "Data Analysis",
      "Technical Implementation",
    ],
    url: "",
    linkText: "",
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
