import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const ProfileHeader = () => {
  return (
    <Box
      sx={{
        height: "120px",
        width: "100%",
        position: 'relative',
        bgcolor: '#fff8ec',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
      }}
    >
      {/* Watermark Lotus Background */}
      <Box
        component="img"
        src="/lotus_watermark.png" // replace with your watermark image path
        alt="lotus watermark"
        sx={{
          position: 'absolute',
          right: 20,
          bottom: 0,
          width: 150,
          height: 'auto',
          opacity: 0.1,
        }}
      />

      {/* Left: Avatar + Info */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, zIndex: 1 }}>
        <Avatar
          src="https://randomuser.me/api/portraits/men/75.jpg"
          sx={{ width: 64, height: 64 }}
        />
        <Box>
          <Typography fontWeight="bold" color="error" fontSize="18px">
            विक्की जैन
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <WorkIcon sx={{ fontSize: 18, color: '#757575' }} />
            <Typography fontSize="14px" color="#757575">
              कार्यसमिति सदस्य
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Right: Points */}
      <Box
        sx={{
          bgcolor: '#fff',
          px: 2,
          py: 0.5,
          borderRadius: 3,
          border: '1px solid #ff5f5f',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          zIndex: 1,
        }}
      >
         
        <Typography fontWeight="bold" color="error">
          4000
        </Typography>
      </Box>
    </Box>
  );
};

export default ProfileHeader;
