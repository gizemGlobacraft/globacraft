import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const KVKKPage = () => {
  return (
    <Box sx={{ bgcolor: "#0f172a", minHeight: "100vh", pt: 12, pb: 8 }}>
      <Container maxWidth="md">
        <Typography
          variant="h3"
          sx={{ color: "#fff", mb: 6, textAlign: "center" }}
        >
          KVKK Aydınlatma Metni
        </Typography>

        <Paper
          sx={{ bgcolor: "rgba(255,255,255,0.05)", p: 4, borderRadius: 2 }}
        >
          <Box component="section" sx={{ mb: 6 }}>
            <Typography variant="h5" sx={{ color: "#fff", mb: 3 }}>
              Veri Sorumlusu
            </Typography>
            <Typography sx={{ color: "#aaa" }}>
              GlobaCraft Teknoloji A.Ş. olarak 6698 sayılı KVKK kapsamında veri
              sorumlusu sıfatıyla kişisel verilerinizi işliyoruz.
            </Typography>
          </Box>

          <Box component="section" sx={{ mb: 6 }}>
            <Typography variant="h5" sx={{ color: "#fff", mb: 3 }}>
              Haklarınız
            </Typography>
            <List sx={{ color: "#aaa" }}>
              <ListItem>
                <ListItemText primary="• Kişisel verilerinizin işlenip işlenmediğini öğrenme" />
              </ListItem>
              <ListItem>
                <ListItemText primary="• İşlenen kişisel verileriniz hakkında bilgi talep etme" />
              </ListItem>
              <ListItem>
                <ListItemText primary="• Verilerinizin işlenme amacını öğrenme" />
              </ListItem>
              <ListItem>
                <ListItemText primary="• Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme" />
              </ListItem>
            </List>
          </Box>

          <Box component="section">
            <Typography variant="h5" sx={{ color: "#fff", mb: 3 }}>
              Başvuru Yöntemi
            </Typography>
            <Typography sx={{ color: "#aaa" }}>
              Haklarınızı kullanmak için info@globacraft.com adresine yazılı
              başvuruda bulunabilirsiniz.
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

export default KVKKPage;
