// src/components/Navbar.tsx
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useToggleTheme } from '../theme/useToggleTheme';

export default function Navbar() {
  const toggleTheme = useToggleTheme();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const sections = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          MyPortfolio
        </Typography>

        {isMobile ? (
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
        ) : (
          <Box>
            {sections.map((section) => (
              <Button key={section} color="inherit">
                {section}
              </Button>
            ))}
            <Button onClick={toggleTheme} color="inherit">
              Toggle Theme
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
