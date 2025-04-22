import React from 'react';
import { Box, Typography, Button, Chip, IconButton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import SquareIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import lotus from './assets/Mask group (11).png'

const TaskCard = ({ icon, label, status, statusColor, outlined }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      borderRadius: 3,
      p: 2,
      mb: 2,
      boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      {/* Square Icon Box */}
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: 2,
          backgroundColor: '#f5f5f5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: `2px solid ${statusColor}`,
        }}
      >
        {icon}
      </Box>

      {/* Task Info */}
      <Box>
        <Typography fontWeight="bold">{label}</Typography>
        <Chip
          label={status}
          size="small"
          variant={outlined ? 'outlined' : 'filled'}
          sx={{
            mt: 0.5,
            fontSize: '12px',
            bgcolor: outlined ? 'transparent' : `${statusColor}20`,
            color: statusColor,
            borderColor: statusColor,
            fontWeight: 500,
          }}
        />
      </Box>
    </Box>

    {/* Actions */}
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <SquareIcon sx={{ color: '#00c853' }} />
      <SquareIcon sx={{ color: '#00c853' }} />
      <SquareIcon sx={{ color: '#00c853' }} />
      <IconButton size="small">
        <MoreVertIcon />
      </IconButton>
    </Box>
  </Box>
);

const TasksSection = () => {
  return (
    <Box sx={{ p: 2, maxWidth: 400, mx: 'auto' }}>
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box
            sx={{
              width: 32,
              height: 32,
              borderRadius: 2,
              backgroundColor: '#fff',
              boxShadow: '0px 2px 6px rgba(0,0,0,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              src={lotus}
              alt="lotus"
              sx={{ width: 30, height: 30 }}
            />
          </Box>
          <Typography fontWeight="bold" color="error">
            Tasks
          </Typography>
        </Box>
        <Button size="small" variant="text" sx={{ color: 'error.main', fontWeight: 'bold' }}>
          View All
        </Button>
      </Box>

      {/* Task Cards */}
      <TaskCard
        icon={<CheckCircleIcon color="success" />}
        label="Sangathan Yatra"
        status="Completed"
        statusColor="#4caf50"
      />
      <TaskCard
        icon={<ErrorOutlineIcon color="error" />}
        label="Sangathan Yatra"
        status="Due"
        statusColor="#f44336"
      />
      <TaskCard
        icon={
          <Box sx={{ textAlign: 'center', fontSize: '15px' }}>
            <Typography fontSize={15} fontWeight="bold">
              25
            </Typography>
            
          </Box>
        }
        label="Sangathan Yatra"
        status="In progress"
        statusColor="#2196f3"
        outlined
      />
      <TaskCard
        icon={
          <Box sx={{ textAlign: 'center', fontSize: '15px' }}>
            <Typography fontSize={15} fontWeight="bold">
              25
            </Typography>
          
          </Box>
        }
        label="Sangathan Yatra"
        status="To do"
        statusColor="#ff9800"
        outlined
      />
    </Box>
  );
};

export default TasksSection;
