import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import { CalendarToday, Person } from "@mui/icons-material";

const BlogPage = () => {
  const posts = [
    {
      title: "Yapay Zeka ve İş Dünyasının Geleceği",
      excerpt: "Yapay zeka teknolojileri iş süreçlerini nasıl dönüştürüyor?",
      image: "/api/placeholder/800/400",
      date: "5 Aralık 2024",
      author: "Ahmet Yılmaz",
      category: "Teknoloji",
    },
    {
      title: "Modern Web Uygulamaları Geliştirme",
      excerpt:
        "Web teknolojilerindeki son gelişmeler ve best practice yaklaşımları",
      image: "/api/placeholder/800/400",
      date: "4 Aralık 2024",
      author: "Mehmet Demir",
      category: "Yazılım",
    },
    {
      title: "Siber Güvenlik Trendleri",
      excerpt: "Güncel siber tehditler ve korunma yöntemleri",
      image: "/api/placeholder/800/400",
      date: "3 Aralık 2024",
      author: "Ayşe Kara",
      category: "Güvenlik",
    },
    {
      title: "Cloud Computing ve İş Stratejileri",
      excerpt: "Cloud teknolojilerinin işletmelere sağladığı avantajlar",
      image: "/api/placeholder/800/400",
      date: "2 Aralık 2024",
      author: "Ali Yıldız",
      category: "Cloud",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#0f172a",
        backgroundImage: 'url("/path/to/grid-background.png")',
        minHeight: "100vh",
        pt: 20,
      }}
    >
      <Container>
        <Typography variant="h3" sx={{ color: "#fff", mb: 6, fontWeight: 600 }}>
          Blog & Haberler
        </Typography>

        <Grid container spacing={4}>
          {posts.map((post, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  bgcolor: "#1a2234",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={post.image}
                  alt={post.title}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#2B4EA2",
                      bgcolor: "rgba(43, 78, 162, 0.1)",
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 1,
                    }}
                  >
                    {post.category}
                  </Typography>

                  <Typography variant="h5" sx={{ color: "#fff", mt: 2, mb: 1 }}>
                    {post.title}
                  </Typography>

                  <Typography sx={{ color: "#666", mb: 3 }}>
                    {post.excerpt}
                  </Typography>

                  <Box sx={{ display: "flex", gap: 3, color: "#666" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <CalendarToday sx={{ fontSize: 18 }} />
                      <Typography variant="body2">{post.date}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Person sx={{ fontSize: 18 }} />
                      <Typography variant="body2">{post.author}</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogPage;
