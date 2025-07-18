import {
  Menu,
  MenuItem,
  Avatar,
  Typography,
  Divider,
  Box,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function ProfileMenu({ anchorEl, open, onClose }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    onClose();
  };

  return (
    <Menu anchorEl={anchorEl} open={open} onClose={onClose} PaperProps={{ sx: { width: 280, mt: 1.5 } }}>
      <Box display="flex" alignItems="center" px={2} py={1.5}>
        <Avatar sx={{ bgcolor: '#FF6D00', mr: 1 }}>{user?.name[0]}</Avatar>
        <Box>
          <Typography variant="subtitle1" fontWeight="bold">{user?.name}</Typography>
          <Typography variant="body2" color="text.secondary">{user?.email}</Typography>
        </Box>
      </Box>

      <Divider />

      <MenuItem onClick={onClose}>
        <ListItemIcon><AccountCircleIcon fontSize="small" /></ListItemIcon>
        <ListItemText>Account</ListItemText>
        <ChevronRightIcon fontSize="small" />
      </MenuItem>

      <MenuItem onClick={onClose}>
        <ListItemIcon><HelpOutlineIcon fontSize="small" /></ListItemIcon>
        <ListItemText>Help</ListItemText>
        <ChevronRightIcon fontSize="small" />
      </MenuItem>

      <MenuItem onClick={handleLogout}>
        <ListItemIcon><LogoutIcon fontSize="small" /></ListItemIcon>
        <ListItemText>Log out</ListItemText>
      </MenuItem>
    </Menu>
  );
}

export default ProfileMenu;
