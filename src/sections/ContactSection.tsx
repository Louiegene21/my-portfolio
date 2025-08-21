import {
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import MusicNoteIcon from "@mui/icons-material/MusicNote"; // Use this for TikTok

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validate = () => {
    const newErrors = { name: "", email: "", message: "" };
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.values(newErrors).every((e) => e === "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    alert("Message sent! (You can integrate EmailJS or FormSubmit later)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: 8,
        backgroundColor: (theme) =>
          theme.palette.mode === "light" ? "#f9f9f9" : "#1a1a1a",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Contact Me
        </Typography>

        <Typography align="center" sx={{ mb: 4 }}>
          Let’s connect! Whether you have a question or just want to say hi.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <form onSubmit={handleSubmit} noValidate>
              <Stack spacing={2}>
                <TextField
                  label="Name"
                  fullWidth
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  error={Boolean(errors.name)}
                  helperText={errors.name}
                />
                <TextField
                  label="Email"
                  fullWidth
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                />
                <TextField
                  label="Message"
                  fullWidth
                  multiline
                  minRows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  error={Boolean(errors.message)}
                  helperText={errors.message}
                />
                <Button type="submit" variant="contained" size="large">
                  Send Message
                </Button>
              </Stack>
            </form>

            <Box
              display="flex"
              justifyContent="center"
              flexWrap="wrap"
              gap={2}
              mt={4}
            >
              <IconButton
                component="a"
                href="https://github.com/Louiegene21"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#333" }} // GitHub Black
              >
                <GitHubIcon />
              </IconButton>

              <IconButton
                component="a"
                href="https://www.linkedin.com/in/louie-gene-siscar-486028297/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#0A66C2" }} // LinkedIn Blue
              >
                <LinkedInIcon />
              </IconButton>

              <IconButton
                component="a"
                href="mailto:louiegenel21@gmail.com"
                sx={{ color: "#D44638" }} // Gmail Red
              >
                <EmailIcon />
              </IconButton>

              <IconButton
                component="a"
                href="https://www.facebook.com/louiegene.siscar"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#1877F2" }} // Facebook Blue
              >
                <FacebookIcon />
              </IconButton>

              <IconButton
                component="a"
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#E4405F" }} // Instagram Pink/Red
              >
                <InstagramIcon />
              </IconButton>

              <IconButton
                component="a"
                href="https://www.tiktok.com/@louiegenes"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#000000" }} // TikTok Black (or add gradient later)
              >
                <MusicNoteIcon />
              </IconButton>

              <IconButton
                component="a"
                href="https://www.youtube.com/@louiegenesiscar1161"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#FF0000" }} // YouTube Red
              >
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
}
