// src/sections/AboutSection.tsx
import { Box, Grid, Typography, Avatar, Stack, Chip } from '@mui/material';

const skills = [
  'React',
  'TypeScript',
  'Material UI',
  'JavaScript',
  'HTML',
  'CSS',
  'Framer Motion',
  'Git',
  'Responsive Design',
];

export default function AboutSection() {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: 8,
        background: 'linear-gradient(to bottom, #f0f0f0, #ffffff)',
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Profile Image */}
        <Grid item xs={12} md={4}>
          <Box display="flex" justifyContent="center">
            <Avatar
              src="./profile.jpg" // Replace with your own photo if desired
              alt="Your Name"
              sx={{ width: 300, height: 300 }}
            />
          </Box>
        </Grid>

        {/* Text + Skills */}
        <Grid item xs={12} md={8}>
          <Stack spacing={3}>
            <Typography variant="h4" component="h2">
              Hello! I’m Louie Gene Siscar
            </Typography>

            <Typography variant="body1">
              I’m a frontend developer passionate about crafting beautiful and functional web interfaces using React, Material UI, and TypeScript.
            </Typography>

            <Typography variant="body2" color="text.secondary">
              I love learning new technologies, solving UI/UX challenges, and creating digital experiences that help people.
            </Typography>

            {/* Skills List */}
            <Box display="flex" flexWrap="wrap" gap={1}>
              {skills.map((skill) => (
                <Chip key={skill} label={skill} variant="outlined" color="primary" />
              ))}
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
