import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Box } from './Box';

export const Layout = () => {
  return (
    <Box display="flex" flexDirection="column" wigth="100%">
      <Header />
      <Outlet />
    </Box>
  );
};
