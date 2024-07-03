import { styled, useTheme, alpha } from '@mui/material/styles';
import { AppBar, Box, Toolbar, IconButton, Typography, InputBase, Button, useMediaQuery, Drawer, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useThemeContext } from '../../ThemeContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/TransparenTwot.png'; 

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(1), width: 'auto' },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 6, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: { width: '12ch', '&:focus': { width: '20ch' } },
  },
}));

const NavbarButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(0, 2),
}));

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { toggleTheme } = useThemeContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavigation = (path: any) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const menuItems = [
    { text: 'Om KH Customs', path: '/' },
    { text: 'Vores løsninger', path: '/solutions' },
    { text: 'Toldregler', path: '/regulations' },
    { text: 'Kontakt os', path: '/contact' }
  ];

  const linkedinUrl = "https://www.linkedin.com/company/kh-customs-aps/";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : 'white', color: theme.palette.text.primary }}>
        <Toolbar>
          <img src={logo} alt="KH Customs Logo" style={{ height: 80, marginRight: theme.spacing(2) }} />
          {isMobile ? (
            <IconButton color="inherit" onClick={handleMobileMenuToggle}>
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
                {menuItems.map((item) => (
                  <NavbarButton key={item.text} color="inherit" onClick={() => navigate(item.path)}>
                    {item.text}
                  </NavbarButton>
                ))}
              </Box>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
              </Search>
              <IconButton color="inherit" onClick={toggleTheme}>
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
              <IconButton color="inherit" onClick={() => window.open(linkedinUrl, "_blank")}>
                <LinkedInIcon />
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={mobileMenuOpen} onClose={handleMobileMenuToggle}>
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton onClick={() => handleNavigation(item.path)}>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton onClick={toggleTheme}>
              <ListItemText primary={theme.palette.mode === 'dark' ? 'Light Mode' : 'Dark Mode'} />
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => window.open(linkedinUrl, "_blank")}>
              <ListItemText primary="LinkedIn" />
              <LinkedInIcon />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
