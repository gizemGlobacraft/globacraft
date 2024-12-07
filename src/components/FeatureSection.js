const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="group">
      <div className="gradient-border transform group-hover:scale-105 transition-all duration-300">
        <div className="gradient-border-content p-8">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

const FeatureSection = () => {
  const features = [
    {
      title: "İhtiyacınıza Yönelik Özel Çzümler",
      description:
        "Uzman ekibimiz ile sizin için özel çözümler geliştiriyoruz.",
      icon: "" /* SVG icon */,
    },
    // Add other features...
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          <span className="gradient-text">İnovasyon</span> ile Tanışın
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
