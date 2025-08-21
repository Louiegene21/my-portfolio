import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Church Website',
    description: 'A full-featured church site built with React, MUI, and TypeScript.',
    image: './project1.png',
    tech: ['React', 'TypeScript', 'Material UI'],
    liveLink: 'https://your-church-site.com',
    repoLink: 'https://github.com/yourusername/church-website',
  },
  {
    title: 'Portfolio Website',
    description: 'My own portfolio with animations, responsiveness, and clean UI.',
    image: './project2.png',
    tech: ['React', 'Framer Motion', 'Vite'],
    liveLink: 'https://your-portfolio.com',
    repoLink: 'https://github.com/yourusername/portfolio',
  },
  // Add more projects as needed
];

export default function ProjectsSection() {
  return (
    <Box component="section" id="projects" sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Projects
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  boxShadow: 3,
                  transition: '0.3s',
                }}
              >
                <CardMedia
                  component="img"
                  height="160"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography variant="h6">{project.title}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ my: 1 }}>
                    {project.description}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {project.tech.map((tech) => (
                      <Chip key={tech} label={tech} size="small" />
                    ))}
                  </Stack>
                </CardContent>
                <CardActions sx={{ mt: 'auto' }}>
                  <Button size="small" href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    Live
                  </Button>
                  <Button size="small" href={project.repoLink} target="_blank" rel="noopener noreferrer">
                    Code
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
