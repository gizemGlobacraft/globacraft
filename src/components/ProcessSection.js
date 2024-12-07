const ProcessSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Nasıl <span className="text-[#FF5A5F]">Çalışıyoruz?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#2B4EA2] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl text-white hover:bg-[#FF5A5F] transition-colors">
              1
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Analiz</h3>
            <p className="text-gray-300">
              Öncelike ihtiyaçlarınızı analiz ediyoruz
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#2B4EA2] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl text-white hover:bg-[#FF5A5F] transition-colors">
              2
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Planlama</h3>
            <p className="text-gray-300">
              İhtiyaçlarınıza göre detaylı planlama yapıyoruz
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#2B4EA2] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl text-white hover:bg-[#FF5A5F] transition-colors">
              3
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Uygulama</h3>
            <p className="text-gray-300">
              Planlarımız üzerinde anlaşıp uygulamaya başlıyoruz
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#2B4EA2] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl text-white hover:bg-[#FF5A5F] transition-colors">
              4
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Sonlandırma</h3>
            <p className="text-gray-300">
              Tamamlanan projeleri sizinle paylaşarak geri bildirim alıyoruz
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
