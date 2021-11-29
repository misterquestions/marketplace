import { Avatar, Typography, useMediaQuery, useTheme } from '@mui/material';

const Logo: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  if (isMobile) {
    return <Avatar sx={{ bgcolor: theme.palette.secondary.main }}>M</Avatar>;
  }

  return <Typography>Marketplace</Typography>;
};

export default Logo;
