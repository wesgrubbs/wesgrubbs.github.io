import { useState } from "react";
/* eslint-disable react/prop-types */
const ServiceCard = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="p-6 bg-white dark:bg-black-90 rounded-md shadow-sm transition-all duration-300 h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: isHovered
          ? "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
          : "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      }}
    >
      <h3 className="font-meta-serif text-xl mb-2 group-hover:text-primary-red transition-colors duration-300">
        {title}
      </h3>
      <p className="font-meta-sans text-grey-80 dark:text-grey-40">
        {description}
      </p>
    </div>
  );
};

const Services = () => {
  const servicesData = [
    {
      title: "Data Visualization",
      description:
        "Transform complex data into clear, intuitive visual representations that communicate insights effectively and beautifully.",
    },
    {
      title: "iOS Development",
      description:
        "Create native iOS applications with elegant UI and seamless user experiences using Swift and modern iOS frameworks.",
    },
    {
      title: "UI/UX Design",
      description:
        "Design user-centric interfaces and experiences that balance aesthetics with functionality for digital products.",
    },
    {
      title: "Logo Design",
      description:
        "Craft distinctive, memorable logos and brand identities that capture your vision and resonate with your audience.",
    },
    {
      title: "Web Development",
      description:
        "Build modern, responsive web applications using React, Vite, D3, Node.js and other cutting-edge technologies.",
    },
    {
      title: "Data Visualization Strategy",
      description:
        "Develop comprehensive strategies to leverage data visualization as a powerful tool for decision-making and storytelling.",
    },
    {
      title: "Consulting",
      description:
        "Provide expert guidance on data visualization, product design, and technology implementation tailored to your specific needs.",
    },
    {
      title: "Workshops",
      description:
        "Deliver engaging, hands-on workshops that empower teams with practical skills in data visualization and design thinking.",
    },
    {
      title: "Speaking",
      description:
        "Present compelling talks on data visualization, design, and technology for conferences, events, and corporate gatherings.",
    },
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-meta-serif text-3xl mb-8 mx-auto">Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
