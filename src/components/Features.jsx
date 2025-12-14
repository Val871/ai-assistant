import React from "react";

const Features = () => {
  const features = [
    {
      title: "Natural Language Understanding",
      description: "Comprehends and processes human language effectively.",
    },
    {
      title: "Data Analysis",
      description: "Analyze and visualize data effectively.",
    },
    {
      title: "Image Generation",
      description: "Craete stunning images from text descriptions.",
    },
    {
      title: "Personalization",
      description: "Adapts responses based on user preferences and history.",
    },
    {
      title: "Integration Capabilities",
      description: "Easily integrates with various platforms and services.",
    },
    {
      title: "Code Assistance",
      description:
        "Helps with coding tasks, debugging, programming and code generation.",
    },
  ];

  return (
    <section id="features" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
          Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-4 md:p-6 bg-gray-300 rounded-lg"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
