import React from "react";
import { Card, CardContent, Typography, Grid, Container } from "@mui/material";
import {
  AutoGraph,
  Speed,
  Build,
  Psychology,
  Bolt,
  ThumbUp,
} from "@mui/icons-material";

const SolutionsPage = () => {
  const solutions = [
    {
      title: "Yapay Zeka & ML",
      description: "İş süreçlerinizi akıllı sistemlerle otomatikleştirin",
      features: [
        "Doğal Dil İşleme",
        "Görüntü Tanıma",
        "Tahmine Dayalı Analitik",
        "Chatbot",
      ],
      icon: <Psychology sx={{ fontSize: 40, color: "#2196f3" }} />,
    },
    {
      title: "İş Analitiği",
      description: "Verilerinizden değer üretin",
      features: ["Dashboard", "Raporlama", "Performans İzleme", "KPI Takibi"],
      icon: <AutoGraph sx={{ fontSize: 40, color: "#f44336" }} />,
    },
    {
      title: "DevOps",
      description: "Sürekli entegrasyon ve teslimat",
      features: ["CI/CD", "Konteynerizasyon", "Otomasyon", "Monitoring"],
      icon: <Build sx={{ fontSize: 40, color: "#4caf50" }} />,
    },
    {
      title: "Performans",
      description: "Yüksek performanslı sistemler",
      features: ["Yük Dengeleme", "Önbellekleme", "CDN", "Optimizasyon"],
      icon: <Speed sx={{ fontSize: 40, color: "#9c27b0" }} />,
    },
    {
      title: "IoT",
      description: "Akıllı cihaz çözümleri",
      features: [
        "Sensör Ağları",
        "Veri Toplama",
        "Uzaktan İzleme",
        "Otomasyon",
      ],
      icon: <Bolt sx={{ fontSize: 40, color: "#ff9800" }} />,
    },
    {
      title: "UX/UI",
      description: "Kullanıcı odaklı tasarımlar",
      features: [
        "Responsive Tasarım",
        "A/B Test",
        "Kullanılabilirlik",
        "Erişilebilirlik",
      ],
      icon: <ThumbUp sx={{ fontSize: 40, color: "#2962ff" }} />,
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
        Çözümlerimiz
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
        İşletmenizin dijital dönüşüm yolculuğunda ihtiyaç duyduğu tüm teknolojik
        çözümleri tek çatı altında sunuyoruz.
      </Typography>

      <Grid container spacing={4}>
        {solutions.map((solution, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                bgcolor: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(10px)",
                borderRadius: 2,
              }}
            >
              <CardContent>
                {solution.icon}
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{ color: "#fff", mt: 2 }}
                >
                  {solution.title}
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.7)" }} paragraph>
                  {solution.description}
                </Typography>
                {solution.features.map((feature, i) => (
                  <Typography
                    key={i}
                    variant="body2"
                    sx={{ py: 0.5, color: "rgba(255,255,255,0.6)" }}
                  >
                    • {feature}
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

export default SolutionsPage;
