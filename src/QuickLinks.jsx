import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

const quickLinks = [
  { label: 'Poll', icon: 'https://img.icons8.com/ios/50/poll-vertical.png' },
  { label: 'Knowledge', icon: 'https://img.icons8.com/ios/50/open-book--v2.png' },
  { label: 'Download', icon: 'https://img.icons8.com/ios/50/download--v1.png' },
  { label: 'More', icon: 'https://img.icons8.com/ios/50/more.png' },
];

const QuickLinks = () => {
  return (
    <Box px={2} py={3}>
      {/* Header */}
      <Box display="flex" alignItems="center" mb={2}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Lotus_flower.svg/2048px-Lotus_flower.svg.png"
          alt="lotus"
          style={{ width: 28, marginRight: 8 }}
        />
        <Typography variant="h6" fontWeight="600">
          Quick Links
        </Typography>
      </Box>

      {/* Card Container */}
      <Box
        display="flex"
        justifyContent="space-around"
        bgcolor="#fff"
        borderRadius={4}
        boxShadow={1}
        py={2}
      >
        {quickLinks.map((item) => (
          <Box
            key={item.label}
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{ cursor: 'pointer' }}
          >
            <Avatar
              src={item.icon}
              alt={item.label}
              sx={{
                width: 56,
                height: 56,
                bgcolor: '#f5f5f5',
                mb: 1,
              }}
              variant="circular"
            />
            <Typography variant="body2" fontWeight="500">
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default QuickLinks;
