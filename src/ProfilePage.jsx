import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
} from '@mui/material';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import NoteIcon from '@mui/icons-material/Note';
import ScoreIcon from '@mui/icons-material/Score';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import FeedbackIcon from '@mui/icons-material/Feedback';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { useNavigate } from 'react-router-dom';

const profileOptions = [
  { text: 'Profile', icon: <PersonIcon /> },
  { text: 'My Area', icon: <LocationOnIcon /> },
  { text: 'Notification', icon: <NotificationsIcon />, subtitle: 'Turn on/off notification' },
  { text: 'My Contribution', icon: <EmojiEventsIcon /> },
  { text: 'My Notes', icon: <NoteIcon /> },
  { text: 'My Scores', icon: <ScoreIcon /> },
  { text: 'Contact', icon: <ContactPhoneIcon /> },
  { text: 'Feedback', icon: <FeedbackIcon /> },
  { text: 'Support', icon: <SupportAgentIcon /> },
  { text: 'Settings', icon: <SettingsIcon /> },
];

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ overflow: 'hidden', height: '100vh', bgcolor: '#fff' }}>
      {/* Header */}
      <Box sx={{ bgcolor: '#fff5e6', p: 2, borderBottom: '1px solid #eee', borderRadius: '0 0 20px 20px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <IconButton onClick={() => navigate('/')}>
            <ArrowBackIosNewIcon />
          </IconButton>
          <Avatar src="https://randomuser.me/api/portraits/men/75.jpg" sx={{ width: 60, height: 60 }} />
          <Box width={40} /> {/* Spacer to balance the back icon */}
        </Box>
        <Box mt={1} textAlign="center">
          <Typography variant="h6">Vikki Jain</Typography>
          <Typography variant="caption" color="text.secondary">
            Karyasamiti Sadasya
          </Typography>
        </Box>
      </Box>

      {/* Scrollable List */}
      <Box sx={{ height: 'calc(100vh - 210px)', overflow: 'auto', px: 2, pt: 2 }}>
        <List>
          {profileOptions.map((item, index) => (
            <ListItem
              key={index}
              sx={{
                mb: 1,
                border: '1px solid #e0e0e0',
                borderRadius: 2,
                bgcolor: '#fdfdfd',
                boxShadow: '0px 1px 4px rgba(0,0,0,0.05)',
              }}
              secondaryAction={<ArrowForwardIosIcon fontSize="small" />}
              button
            >
              <ListItemIcon sx={{ color: '#4caf50' }}>{item.icon}</ListItemIcon>
              <ListItemText
                primary={<Typography fontWeight="bold">{item.text}</Typography>}
                secondary={item.subtitle || 'Update and modify your profile'}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Logout */}
      <Box sx={{ pb: 10 }}>
        <Button variant="contained" color="error" fullWidth sx={{ borderRadius: 2 }}>
          Log Out
        </Button>
      </Box>
    </Box>
  );
};

export default ProfilePage;
