import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Avatar,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const birthdayData = [
  {
    id: 1,
    name: 'विवकी जैन',
    role: 'Padadhukari Prabhari',
    image: 'https://i.ibb.co/b5qvFwm/person.jpg',
  },
  {
    id: 2,
    name: 'विवकी जैन',
    role: 'Padadhukari Prabhari',
    image: 'https://i.ibb.co/b5qvFwm/person.jpg',
  },
];

const BirthdaySection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.firstChild.clientWidth + 16;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    };

    const currentRef = scrollRef.current;
    currentRef?.addEventListener('scroll', handleScroll);
    return () => currentRef?.removeEventListener('scroll', handleScroll);
  }, []);

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
          Birthdays
        </Typography>
      </Box>

      {/* Scrollable Cards */}
      <Box
        ref={scrollRef}
        display="flex"
        overflow="auto"
        gap={2}
        sx={{ scrollSnapType: 'x mandatory', pb: 1 }}
      >
        {birthdayData.map((person, index) => (
          <Box
            key={person.id}
            sx={{
              minWidth: isMobile ? '80%' : 300,
              maxWidth: 320,
              borderRadius: 4,
              bgcolor: '#fff',
              boxShadow: index === activeIndex ? 3 : 1,
              scrollSnapAlign: 'start',
              flexShrink: 0,
              position: 'relative',
              p: 1,
              backgroundImage: `url("https://i.ibb.co/TWs1Z2d/confetti-bg.png")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <Box
              sx={{
                height: 260,
                borderRadius: 3,
                overflow: 'hidden',
                mb: 1.5,
              }}
            >
              <img
                src={person.image}
                alt={person.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
            <Box
              sx={{
                bgcolor: '#fff',
                px: 1,
                py: 1,
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography fontWeight="700" fontSize={18}>
                {person.name}
              </Typography>
              <Box display="flex" alignItems="center" mt={0.5}>
                <WorkIcon sx={{ fontSize: 16, mr: 0.5, color: 'gray' }} />
                <Typography variant="body2" color="text.secondary">
                  {person.role}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Dot Indicator */}
      <Box mt={2} display="flex" justifyContent="center">
        {birthdayData.map((_, index) => (
          <FiberManualRecordIcon
            key={index}
            sx={{
              fontSize: 10,
              mx: 0.5,
              color: index === activeIndex ? 'red' : '#ccc',
            }}
          />
        ))}
      </Box>

      {/* Button */}
      <Box mt={3} textAlign="center">
        <Button
          variant="outlined"
          fullWidth
          sx={{
            borderColor: 'red',
            color: 'red',
            borderRadius: 2,
            textTransform: 'none',
            fontWeight: 600,
            py: 1.2,
          }}
        >
          Upcoming Birthdays
        </Button>
      </Box>
    </Box>
  );
};

export default BirthdaySection;
