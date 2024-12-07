// components/TestimonialsSection.js
const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Müşterilerimiz <span className="gradient-text">Ne Diyor?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Referans kartları */}
          <div className="p-8 bg-gray-800 rounded-xl">
            <div className="mb-4">⭐️⭐️⭐️⭐️⭐️</div>
            <p className="text-gray-300 mb-6">
              "Harika bir deneyim yaşadık..."
            </p>
            <div className="flex items-center">
              <img
                src="/avatar1.jpg"
                alt="Avatar"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="text-white font-bold">Ahmet Yılmaz</h4>
                <p className="text-gray-400">CEO, Tech Inc</p>
              </div>
            </div>
          </div>
          {/* Diğer referanslar */}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
