import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#2B4EA2] to-[#FF5A5F] opacity-90"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          GlobaCraft İle Geleceğe Hazır Mısınız?
        </h2>

        <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
          Dijital dönüşüm yolculuğunuzda yanınızdayız.
        </p>
        <Link to="/iletisim">
          <button className="bg-white text-[#2B4EA2] px-8 py-3 rounded-full font-semibold hover:bg-[#FF5A5F] hover:text-white transition-all transform hover:scale-105">
            Hemen Başlayın
          </button>
        </Link>
      </div>

      {/* Dekoratif şekiller */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
    </section>
  );
};

export default CTASection;
