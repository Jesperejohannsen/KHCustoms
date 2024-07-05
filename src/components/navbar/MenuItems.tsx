import { Box, Button, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Location } from 'history';

const menuItems = [
  { text: 'Om KH Customs', path: '/' },
  { text: 'Vores løsninger', path: '/solutions' },
  { text: 'Toldregler', path: '/regulations' },
  { text: 'Kontakt os', path: '/contact' }
];

interface MenuItemsProps {
  location: Location;
  handleNavigation: (path: string) => void;
  isMobile?: boolean;
}

export default function MenuItems({ location, handleNavigation, isMobile = false }: MenuItemsProps) {
  return (
    <>
      {isMobile ? (
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton onClick={() => handleNavigation(item.path)}>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
          {menuItems.map((item) => (
            <Button
              key={item.text}
              color="inherit"
              onClick={() => handleNavigation(item.path)}
              sx={{
                margin: 1,
                borderBottom: location.pathname === item.path ? `2px solid primary.main` : 'none',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              {item.text}
            </Button>
          ))}
        </Box>
      )}
    </>
  );
}
