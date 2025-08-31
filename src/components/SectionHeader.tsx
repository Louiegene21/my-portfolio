import { Box, Typography } from '@mui/material';

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <Box sx={{ mb: 4, textAlign: 'center' }}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          textTransform: 'capitalize',
        }}
      >
        {title}
      </Typography>

      {subtitle && (
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 600, mx: 'auto' }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
