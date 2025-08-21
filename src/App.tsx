// src/App.tsx
import { Typography } from '@mui/material';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Typography variant="h3" align="center" gutterBottom>
        Welcome to My Portfolio
      </Typography>
      <Typography align="center">Let’s build something great together!</Typography>
    </Layout>
  );
}

export default App;
