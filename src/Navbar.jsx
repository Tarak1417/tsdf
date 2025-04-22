import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Avatar,
  Box,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TaskIcon from '@mui/icons-material/Assignment';
import GroupIcon from '@mui/icons-material/Group';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ChatIcon from '@mui/icons-material/Chat';
import SchoolIcon from '@mui/icons-material/School';
import ArticleIcon from '@mui/icons-material/Article';
import PollIcon from '@mui/icons-material/Poll';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import QuizIcon from '@mui/icons-material/Quiz';
import UpdateIcon from '@mui/icons-material/Update';
import DownloadIcon from '@mui/icons-material/Download';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';
import logo from "./assets/_105553271709664.png"

const navItems = [
  { text: 'My Task', icon: <TaskIcon /> },
  { text: 'My Community', icon: <GroupIcon /> },
  { text: 'Leaderboard', icon: <EmojiEventsIcon /> },
  { text: 'Chats', icon: <ChatIcon /> },
  { text: 'Courses', icon: <SchoolIcon /> },
  { text: 'Knowledge', icon: <ArticleIcon /> },
  { text: 'Polls', icon: <PollIcon /> },
  { text: 'Contributions', icon: <NoteAddIcon /> },
  { text: 'Quizzes', icon: <QuizIcon /> },
  { text: 'Updates', icon: <UpdateIcon /> },
  { text: 'Downloads', icon: <DownloadIcon /> },
  { text: 'News', icon: <NewspaperIcon /> },
  { text: "FAQ's", icon: <HelpIcon /> },
  { text: 'Settings', icon: <SettingsIcon /> },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };
  const navigate = useNavigate();

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#ffefd5', height: 100,  boxShadow: 'none' }}>
        <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Hamburger Icon */}
          <IconButton onClick={toggleDrawer(true)} sx={{ backgroundColor: '#fff' }}>
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <img
            src={logo} // replace with your logo image
            alt="logo"
            style={{ height: 60 }}
          />

          {/* Profile Icon */}
          <IconButton sx={{ backgroundColor: '#fff' }} onClick={() => navigate('/profile')}>
  <AccountCircleIcon />
</IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer Sidebar */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 280 }} role="presentation">
          {/* User Info */}
          <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box>
              <Avatar src="https://randomuser.me/api/portraits/men/75.jpg" />
              <Typography variant="subtitle1">Vikki Jain</Typography>
              <Typography variant="caption" color="text.secondary">Karyasamiti Sadasya</Typography>
            </Box>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider />

          {/* Navigation List */}
          <List>
            {navItems.map((item, index) => (
              <ListItem button key={index}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>

          {/* Version Info */}
          <Box sx={{ p: 2, mt: 'auto' }}>
            <Typography variant="caption" color="text.secondary">
              Version 89799.00
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
