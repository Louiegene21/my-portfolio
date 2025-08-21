import { Container } from '@mui/material';
import Navbar from '../components/Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <Container
        maxWidth="lg"
        sx={{
          mt: { xs: 8, sm: 10 },
          px: { xs: 2, sm: 4 },
        }}
      >
        {children}
      </Container>
    </>
  );
}
