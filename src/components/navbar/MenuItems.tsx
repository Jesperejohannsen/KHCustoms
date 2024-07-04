import { Box, Button } from '@mui/material';
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
}

export default function MenuItems({ location, handleNavigation }: MenuItemsProps) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
      {menuItems.map((item) => (
        <Button 
          key={item.text} 
          color="inherit" 
          onClick={() => handleNavigation(item.path)}
          sx={{
            margin: 1,
            borderBottom: location.pathname === item.path ? `2px solid` : 'none',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
          }}
        >
          {item.text}
        </Button>
      ))}
    </Box>
  );
}
