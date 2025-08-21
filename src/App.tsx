import { Button, Container, Typography } from '@mui/material';
import { useToggleTheme } from './theme/ThemeProvider';

function App() {
  const toggleTheme = useToggleTheme();

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Hello, Portfolio!
      </Typography>
      <Button variant="contained" onClick={toggleTheme}>
        Toggle Theme
      </Button>
    </Container>
  );
}

export default App;
