import { useTheme } from '@mui/material/styles';
import { AppBar, Box, Toolbar, IconButton, useMediaQuery, Drawer, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useThemeContext } from '../../ThemeContext';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/TransparenTwot.png';
import SearchBar from './SearchBar';
import MenuItems from './MenuItems';

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { toggleTheme } = useThemeContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const linkedinUrl = "https://www.linkedin.com/company/kh-customs-aps/";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : 'white', color: theme.palette.text.primary }}>
        <Toolbar>
          <img src={logo} alt="KH Customs Logo" style={{ height: 80, marginRight: theme.spacing(2) }} />
          {isMobile ? (
            <IconButton color="inherit" onClick={handleMobileMenuToggle}>
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              <MenuItems location={location} handleNavigation={handleNavigation} />
              <SearchBar />
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
        <Box sx={{ width: 250, display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
            <IconButton color="inherit" onClick={handleMobileMenuToggle}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List sx={{ flexGrow: 1 }}>
            <MenuItems location={location} handleNavigation={handleNavigation} isMobile={true} />
          </List>
          <List>
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
        </Box>
      </Drawer>
    </Box>
  );
}
