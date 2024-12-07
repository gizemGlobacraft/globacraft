import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { Phone, Email, LocationOn, Send } from "@mui/icons-material";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import { FormControlLabel, Checkbox } from "@mui/material";
import { Link } from "react-router-dom";

const ContactPage = () => {
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleSubmit = (e) => {
    if (!captchaToken) {
      alert("Lütfen reCAPTCHA doğrulamasını tamamlayın");
      return;
    }
    e.preventDefault();

    emailjs
      .sendForm(
        "service_06vsrcd",
        "template_ao2tesk",
        e.target,
        "Nkt2QIvgmKwFXVnYy"
      )
      .then(() => {
        alert("Mesajınız gönderildi");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Gönderim başarısız");
      });
  };

  const textFieldStyle = {
    "& .MuiFilledInput-root": {
      bgcolor: "#0a0a0a",
      "&:hover": { bgcolor: "#0a0a0a" },
      "&.Mui-focused": { bgcolor: "#0a0a0a" },
    },
    "& input, & textarea": { color: "#fff" },
    "& label": { color: "#666" },
  };

  return (
    <Box sx={{ color: "#fff", minHeight: "100vh", pt: 20 }}>
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              sx={{ color: "#fff", mb: 2, fontWeight: 600 }}
            >
              Bizimle İletişime Geçin
            </Typography>
            <Typography sx={{ color: "#fff", mb: 6 }}>
              Projelerinizi hayata geçirmek için yanınızdayız
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {[
                {
                  icon: <Phone sx={{ color: "#2B4EA2" }} />,
                  label: "Telefon",
                  text: "+90 (212) 555 55 55",
                },
                {
                  icon: <Email sx={{ color: "#2B4EA2" }} />,
                  label: "Email",
                  text: "info@globacraft.com",
                },
                {
                  icon: <LocationOn sx={{ color: "#2B4EA2" }} />,
                  label: "Adres",
                  text: "Levent, İstanbul",
                },
              ].map((item) => (
                <Box
                  key={item.label}
                  sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}
                >
                  <Box
                    sx={{
                      p: 1,
                      bgcolor: "rgba(43, 78, 162, 0.1)",
                      borderRadius: 1,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography sx={{ color: "#666", fontSize: "0.875rem" }}>
                      {item.label}
                    </Typography>
                    <Typography sx={{ color: "#fff" }}>{item.text}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ bgcolor: "#111", p: 4, borderRadius: 4 }}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="from_name"
                      fullWidth
                      label="Ad"
                      variant="filled"
                      required
                      sx={textFieldStyle}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="surname"
                      fullWidth
                      label="Soyad"
                      variant="filled"
                      required
                      sx={textFieldStyle}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="reply_to"
                      type="email"
                      fullWidth
                      label="E-posta"
                      variant="filled"
                      required
                      sx={textFieldStyle}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="message"
                      fullWidth
                      multiline
                      rows={4}
                      label="Mesaj"
                      variant="filled"
                      required
                      sx={textFieldStyle}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            required
                            sx={{
                              color: "#666",
                              "&.Mui-checked": { color: "#2B4EA2" },
                              paddingRight: 1, // Checkbox ve yazı arasındaki boşluk
                            }}
                          />
                        }
                        sx={{
                          marginLeft: 0, // Sol boşluğu sıfırla
                          marginRight: 0, // Sağ boşluğu sıfırla
                        }}
                        label={
                          <Box
                            component="span"
                            sx={{ color: "#666", fontSize: "0.9rem", ml: 1 }}
                          >
                            <Link to="/kvkk" style={{ color: "#2B4EA2" }}>
                              KVKK Aydınlatma Metni
                            </Link>
                            'ni okudum, onaylıyorum
                          </Box>
                        }
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <ReCAPTCHA
                        sitekey={process.env.REACT_APP_CAPTCHA_KEY || ""}
                        onChange={(token) => setCaptchaToken(token)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        size="large"
                        sx={{
                          bgcolor: "#2B4EA2",
                          py: 1.5,
                          "&:hover": { bgcolor: "#1a3a8a" },
                        }}
                      >
                        <Send sx={{ mr: 1 }} />
                        Gönder
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </form>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactPage;
