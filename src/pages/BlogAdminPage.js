import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  TextField,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { AddPhotoAlternate, Delete } from "@mui/icons-material";

const BlogAdminPage = () => {
  return (
    <Box sx={{ backgroundColor: "#0f172a", minHeight: "100vh", pt: 12 }}>
      <Container>
        <Typography variant="h4" sx={{ color: "#fff", mb: 4 }}>
          Blog Yazısı Oluştur
        </Typography>

        <Card sx={{ bgcolor: "#1a2234", p: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Başlık"
                variant="filled"
                sx={{
                  "& .MuiFilledInput-root": {
                    bgcolor: "#0f172a",
                    "&:hover": { bgcolor: "#0f172a" },
                    "&.Mui-focused": { bgcolor: "#0f172a" },
                  },
                  "& input": { color: "#fff" },
                  "& label": { color: "#666" },
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Kategori"
                variant="filled"
                sx={{
                  "& .MuiFilledInput-root": {
                    bgcolor: "#0f172a",
                    "&:hover": { bgcolor: "#0f172a" },
                    "&.Mui-focused": { bgcolor: "#0f172a" },
                  },
                  "& input": { color: "#fff" },
                  "& label": { color: "#666" },
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                  bgcolor: "#0f172a",
                  p: 2,
                  borderRadius: 1,
                }}
              >
                <Button
                  variant="outlined"
                  component="label"
                  startIcon={<AddPhotoAlternate />}
                  sx={{ color: "#fff", borderColor: "#666" }}
                >
                  Kapak Görseli
                  <input type="file" hidden accept="image/*" />
                </Button>
                <Typography sx={{ color: "#666" }}>görsel.jpg</Typography>
                <IconButton sx={{ color: "#666" }}>
                  <Delete />
                </IconButton>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Özet"
                multiline
                rows={2}
                variant="filled"
                sx={{
                  "& .MuiFilledInput-root": {
                    bgcolor: "#0f172a",
                    "&:hover": { bgcolor: "#0f172a" },
                    "&.Mui-focused": { bgcolor: "#0f172a" },
                  },
                  "& textarea": { color: "#fff" },
                  "& label": { color: "#666" },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="İçerik"
                multiline
                rows={12}
                variant="filled"
                sx={{
                  "& .MuiFilledInput-root": {
                    bgcolor: "#0f172a",
                    "&:hover": { bgcolor: "#0f172a" },
                    "&.Mui-focused": { bgcolor: "#0f172a" },
                  },
                  "& textarea": { color: "#fff" },
                  "& label": { color: "#666" },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
                <Button
                  variant="outlined"
                  sx={{ color: "#666", borderColor: "#666" }}
                >
                  Taslak Olarak Kaydet
                </Button>
                <Button
                  variant="contained"
                  sx={{ bgcolor: "#2B4EA2", "&:hover": { bgcolor: "#1a3a8a" } }}
                >
                  Yayınla
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
};

export default BlogAdminPage;
