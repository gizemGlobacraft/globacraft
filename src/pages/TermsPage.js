import React from "react";
import { Container, Typography, Box, Paper, Divider } from "@mui/material";

const TermsPage = () => {
  return (
    <Box sx={{ bgcolor: "#0f172a", minHeight: "100vh", pt: 12, pb: 8 }}>
      <Container maxWidth="md">
        <Typography
          variant="h3"
          sx={{ color: "#fff", mb: 6, textAlign: "center" }}
        >
          Kullanım Şartları
        </Typography>

        <Paper
          sx={{ bgcolor: "rgba(255,255,255,0.05)", p: 4, borderRadius: 2 }}
        >
          <Box component="section" sx={{ mb: 6 }}>
            <Typography variant="h5" sx={{ color: "#fff", mb: 3 }}>
              1. Genel Hükümler
            </Typography>
            <Typography sx={{ color: "#aaa", mb: 3 }}>
              Bu siteyi kullanarak aşağıdaki şartları kabul etmiş olursunuz. Bu
              şartların tamamını veya bir kısmını kabul etmiyorsanız, siteyi
              kullanmamanız gerekmektedir.
            </Typography>
          </Box>

          <Divider sx={{ my: 4, bgcolor: "rgba(255,255,255,0.1)" }} />

          <Box component="section" sx={{ mb: 6 }}>
            <Typography variant="h5" sx={{ color: "#fff", mb: 3 }}>
              2. Fikri Mülkiyet Hakları
            </Typography>
            <Typography sx={{ color: "#aaa", mb: 3 }}>
              Site içeriği GlobaCraft'ın mülkiyetindedir. İzinsiz kopyalama,
              değiştirme ve dağıtım yapılamaz.
            </Typography>
          </Box>

          <Divider sx={{ my: 4, bgcolor: "rgba(255,255,255,0.1)" }} />

          <Box component="section">
            <Typography variant="h5" sx={{ color: "#fff", mb: 3 }}>
              3. Sorumluluk Reddi
            </Typography>
            <Typography sx={{ color: "#aaa", mb: 3 }}>
              Sitedeki bilgilerin doğruluğu için çaba gösterilmekle birlikte,
              hatalardan sorumlu olunmaz.
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

export default TermsPage;
