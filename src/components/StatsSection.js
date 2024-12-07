const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#2B4EA2] to-[#FF5A5F]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-5xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-200">Mutlu Müşteri</div>
          </div>

          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-5xl font-bold text-white mb-2">10+</div>
            <div className="text-gray-200">Tamamlanan Proje</div>
          </div>

          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-5xl font-bold text-white mb-2">5+</div>
            <div className="text-gray-200">Uzman Ekip</div>
          </div>

          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-5xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-200">Destek</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
