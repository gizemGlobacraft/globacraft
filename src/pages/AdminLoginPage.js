import React from "react";
import {
  Box,
  Container,
  Card,
  TextField,
  Button,
  Typography,
} from "@mui/material";

const AdminLoginPage = () => {
  return (
    <Box sx={{ backgroundColor: "#0f172a", minHeight: "100vh", pt: 12 }}>
      <Container maxWidth="sm">
        <Card sx={{ bgcolor: "#1a2234", p: 4 }}>
          <Typography
            variant="h5"
            sx={{ color: "#fff", mb: 4, textAlign: "center" }}
          >
            Admin Girişi
          </Typography>
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            sx={{
              "& input": { color: "#fff" },
              "& label": { color: "#666" },
            }}
          />
          <TextField
            fullWidth
            label="Şifre"
            type="password"
            margin="normal"
            sx={{
              "& input": { color: "#fff" },
              "& label": { color: "#666" },
            }}
          />
          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              bgcolor: "#2B4EA2",
              "&:hover": { bgcolor: "#1a3a8a" },
            }}
          >
            Giriş Yap
          </Button>
        </Card>
      </Container>
    </Box>
  );
};

export default AdminLoginPage;
