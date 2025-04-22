import React, { useRef, useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const events = [
  {
    id: 1,
    title: 'Terapanth Sthapna Divas',
    location: 'Ahmedabad',
    date: '17',
    monthYear: 'December 2024',
    image: 'https://i.ibb.co/5T7RCZz/event-1.jpg',
  },
  {
    id: 2,
    title: 'Annual Peace Meet',
    location: 'Mumbai',
    date: '22',
    monthYear: 'January 2025',
    image: 'https://i.ibb.co/5T7RCZz/event-1.jpg',
  },
];

const EventsSection = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const handleScroll = () => {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.firstChild.clientWidth + 16;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    };

    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener('scroll', handleScroll);
      return () => ref.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <Box px={2} py={3}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Box display="flex" alignItems="center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Lotus_flower.svg/2048px-Lotus_flower.svg.png"
            alt="lotus"
            style={{ width: 28, marginRight: 10 }}
          />
          <Typography variant="h6" fontWeight={600}>
            Events
          </Typography>
        </Box>
        <Button
          variant="contained"
          size="small"
          sx={{ backgroundColor: 'red', borderRadius: 2, textTransform: 'none' }}
        >
          View All
        </Button>
      </Box>

      {/* Scrollable Events */}
      <Box
        ref={scrollRef}
        display="flex"
        overflow="auto"
        gap={2}
        sx={{ scrollSnapType: 'x mandatory', pb: 1 }}
      >
        {events.map((event) => (
          <Card
            key={event.id}
            sx={{
              minWidth: isMobile ? '90%' : 300,
              maxWidth: 400,
              borderRadius: 4,
              flexShrink: 0,
              scrollSnapAlign: 'start',
            }}
          >
            {/* Image with overlays */}
            <Box
              sx={{
                height: 200,
                backgroundImage: `url(${event.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                position: 'relative',
              }}
            >
              {/* Date badge */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  backgroundColor: '#fff',
                  borderRadius: 2,
                  textAlign: 'center',
                  px: 1,
                  py: 0.5,
                  zIndex: 1,
                }}
              >
                <Typography variant="subtitle1" fontWeight={700}>
                  {event.date}
                </Typography>
                <Typography variant="caption">{event.monthYear}</Typography>
              </Box>

              {/* Register Now */}
              <Button
                variant="contained"
                size="small"
                sx={{
                  position: 'absolute',
                  bottom: 8,
                  right: 8,
                  backgroundColor: 'red',
                  textTransform: 'none',
                  fontSize: 12,
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 2,
                }}
              >
                Register Now
              </Button>
            </Box>

            {/* Event Info */}
            <CardContent>
              <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                {event.title}
              </Typography>
              <Box display="flex" alignItems="center">
                <LocationOnIcon sx={{ fontSize: 18, color: 'gray', mr: 0.5 }} />
                <Typography variant="body2" color="text.secondary">
                  {event.location}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Scroll Dots */}
      <Box mt={2} display="flex" justifyContent="center">
        {events.map((_, index) => (
          <FiberManualRecordIcon
            key={index}
            sx={{
              fontSize: 12,
              mx: 0.5,
              color: index === activeIndex ? 'red' : '#ccc',
              transition: 'color 0.3s',
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default EventsSection;
