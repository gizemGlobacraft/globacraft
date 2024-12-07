import React from "react";
import {
  Shield,
  Zap,
  Users,
  ChevronRight,
  Code,
  Globe,
  Server,
  Database,
  Cloud,
  Lock,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: "Kurumsal Yazılım Geliştirme",
      description:
        "İşletmenizin ihtiyaçlarına özel, ölçeklenebilir ve modern yazılım çözümleri",
      details: [
        "Özel Web Uygulamaları",
        "Mobil Uygulama Geliştirme (iOS/Android)",
        "E-Ticaret Çözümleri",
        "ERP ve CRM Sistemleri",
        "API Entegrasyonları",
      ],
      icon: <Code className="w-8 h-8 text-blue-500" />,
    },
    {
      id: 2,
      title: "Siber Güvenlik ve Altyapı",
      description: "En son güvenlik teknolojileri ile işletmenizi koruyoruz",
      details: [
        "Güvenlik Duvarı Yönetimi",
        "Sızma Testleri",
        "Güvenlik Danışmanlığı",
        "Veri Şifreleme",
        "DDoS Koruması",
      ],
      icon: <Shield className="w-8 h-8 text-red-500" />,
    },
    {
      id: 3,
      title: "Dijital Dönüşüm Danışmanlığı",
      description: "Teknoloji yol haritanızı birlikte planlayalım",
      details: [
        "Dijital Strateji Geliştirme",
        "Süreç Optimizasyonu",
        "Teknoloji Eğitimleri",
        "Proje Yönetimi",
        "Veri Analizi",
      ],
      icon: <Users className="w-8 h-8 text-blue-700" />,
    },
    {
      id: 4,
      title: "Cloud Computing",
      description:
        "AWS, Azure ve Google Cloud üzerinde güvenli ve ölçeklenebilir çözümler",
      details: [
        "Cloud Altyapı Tasarımı",
        "Sunucu Yönetimi",
        "Yedekleme ve DR",
        "Konteyner Orkestrasyon",
        "Mikroservis Mimarisi",
      ],
      icon: <Cloud className="w-8 h-8 text-purple-500" />,
    },
    {
      id: 5,
      title: "Veri Yönetimi",
      description: "Verilerinizi güvenli ve etkili şekilde yönetiyoruz",
      details: [
        "Veri Tabanı Tasarımı",
        "Büyük Veri Analitiği",
        "Veri Migrasyonu",
        "BI Çözümleri",
        "Veri Güvenliği",
      ],
      icon: <Database className="w-8 h-8 text-green-500" />,
    },
    {
      id: 6,
      title: "Ağ ve Sistem Altyapısı",
      description: "Modern ve güvenli network altyapısı çözümleri",
      details: [
        "Network Tasarımı",
        "Sistem Entegrasyonu",
        "Yük Dengeleme",
        "VPN Çözümleri",
        "7/24 Monitoring",
      ],
      icon: <Server className="w-8 h-8 text-yellow-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Teknoloji Çözümlerimiz</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sınırları aşan teknolojiler ve yenilikçi çözümlerle dijital
            geleceğinizi inşa ediyoruz. Her sektöre özel, ölçeklenebilir ve
            güvenli hizmetler sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="bg-gray-800 border-none hover:bg-gray-700 transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="mb-6 bg-gray-700 p-4 rounded-lg inline-block">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 min-h-[60px]">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.details.map((detail, index) => (
                    <li
                      key={index}
                      className="flex items-center text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 text-blue-500" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
