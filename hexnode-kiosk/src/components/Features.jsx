import React from "react";

const features = [
  {
    title: "Device Lockdown",
    description: "Restrict access to only essential apps and websites.",
  },
  {
    title: "Remote Management",
    description: "Control and monitor devices from a centralized dashboard.",
  },
  {
    title: "Content Filtering",
    description: "Block unwanted websites and ensure safe browsing.",
  },
  {
    title: "Custom Branding",
    description: "Personalize the kiosk experience with your branding.",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Key Features</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {features.map((feature, index) => (
          <div key={index} className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
