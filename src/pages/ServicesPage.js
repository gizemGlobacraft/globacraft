import React from "react";
import { Card, CardContent, Typography, Grid, Container } from "@mui/material";
import {
  Code,
  Security,
  People,
  CloudQueue,
  Storage,
  Router,
} from "@mui/icons-material";

const ServicesPage = () => {
  const services = [
    {
      title: "Kurumsal Yazılım Geliştirme",
      description: "İşletmenizin ihtiyaçlarına özel çözümler",
      details: [
        "Web Uygulamaları",
        "Mobil Uygulamalar",
        "E-Ticaret",
        "ERP/CRM",
        "API",
      ],
      icon: <Code sx={{ fontSize: 40, color: "#2196f3" }} />,
    },
    {
      title: "Siber Güvenlik",
      description: "En son güvenlik teknolojileri ile koruma",
      details: [
        "Güvenlik Duvarı",
        "Sızma Testleri",
        "Danışmanlık",
        "Şifreleme",
        "DDoS Koruması",
      ],
      icon: <Security sx={{ fontSize: 40, color: "#f44336" }} />,
    },
    {
      title: "Dijital Dönüşüm",
      description: "Teknoloji yol haritanızı planlayalım",
      details: [
        "Strateji",
        "Optimizasyon",
        "Eğitim",
        "Proje Yönetimi",
        "Analiz",
      ],
      icon: <People sx={{ fontSize: 40, color: "#2962ff" }} />,
    },
    {
      title: "Cloud Computing",
      description: "Güvenli ve ölçeklenebilir çözümler",
      details: ["Altyapı", "Sunucu", "Yedekleme", "Konteyner", "Mikroservis"],
      icon: <CloudQueue sx={{ fontSize: 40, color: "#9c27b0" }} />,
    },
    {
      title: "Veri Yönetimi",
      description: "Verilerinizi güvenli şekilde yönetin",
      details: [
        "Veritabanı",
        "Büyük Veri",
        "Migrasyon",
        "BI",
        "Veri Güvenliği",
      ],
      icon: <Storage sx={{ fontSize: 40, color: "#4caf50" }} />,
    },
    {
      title: "Ağ ve Sistem",
      description: "Modern network altyapı çözümleri",
      details: ["Network", "Entegrasyon", "Yük Dengeleme", "VPN", "Monitoring"],
      icon: <Router sx={{ fontSize: 40, color: "#ff9800" }} />,
    },
  ];

  return (
    <Container sx={{ py: 20 }}>
      <Typography
        variant="h2"
        align="center"
        sx={{
          color: "#fff",
        }}
        gutterBottom
      >
        Teknoloji Çözümlerimiz
      </Typography>

      <Typography
        align="center"
        sx={{
          mb: 6,
          maxWidth: "800px",
          mx: "auto",
          color: "#fff",
          fontSize: "1.25rem",
        }}
      >
        Sınırları aşan teknolojiler ve yenilikçi çözümlerle dijital geleceğinizi
        inşa ediyoruz. Her sektöre özel, ölçeklenebilir ve güvenli hizmetler
        sunuyoruz.
      </Typography>

      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                bgcolor: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(10px)",
              }}
            >
              <CardContent>
                {service.icon}
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ color: "#fff", mt: 2 }}
                  gutterBottom
                >
                  {service.title}
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.7)" }} paragraph>
                  {service.description}
                </Typography>
                {service.details.map((detail, i) => (
                  <Typography
                    key={i}
                    variant="body2"
                    sx={{ py: 0.5, color: "rgba(255,255,255,0.6)" }}
                  >
                    • {detail}
                  </Typography>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ServicesPage;
