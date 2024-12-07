import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Box sx={{ bgcolor: "#0f172a", minHeight: "100vh", pt: 12, pb: 8 }}>
      <Container maxWidth="md">
        <Typography
          variant="h3"
          sx={{ color: "#fff", mb: 6, textAlign: "center" }}
        >
          Gizlilik Politikası
        </Typography>

        <Paper
          sx={{ bgcolor: "rgba(255,255,255,0.05)", p: 4, borderRadius: 2 }}
        >
          <Box component="section" sx={{ mb: 6 }}>
            <Typography variant="h5" sx={{ color: "#fff", mb: 3 }}>
              1. Veri Toplama ve Kullanım
            </Typography>
            <Typography sx={{ color: "#aaa", mb: 2 }}>
              • IP adresi, tarayıcı bilgileri ve ziyaret kayıtları
            </Typography>
            <Typography sx={{ color: "#aaa", mb: 2 }}>
              • İletişim formu bilgileri (ad, e-posta, mesaj)
            </Typography>
            <Typography sx={{ color: "#aaa" }}>
              Bu bilgiler hizmet kalitesini artırmak ve iletişim taleplerinizi
              yanıtlamak için kullanılır.
            </Typography>
          </Box>

          <Box component="section" sx={{ mb: 6 }}>
            <Typography variant="h5" sx={{ color: "#fff", mb: 3 }}>
              2. Veri Güvenliği
            </Typography>
            <Typography sx={{ color: "#aaa" }}>
              Verileriniz SSL şifreleme ve güvenlik duvarları ile korunmaktadır.
              Düzenli güvenlik kontrolleri yapılmaktadır.
            </Typography>
          </Box>

          <Box component="section">
            <Typography variant="h5" sx={{ color: "#fff", mb: 3 }}>
              3. Çerezler
            </Typography>
            <Typography sx={{ color: "#aaa" }}>
              Sitemiz çerezleri kullanıcı deneyimini iyileştirmek için kullanır.
              Tarayıcı ayarlarınızdan çerezleri kontrol edebilirsiniz.
            </Typography>
          </Box>
        </Paper>

        <Typography
          sx={{ color: "#666", mt: 4, fontSize: "0.9rem", textAlign: "center" }}
        >
          Son Güncelleme: 6 Aralık 2024
        </Typography>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
