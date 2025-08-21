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
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar() {
  const toggleTheme = useToggleTheme();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const sections = ['about', 'skills', 'projects', 'contact'];

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          MyPortfolio
        </Typography>

        {isMobile ? (
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {sections.map((section) => (
              <ScrollLink
                key={section}
                to={section}
                smooth={true}
                spy={true}
                offset={-70}
                duration={500}
                activeClass="active-scroll"
              >
                <Button
                  color="inherit"
                  className="nav-button"
                  sx={{
                    textTransform: 'capitalize',
                    transition: '0.3s',
                  }}
                >
                  {section}
                </Button>
              </ScrollLink>
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
