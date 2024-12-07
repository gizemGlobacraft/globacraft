import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import {
  Container,
  Typography,
  Grid,
  Card,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { FormControlLabel, Checkbox } from "@mui/material";
import { Link } from "react-router-dom";

const ContactSection = () => {
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Lütfen reCAPTCHA doğrulamasını tamamlayın");
      return;
    }

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
        setCaptchaToken(null);
      })
      .catch((error) => {
        console.log(error);
        alert("Gönderim başarısız");
      });
  };

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            İletişime <span className="text-[#FF5A5F]">Geçin</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="from_name"
                placeholder="Adınız"
                required
                className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2B4EA2] focus:border-[#2B4EA2] transition-all"
              />
            </div>

            <div>
              <input
                type="text"
                name="surname"
                placeholder="Soyadınız"
                required
                className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2B4EA2] focus:border-[#2B4EA2] transition-all"
              />
            </div>

            <div>
              <input
                type="email"
                name="reply_to"
                placeholder="E-posta"
                required
                className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2B4EA2] focus:border-[#2B4EA2] transition-all"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Mesajınız"
                rows="4"
                required
                className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2B4EA2] focus:border-[#2B4EA2] transition-all"
              ></textarea>
            </div>

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

            <button className="w-full bg-[#2B4EA2] text-white py-3 rounded-lg hover:bg-[#FF5A5F] transition-colors font-semibold">
              Gönder
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
