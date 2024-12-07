import React from "react";
import { Zap, Shield, Headphones } from "lucide-react";
import { AbstractAnimation } from "./AbstractAnimation";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 cyber-grid relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Sol Kısım */}
          <div className="md:w-1/2">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Geleceği Birlikte
              <br />
              <span className="text-[#FF5A5F]">Şekillendirelim</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Sınırları aşan teknolojiler, cesur fikirler ve yenilikçi
              çözümlerle dijital geleceğinizi inşa ediyoruz. Sektörünüze özel
              yazılım projeleri için en uygun çözümleri sunuyoruz.
            </p>
            <div className="flex space-x-4">
              <Link to="/iletisim">
                <button className="bg-[#2B4EA2] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#FF5A5F] transition-all">
                  İletişime Geç
                </button>
              </Link>
              <Link to="/hizmetler">
                <button className="bg-transparent border-2 border-[#2B4EA2] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#2B4EA2] hover:text-white transition-all">
                  Keşfet
                </button>
              </Link>
            </div>
          </div>
          {/* Sağ Kısım */}
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <div className="w-full max-w-lg mx-auto">
                <AbstractAnimation />
              </div>
            </div>
          </div>
        </div>

        {/* Alt Kısım - Özellikler */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {/* Hız */}
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <div className="w-12 h-12 bg-[#2B4EA2]/20 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-[#2B4EA2]" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">
              Hızlı ve Güvenilir Hizmet
            </h3>
            <p className="text-gray-300">
              Müşteri odaklı ve sektöre özgü yenilikçi çözüm anlayışı
            </p>
          </div>

          {/* Güvenlik */}
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <div className="w-12 h-12 bg-[#FF5A5F]/20 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-[#FF5A5F]" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">
              Güvenli Altyapı
            </h3>
            <p className="text-gray-300">
              Son teknolojilerin kullanıldığı güvenli uygulamalar
            </p>
          </div>

          {/* Destek */}
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <div className="w-12 h-12 bg-[#2B4EA2]/20 rounded-lg flex items-center justify-center mb-4">
              <Headphones className="w-6 h-6 text-[#2B4EA2]" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">
              Deneyimli Ekip
            </h3>
            <p className="text-gray-300">
              Uzman ekibimiz her an yanınızda, sorularınıza anında çözüm
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
