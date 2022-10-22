import { FaHome, FaFilm } from 'react-icons/fa';
// import { NavLink } from 'react-router-dom';
import { Box } from '../Box';
import { NavItem } from './AppBar.styled';

const navItems = [
  { href: 'home', text: 'Home', icon: FaHome },
  { href: 'movies', text: 'Movies', icon: FaFilm },
];

export const AppBar = () => {
  return (
    <Box as="header" p={4} height="100vh" borderRight="1px solid black">
      <Box as="nav" display="flex" flexDirection="column">
        {navItems.map(({ href, text, icon: Icon }) => (
          <NavItem to={href} key={href}>
            <Icon size="16" />
            {text}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};
