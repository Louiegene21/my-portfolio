import {
  Box,
  Grid,
  Stack,
  Typography,
  Paper,
  useTheme,
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import AnimationIcon from '@mui/icons-material/Animation';
import WebIcon from '@mui/icons-material/Web';

const skills = [
  {
    icon: <CodeIcon fontSize="large" />,
    title: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    icon: <AnimationIcon fontSize="large" />,
    title: 'UI/UX & Animation',
    items: ['Material UI', 'Framer Motion', 'Responsive Design'],
  },
  {
    icon: <StorageIcon fontSize="large" />,
    title: 'Tools & Version Control',
    items: ['Git', 'GitHub', 'VSCode', 'Figma'],
  },
  {
    icon: <WebIcon fontSize="large" />,
    title: 'Soft Skills',
    items: ['Teamwork', 'Communication', 'Problem-solving'],
  },
];

export default function SkillsSection() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="skills"
      sx={{
        py: 8,
        backgroundColor: theme.palette.mode === 'light' ? '#fafafa' : '#1e1e1e',
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Skills
      </Typography>

      <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
        {skills.map((category) => (
          <Grid item xs={12} sm={6} md={4} key={category.title}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                height: '100%',
              }}
            >
              <Stack spacing={1}>
                <Box color="primary.main">{category.icon}</Box>
                <Typography variant="h6">{category.title}</Typography>
                {category.items.map((skill) => (
                  <Typography key={skill} variant="body2" color="text.secondary">
                    • {skill}
                  </Typography>
                ))}
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
