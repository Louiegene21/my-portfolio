import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useToggleTheme } from '../theme/useToggleTheme';
import { Link as ScrollLink } from 'react-scroll';

const sections = ['about', 'skills', 'projects', 'contact'];

export default function Navbar() {
  const toggleTheme = useToggleTheme();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        {sections.map((section) => (
          <ScrollLink
            key={section}
            to={section}
            smooth
            spy
            offset={-70}
            duration={500}
            activeClass="active-scroll"
          >
            <ListItem button>
              <ListItemText primary={section.charAt(0).toUpperCase() + section.slice(1)} />
            </ListItem>
          </ScrollLink>
        ))}
        <ListItem button onClick={toggleTheme}>
          <ListItemText primary="Toggle Theme" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            MyPortfolio
          </Typography>

          {isMobile ? (
            <>
              <IconButton color="inherit" onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
                {drawer}
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {sections.map((section) => (
                <ScrollLink
                  key={section}
                  to={section}
                  smooth
                  spy
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
    </>
  );
}
