import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Ana Footer Bölümü */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Şirket Bilgileri */}
          <div>
            <div className="flex items-center">
              <Link to="/">
                <img
                  src="/images/globacraft_logo_v6_darktheme (1).svg"
                  alt="GlobaCraft Logo"
                  className="h-16 md:h-20"
                />
              </Link>
            </div>
            <p className="text-gray-400 mb-6">
              Yenilikçi teknoloji çözümleriyle geleceğinizi şekillendiriyoruz.
              Dijital dönüşüm yolculuğunuzda yanınızdayız.
            </p>
            <div className="flex space-x-4">
              {/* <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a> */}
              <a
                href="https://www.instagram.com/globacraft"
                className="hover:text-blue-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              {/* <a href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a> */}
            </div>
          </div>

          {/* Hızlı Linkler */}
          {/* <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Hızlı Linkler
            </h4>
            <ul className="space-y-4">
              {[
                "Ana Sayfa",
                "Hakkımızda",
                "Hizmetler",
                "Projeler",
                "Blog",
                "Kariyer",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="flex items-center hover:text-blue-400 transition-colors"
                  >
                    <ArrowRight size={16} className="mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Hizmetler */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Hizmetlerimiz
            </h4>
            <ul className="space-y-4">
              {[
                "Web Geliştirme",
                "Mobil Uygulama",
                "UI/UX Tasarım",
                "Cloud Çözümler",
                "Siber Güvenlik",
                "Yapay Zeka",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="flex items-center hover:text-blue-400 transition-colors"
                  >
                    <ArrowRight size={16} className="mr-2" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">İletişim</h4>
            <div className="space-y-4">
              {/* <div className="flex items-start">
                <MapPin className="mr-3 mt-1" size={20} />
                <p>
                  Teknoloji Vadisi, No: 123
                  <br />
                  34000 İstanbul, Türkiye
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3" size={20} />
                <p>+90 (212) 345 67 89</p>
              </div> */}
              <div className="flex items-center">
                <Mail className="mr-3" size={20} />
                <p>info@globacraft.com</p>
              </div>
              {/* Newsletter */}
              {/* <div className="mt-6">
                <h5 className="text-white font-semibold mb-3">
                  Bültenimize Katılın
                </h5>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="E-posta adresiniz"
                    className="bg-gray-800 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
                  />
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
                    Katıl
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Alt Footer - Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400">
              © 2024 GlobaCraft. Tüm hakları saklıdır.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="/privacy"
                className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
              >
                Gizlilik Politikası
              </a>
              <a
                href="/terms"
                className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
              >
                Kullanım Şartları
              </a>
              <a
                href="/kvkk"
                className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
              >
                KVKK
              </a>
              {/* <a
                href="/admin/blog"
                className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
              >
                Blog Paylaş
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
